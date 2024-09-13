<<<<<<< HEAD
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export let UserContext= createContext()

export default function UserContextProvider({children}) {
    const [userData, setUserData] = useState('')
    // const navigate = useNavigate();

useEffect(()=>{
    if(localStorage.getItem('userToken') != null){
        setUserData(localStorage.getItem('userToken'))
    }
},[])

    return <UserContext.Provider value={{userData,setUserData}}>
        {children}

    </UserContext.Provider>
=======
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";




export let UserContext= createContext()

export default function UserContextProvider({children}) {
    const [userData, setUserData] = useState('')
    // const navigate = useNavigate();

useEffect(()=>{
    if(localStorage.getItem('userToken') != null){
        setUserData(localStorage.getItem('userToken'))
    }
},[])

    return <UserContext.Provider value={{userData,setUserData}}>
        {children}

    </UserContext.Provider>
>>>>>>> 4bd04e17803f649796db74775bc7235f22ecff85
}