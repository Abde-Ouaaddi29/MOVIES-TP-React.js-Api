import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"


export default function Show(){

    const {id} = useParams();
    const imgUrl = useSelector((store) => store.BASEURL);
    const films = useSelector((store) => store.movies.results)

    const film = films.find(item => {
        return item.id === parseInt(id)
    });

    console.log(film)


    return (<>
       <div>
        <img src={imgUrl+film.backdrop_path} alt="" />
         <h1>{film.name}</h1>
         <h3>{film.first_air_date}</h3>
         <span>{film.overview}</span>
       </div>
    </>
    )
}