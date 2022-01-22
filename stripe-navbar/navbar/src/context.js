import React, { useState, useContext } from 'react'
import sublinks from './data';


const AppContext = React.createContext();

const AppProvider = ({children})=>{
    const [isOpenSidebar,setIsOpenSidebar] = useState(false);
    const [isOpenSubmenu,setIsOpenSubmenu] = useState(false);
    const [page,setPage] = useState({page:"",links:[]});
    const [location,setLocation] = useState({});
  const openSubmenu = (text,coordinates)=>{
          const page  = sublinks.find((link)=> link.page ===text);
          console.log(page)
      setPage(page);
      setLocation(coordinates);
      setIsOpenSubmenu(true);
  }
    const openSidebar =()=>{
        return setIsOpenSidebar(true)
    }
     const closeSidebar =()=>{
        return setIsOpenSidebar(false);
    }

    const closeSubmenu = ()=>{
        return setIsOpenSubmenu(false);

    }
    return (
        <AppContext.Provider 
        value={{isOpenSidebar,
            location,
            isOpenSubmenu,
            page,
            openSidebar,
            closeSidebar,
            openSubmenu,
            closeSubmenu
        }}>{children}</AppContext.Provider>
    )
}
export const  useGlobalContext = ()=>{
    return useContext(AppContext);
}

export  {AppContext,AppProvider};