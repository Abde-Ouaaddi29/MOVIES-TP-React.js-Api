import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import Suggest from "./suggest";
import { useEffect } from "react";


export default function Show(){

    const {id} = useParams();
    const imgUrl = useSelector((store) => store.BASEURL);
    const films = useSelector((store) => store.movies.results)

    
    if( !id) {
        console.error('not find')
        return <> <span>not find</span></>
    }

    const film = films.find(item => {
        return item.id == parseInt(id)
    });

    console.log(film)


    // console.log('current', film.genre_ids)

    const getSimilarFilms = () => {
        const CurrentGenreIds = film.genre_ids;
        return films.filter(item => 
            item.id !== film.id && 
            CurrentGenreIds.some(genre => item.genre_ids.includes(genre))
        );
    }

    

    // console.log(getSimilarFilms())

    const suggestionMovies = getSimilarFilms()
    // console.log(suggestionMovies)


    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"})
    })


    return (<>
       <div className="container p-6 lg:w-6/12  m-auto border-x  mt-2">
         <h1 className="font-light m-auto text-xl text-purple-700 mb-5">{film.name}</h1>
         <div className=" w-full flex justify-center  mb-6 ">
            <img className=" rounded shadow" src={imgUrl+film.backdrop_path} alt="" />
         </div>
         <h3 className="font-mono text-gray-300 mb-4">{film.first_air_date}</h3>

         <div className="  m-auto text-start mb-4">
            <div className=" mt-4"> <span className="font-bold"> lang </span> : {film.original_language}</div>
            <div className=" mt-2"> <span className="font-bold"> vote count </span> : {film.vote_count}</div>
            <div className=" mt-2"> <span className="font-bold"> popularity </span> : {film.popularity}</div>
            <div className=" mt-2 flex  items-center"> <span className="font-bold"> vote average </span> : {film.vote_average} <span><Star/></span> </div>
        </div>

         <div className=" m-auto mt-4 font-light">
           <span>{film.overview}</span>
         </div>
           <Link  to={'/'}>
                <div  className="bg-purple-400 p-2 mt-10 text-center text-white font-bold tracking-widest hover:bg-purple-500 hover:scale-95 transition-all rounded ">
                    Back 
                </div>
          </Link>
       </div>    

       <div className=" mt-10 border-t ">
           <div className=" p-2 bg-gray-100 text-center  font-bold tracking-widest">
              suggestions
           </div>
           <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-4  lg:px-9 px-2 py-8 ">
             <Suggest suggestionMovies={suggestionMovies} />
           </div>
       </div>
    </>
    )
}




const Star = () => {
    return <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" className="ml-1 w-5 h-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
</>
}