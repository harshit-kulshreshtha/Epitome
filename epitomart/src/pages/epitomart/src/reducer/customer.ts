import { customerType } from "../types"
import { Action } from "../types/action-types"

export const customer = (state: customerType, action: Action) => {
    switch(action.type){
        case "SET_CUSTOMER_INITIALS":
            return {
                ...state,
                bio:{
                   ...state.bio
                }   
            }
    }
}