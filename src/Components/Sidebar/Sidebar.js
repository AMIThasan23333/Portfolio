import React from 'react'
import "./Sidebar.css";

import Logo from '../assets/logo.svg'
const Sidebar = () => {
  return (
    <aside className='aside'>
      <a href='#home' className='nav_logo'>
        <img src={Logo} alt=''/>
      </a>

      <nav className="nav">
        <div className="nav-menu">
            <ul className="nav_list">
                <li className="nav_item">
                    <a href=" "  className="nav_link">
                             
                    </a>
                </li>
            </ul>
        </div>
      </nav>



    </aside>
  )
}

export default Sidebar