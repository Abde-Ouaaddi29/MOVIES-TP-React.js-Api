export const GET_MOVIES = 'GET_MOVIES';
export const SET_PAGES = 'SET_PAGES';
export const SET_SEARCH = 'SET_SEARCH';
export const SET_ERROR = 'SET_ERROR';
// export const SET_SELECT = 'SET_SELECT';


export const GETMOVIES = (data) => {
    return {
        type:GET_MOVIES,
        payload:data
    }
}

export const SETPAGES = (data) => {
    return {
        type:SET_PAGES,
        payload:data
    }
}

export const SETSEARCH = (data) => {
    return {
        type:SET_SEARCH,
        payload:data
    }
}

export const SETERROR = (data) => {
    return {
        type:SET_ERROR,
        payload:data
    }
}

// export const SETSELECT = (data) => {
//     return {
//         type:SET_SELECT,
//         payload:data
//     }
// }