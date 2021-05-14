import React, { createContext, useContext, useReducer } from 'react'

//prepare the datalayer
export const StateContext = createContext();

//Wrap our app and provide data layer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);
//pull the information from datalayer
export const useStateValue = () => useContext(StateContext)