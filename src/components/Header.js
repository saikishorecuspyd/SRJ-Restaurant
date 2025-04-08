import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/UserContext'
import { FaCartArrowDown } from 'react-icons/fa'
import { useSelector } from 'react-redux'
function Header() {
    const[btnName, setBtnName]= useState("Login")
    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)

    // Subscribing to the Store by using the useSelector.
    const cartItems = useSelector((store)=> store.cart.items)
 
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
                {/* <li className='px-4 mt-2 '> */}
                   
                {/* </li> */}
                <li className='px-4 mt-2 flex'>
                <Link to="/cart" className='text-lg font-bold text-red-400'>Cart</Link>
                <FaCartArrowDown  className='m-1 size-5 '/>: ({cartItems.length} Items)
                    
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