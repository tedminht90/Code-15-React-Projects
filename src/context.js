import React, { useState, useContext } from 'react'
import sublinks from './data'

const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({page:"", links:[]});
    const [location, setLocation] = useState({});

    const openSidebar = () =>{
        setIsSidebarOpen(true);
    }
    const closeSidebar = () =>{
        setIsSidebarOpen(false);
    }
    const openSubmenu = (text, coordinates) =>{
        const newPage = sublinks.find((item)=>item.page === text);
        setPage(newPage);
        setLocation(coordinates)
        setIsSubmenuOpen(true);
    }
    const closeSubmenu = () =>{
        setIsSubmenuOpen(false);
    }

    return <AppContext.Provider 
        value={{isSidebarOpen,
                isSubmenuOpen,
                openSidebar,
                closeSidebar,
                openSubmenu,
                closeSubmenu,
                page,
                location
                }}
        >{children}
    </AppContext.Provider>
}
//custom hook
export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppProvider}