import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
function Header() {
    const[btnName, setBtnName]= useState("Login")
    const onlineStatus = useOnlineStatus()
  return (
    <div className='header'>
        <div className='logo'>
            <img src='/Images/SRJ.png' alt='res-logo'/>
        </div>

        <div className='nav-items'>
            <ul>
                <li>
                    Online Status: {onlineStatus ? "🟢" : "🔴"}
                </li>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li>
                    <Link to="/contactus">Contact Us</Link>
                </li>
                <li>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li>
                    <Link to="/cart">Cart</Link>
                </li>
                <button className='login-btn' onClick={()=>{
                    // if(btnName==="Login"){
                    //     setBtnName("Logout")
                    // }else{
                    //     setBtnName("Login")
                    // }

                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
            </ul>
        </div>
    </div>
  )
}

export default Header