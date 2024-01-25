export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVED_FAVORITE = 'REMOVED_FAVORITE';

//FUNCIONES
export const addFav = (char)=>{
    return {
        type: ADD_FAVORITE,
        payload: char
    }
}

export const removeFav = (id)=>{
    return{
        type: REMOVED_FAVORITE,
        payload: id
    }
}