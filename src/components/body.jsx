import { useEffect } from "react";
import Card from "./card";
import Pagination from "./pagination";
import { useSelector } from "react-redux";


export default function Body(){
    //  [pages, setPages] = useState([]);
    const films = useSelector((store) => store.movies.results);
    const error = useSelector((store) => store.error);
    console.log('les moves',films)
    const page = useSelector((store) => store.page)
    console.log('page',page)

    useEffect(() => {
        window.scrollTo({top:0, behavior:"smooth"})
    },[page])

    return <>
    <div className="w-full my-3 flex-col justify-center items-center ">
        {films ? 
        <div className="w-full m-auto p-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4  overflow-y-auto">
           <Card/>  
        </div>
        :
         <div className="w-full text-gray-400 bg-slate-100 p-4 border-b text-center my-10 text-xl">{error}</div>
       }
    </div>

    <div className="w-8/12  m-auto p-4 flex justify-center items-center ">
            <Pagination/>
        </div>
      
    </>
}