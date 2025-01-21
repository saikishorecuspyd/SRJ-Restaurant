import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

function Body() {
    const [listOfRestaurant, setListOfRestaurant]=useState([])
    const [dummyListOfRestaurant, setDummyListOfRestaurant]=useState([])
    const[searchText, setSeacrhText]=useState("")

    useEffect(()=>{
        fetchData()
    },[])
    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

        const json = await data.json()
        // console.log(json)
        setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setDummyListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // setListOfRestaurant(json?.data?.cards[3]?.card.card)
    }
    
const onlineStatus = useOnlineStatus()
if(onlineStatus === false)
    return(<h1>Offline!!!, You are not connected to the network</h1>)

  return listOfRestaurant.length ===0 ? (<Shimmer /> ) :(
    <div className='body'>
        <div className='top-search'>
            <div className='search'>
                <input type='text' placeholder='Enter The Restaurant Name' value={searchText} onChange={(e)=>{
                    setSeacrhText(e.target.value)
                   }}/>
                <button onClick={()=>{
                    const changeFilter = listOfRestaurant.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setDummyListOfRestaurant(changeFilter)
                }}>Search</button>
            </div>
            
            <div className="filter">
                    <button onClick={()=>{
                       let cardListOfRestaurant = listOfRestaurant.filter((result)=>result.info.avgRating>4)
                       setListOfRestaurant(cardListOfRestaurant)
                    }}>Top Restaurant</button>
               </div>
        </div>

        <div className='res-container'>
            {
                dummyListOfRestaurant.map((restaurant) =>(
                    <Link key={restaurant.info.id}
                    to={"/city/hyderabad/" + restaurant.info.id} className='card-details'>
                        <RestaurantCard  resData={restaurant}/></Link>
                ))
            }
        </div>
    </div>
  )
}

export default Body