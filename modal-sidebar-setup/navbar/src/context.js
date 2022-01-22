import React, {useContext,useState } from 'react';

 const AppContext = React.createContext();


 
const AppProvider = ({children})=>{
    const [isOpenModal,setIsOpenModal] = useState(false);
    const [isOpenSidebar,setIsOpenSidebar] = useState(false);

    const openSidebar =()=>{
        return setIsOpenSidebar(true);
    }
    const openModal  = ()=>{
        return setIsOpenModal(true);
    }
   const closeSidebar =()=>{
        return setIsOpenSidebar(false);
    }
   const closeModal  = ()=>{
        return setIsOpenModal(false);
    }
 return <AppContext.Provider 
        value={{
            isOpenModal,
            isOpenSidebar,
            openSidebar,
            openModal,
            closeSidebar,
            closeModal
        }}>
    {children}</AppContext.Provider>
}

  export const useGlobalContext = () =>{
    return useContext(AppContext);
}


export default AppProvider;
