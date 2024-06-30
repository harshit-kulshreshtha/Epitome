import React from "react";
import { customerType } from "../types";
import { Action, ActionType } from "../types/action-types";


// type PayloadType<Payload = unknown> = {
//     value: Payload;
// }
export const setCustomerInitial = (dispatch: React.Dispatch<Action>) => (value: customerType) => dispatch({
    type: "SET_CUSTOMER_INITIALS",
    payload: value,
})