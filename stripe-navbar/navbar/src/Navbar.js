import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();
  const handleSubmenu = (e)=>{
    if(!e.target.classList.contains('link-btn')){
       closeSubmenu();
    }
  }
const displayMenu = (e)=>{
const page = e.target.textContent.toLowerCase();

console.log(page);
const tmpBtn = e.target.getBoundingClientRect();

const center = (tmpBtn.left + tmpBtn.right)/2;

const bottom  = tmpBtn.bottom - 3;

openSubmenu(page,{center,bottom});
}
  return(
    <nav className='nav' onMouseOver={handleSubmenu}>
      <div className='nav-center'>
        <div className="nav-header">
          <img src={logo} alt="stripe"/>
            <button className="btn toggle-btn" onClick={openSidebar}>
             <FaBars/>
            </button>
        </div>
        <ul className="nav-links">
              <li>
               <button className="link-btn" onMouseOver={displayMenu}>Products</button>
              </li>
              <li>
               <button className="link-btn"onMouseOver={displayMenu} >Developers</button>
              </li>
              <li>
               <button className="link-btn"onMouseOver={displayMenu} >Company</button>
              </li>
        </ul>
            <button className="btn signin-btn">sign in</button>
      </div>
    </nav>
  )
}

export default Navbar
