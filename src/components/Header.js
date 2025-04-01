import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
function Header() {
    const[btnName, setBtnName]= useState("Login")
    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)
 
  return (
    <div className='flex justify-between bg-green-100 shadow-xl m-2 h-28'>
        <div >
            <img className="w-40 h-28 "src='/Images/SRJ.png' alt='res-logo'/>
        </div>

        <div className='flex items-center'>
            <ul className='flex p-4 m-5'>
                <li className='px-4 mt-2'>
                    Online Status: {onlineStatus ? "🟢" : "🔴"}
                </li>
                <li className='px-4 mt-2'>
                    <Link to="/">Home</Link>
                </li>
                <li className='px-4 mt-2'>
                    <Link to="/aboutus">About Us</Link>
                </li>
                <li className='px-4 mt-2'>
                    <Link to="/contactus">Contact Us</Link>
                </li>
                <li className='px-4 mt-2'>
                    <Link to="/grocery">Grocery</Link>
                </li>
                <li className='px-4 mt-2'>
                    <Link to="/cart">Cart</Link>
                </li>
                <button className='px-4 bg-red-100 font-bold h-10 rounded-lg' onClick={()=>{
                    // if(btnName==="Login"){
                    //     setBtnName("Logout")
                    // }else{
                    //     setBtnName("Login")
                    // }

                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                }}>{btnName}</button>
                <li className='px-4 mt-2 font-bold'>
                    {loggedInUser}
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header