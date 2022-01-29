import React , {useState,useEffect,useMemo,createContext} from "react"
 import {ResturantService,ResturantDataAdd} from "./resturant.service"


export const ResturantContext = createContext();

export const ResturantContextProvider = ({children}) => {
     return(
         <ResturantContext.Provider
         value={{
             resturant:[1,2,3]
         }}
         >
             {children}
         </ResturantContext.Provider>
     )
 }
