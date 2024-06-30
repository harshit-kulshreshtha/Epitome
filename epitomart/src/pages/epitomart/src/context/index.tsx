import { createContext, useContext, useReducer } from "react";
import { Context, customerType } from "../types";
import React from "react";
import { initialState, rootReducer } from "../reducer";
import { setCustomerInitial } from "../action";

const EpitomartContext = createContext<Context>(null as never);

export const useEpitomartContext  = () => useContext(EpitomartContext);

type DispatcherType =  {
    setCustomerInitial: (value: customerType) => void;
}

export const EpitomartContextProvider = ({
    children
}: {
    children: React.ReactElement;
}) => {
   const [state, dispatch] = useReducer(
    rootReducer,
    initialState
   );

   const dispatchers: DispatcherType = {
    setCustomerInitial: setCustomerInitial(dispatch),
   };

   return(
    <EpitomartContext.Provider value={{
        customer: state.customer,
        dispatchers
    }}>{children}</EpitomartContext.Provider>
   )
};

