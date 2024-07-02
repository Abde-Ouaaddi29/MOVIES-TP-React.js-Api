import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

export default function Suggest({suggestionMovies}) {
     console.log(suggestionMovies)

     const imgUrl = useSelector(store => store.BASEURL)


     const sliceTiltle = (str, maxLength) => {
        if(str.length > maxLength) {
          return str.slice(0, maxLength) + '....';
        }
          return str;
    }

    return<>
       
      { suggestionMovies.map(film => {
            return <>
            
            <Link to={`/${film.id}`} key={film.id}className=" parent relative  rounded shadow border-2 border-purple-400 h-[30vh] hover:border-green-400 hover:scale-105 transition-all">
                        <span className="bg-red-700  text-sm  absolute top-2 left-2 rounded p-1 flex items-center text-white"> {film.vote_average} <Star/> </span>
                        
                        <img className="h-full bg-cover rounded" src={imgUrl+film.backdrop_path} alt="" />
                        
                        <div className="   p-3 text-sm text-white font-light">
                            <span className="name-film absolute bottom-2 left-2 text-sm bg-black px-2 py-1 rounded  text-yellow-400 border border-yellow-400 ">  { sliceTiltle(film.original_name, 20)} </span>
                        </div>
                
            </Link>
              
            </>
        })}
    
      
    </>
}

const Star = () => {
    return <>
    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" className="ml-1 w-3 h-3">
      <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
    </svg>
</>
}