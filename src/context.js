import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{

    const [showModal,setShowModal] =  useState(false);
    const [showSidebar,setShowSidebar] = useState(false);
    return (<AppContext.Provider value ={{showModal,setShowModal,showSidebar,setShowSidebar}}>
        {children}
    </AppContext.Provider>);
}

// custom hook 


export const useGlobalContext =() =>{
    return useContext(AppContext);
}


export {AppContext, AppProvider}