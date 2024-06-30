import { State } from "../types";
import { Action } from "../types/action-types";
import {customer } from "./customer";

export const initialState = {
    customer:{
        bio:{
            firstName:"",
            lastName: "",
            email: "",
            phoneNumber: "",
            dob: "",
        }
    }
   
};

export const rootReducer = (state: State, action: Action):State => ({
    customer: customer(state.customer, action)
});