import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{


    const [isSidebarOpen, setIsSideBarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [localtion, setLocaltion] = useState({});
    const [page,setPage] = useState({page:'',links:[]})

    const openSidebar = () =>{
        return setIsSideBarOpen(true)
    }
    const closeSidebar = () =>{
        return setIsSideBarOpen(false)
    }
    const openSubmenu = (text, coordinates) =>{
        const newPage = sublinks.find((link)=> link.page=== text);
        setPage(newPage)
        setLocaltion(coordinates);
        return setIsSubmenuOpen(true)
    }
    const closeSubmenu = () =>{
        return setIsSubmenuOpen(false)
    }

    return <AppContext.Provider value={{isSidebarOpen,
                                        isSubmenuOpen,
                                        openSidebar,
                                        closeSidebar,
                                        openSubmenu,
                                        closeSubmenu,
                                        localtion,
                                        page}}
        >{children}
    </AppContext.Provider>

}
//custom hook
export const useGlobalConext = () =>{
    return useContext(AppContext)    
}

export {AppProvider}