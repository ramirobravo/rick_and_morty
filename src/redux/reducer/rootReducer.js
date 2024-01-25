import { ADD_FAVORITE, REMOVED_FAVORITE } from "../actions/actions";

//estado global inicial
const initialState = {
    myFavorites: []
}

//logica de cada action

const rootReducer = (state = initialState, action)=>{
    const { type, payload } = action;

    switch (type) {

        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavorites, payload]
            }

        case REMOVED_FAVORITE:
            return {
                ...state,
                myFavorites: state.myFavorites.filter((char)=>char.id !== payload)
            }
    
        default:
            return {...state}
    }
}

export default rootReducer;