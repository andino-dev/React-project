import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'
const Submenu = () => {
  const {
    isOpenSubmenu,
    page: { page, links },
    location,
  } = useGlobalContext()
  console.log(page);
  const container = useRef(null);
   const[col,setCol] = useState('col-2');
  useEffect(()=>{
    const submenu = container.current
    const {center,bottom} = location;
     submenu.style.left = `${center}px`;
     submenu.style.top = `${bottom}px`;

     if(links.length===3){
       setCol('col-3');
     }
     if(links.length >4){
       setCol('col-4');
     }
  },[location,links])
  
  return(
    <aside className={`${isOpenSubmenu?"submenu show":"submenu"}` } ref={container} >
      <h4>{page}</h4>
      <div className={`submenu-center ${col}`}>
      {links.map((link)=>{
        const {label,icon,url} = link;
        return <a href={url}>{icon}{label}</a>
      }
      )}
      </div>
    </aside>
  )
}

export default Submenu
