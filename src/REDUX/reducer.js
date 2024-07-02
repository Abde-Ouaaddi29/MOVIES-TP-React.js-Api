import { GET_MOVIES, SET_ERROR, SET_PAGES, SET_SEARCH  } from "./actions";


const initialValues = {
  movies:[],
  page:'',
  search:'',
  BASEURL:'https://image.tmdb.org/t/p/w1280',
  error:'404'
 }


export default function Reducer( state=initialValues,action) {

    switch(action.type) {
        case GET_MOVIES:
        return {
            ...state,
            movies:action.payload    
        }

        case SET_PAGES:
        return {
            ...state,
            page:action.payload
        }

        case SET_ERROR:
            return {
                ...state,
                error:action.payload
            }

        
    case SET_SEARCH:
        return {
          ...state,
          search:action.payload,
          movies: {
            ...state.movies,
            results: state.movies.results.filter((movie) => {
              return movie.name.toLowerCase().includes(action.payload.toLowerCase());
            }),
          },
        };

        // case SET_SELECT:
        //     return {
        //       ...state,
        //       select_lang: action.payload,
        //       movies: {
        //         ...state.movies,
        //         results: state.movies.results.filter((movie) => {
        //           return movie.original_language.includes(action.payload);
        //         }),
        //       },
        //     };
    

        default:
            return state;
    }
}