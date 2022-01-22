import React ,{useState,useEffect,useRef}from 'react'
import {FaBars} from 'react-icons/fa';
import logo from './logo.svg';
import { links } from './data';
import {social} from './data';
function Navbar() {
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const [showToggle,setShowToggle] = useState(false);
    useEffect(()=>{
      const linksRefHeight = linksRef.current.getBoundingClientRect().height;
      //const linksRefContainerHeight = linksContainerRef.current.getBoundingClientRect();
      //console.log(linksRefContainerHeight);
      if(showToggle){
         return linksContainerRef.current.style.height = `${linksRefHeight}px`;
      }else{
         return  linksContainerRef.current.style.height = "0px";
      }
    
    },[showToggle])
    return (
            <nav>
              <div className='nav-center'>
                <div className='nav-header'>
                  <img src={logo} alt='logo' />
                  <button className='nav-toggle' onClick ={()=>setShowToggle(!showToggle)}>
                  <FaBars />
                  </button>
                </div>
                <div className={`${showToggle ?'links-container show-container': 'links-container'}`} ref={linksContainerRef}>
                <ul className='links' ref={linksRef}>
                {links.map((link)=>{
                    const {id,url,text} = link;
                    return (
                        <li key={id}>
                          <a href={url}>{text}</a>
                        </li>
                    )
                })}
                </ul>
                </div>
                <ul className='social-icons'>
                {social.map((socialIcon)=>{
                    const {id,url,icon} = socialIcon;
                 return ( 
                    <li key={id}>
                    <a href={url}>{icon}</a>
                    </li>)
                })}
                </ul>
              </div>
            </nav>
          )
}

export default Navbar
