import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GETMOVIES, SETERROR } from "../REDUX/actions";

export default function API(){

    const [error, setError] = useState('')
    const page = useSelector((store) => store.page);
    const search = useSelector((store) => store.search);

    // const [url, setUrl] = useState('')

    console.log('url',search)


    // if(search !== "") {
    //    setUrl(`https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=true&query=${search}&page=${page}`)
    // } else {
    //    setUrl(`https://api.themoviedb.org/3/discover/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=true&page=${page}` )
    // }

    // const url = `https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=true&query=${search}&page=${page}`


    const dispatch = useDispatch()
    dispatch(SETERROR(error))

    const fetchIt = async () => {
        try {
          setError('loading...')
          const url = search 
          ? `https://api.themoviedb.org/3/search/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=true&query=${search}&page=${page}`
          : `https://api.themoviedb.org/3/discover/tv?api_key=fef55a6754f2f6d00a0038388915039c&include_adult=true&page=${page}`;
          
         const response = await fetch(url);
          // const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`),
            setError(response.status)
          }
          const data = await response.json();
          dispatch(GETMOVIES(data));
          
        } catch (err) {
          console.error('An error occurred:', err);
          setError(err.message)
        }
      };



useEffect(()=>{
    fetchIt()
},[page,dispatch])


}