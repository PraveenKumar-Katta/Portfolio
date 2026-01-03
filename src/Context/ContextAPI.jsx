import { createContext, useContext, useRef } from "react";

const ElementContext=createContext()
export const useElements=()=>useContext(ElementContext)

export const ElementProvider=({children})=>{
    let aboutRef=useRef(null)
    let projectRef=useRef(null)
    let contactRef=useRef(null)
    let skillsRef=useRef(null)
return(
    <ElementContext.Provider value={{aboutRef,projectRef,contactRef,skillsRef}} >
        {children}
    </ElementContext.Provider>
)
}