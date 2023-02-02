import {  ArrowDropDown, NotificationsNone, SearchOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import "../styles/navbar.scss"

function Navbar() {

    const [isScrolled,setIsScrolled] = useState(false)

    window.onscroll =()=>{
        setIsScrolled(window.pageYOffset === 0 ? false:true)
        return () => (window.onscroll = null) 
    }

  return (
    <nav >
       
    <div className={isScrolled ? "container scrolled": "container"}>
        <div className="nav-left">
            <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="error"  />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>



        </div>
        <div className="nav-right">
         <SearchOutlined className='icons' />
         <span>KID</span>
         <NotificationsNone className='icons' />
         <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="error" />
        <div className="profile-items">
        <ArrowDropDown className='icons' /> 
        <div className="options">
            <span>Settings</span>
            <span>Logout</span>
        </div>
        </div>
        </div>
    </div>
    
    </nav>
  )
}

export default Navbar