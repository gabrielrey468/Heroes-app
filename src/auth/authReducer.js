import { types } from "../types/types"

 const Initialstate = {
   name:'',
   logged: false
}


export const authReducer = ( state = Initialstate , action ) => {

    switch(action.types) {
        
        case types.login:
            return {
                 ...action.payload,
                logged: true
            }

        case types.logout:
            return {
                logged: false
            }

        default:
            return state
    }
}