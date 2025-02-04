import React, { useEffect, useState } from 'react'
import RestaurantCard, {withDiscountInfo} from './RestaurantCard'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'

function Body() {
    const [listOfRestaurant, setListOfRestaurant]=useState([])
    const [dummyListOfRestaurant, setDummyListOfRestaurant]=useState([])
    const[searchText, setSeacrhText]=useState("")

    const RestaurantCardDiscount = withDiscountInfo(RestaurantCard)

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
console.log(listOfRestaurant)
const onlineStatus = useOnlineStatus()
if(onlineStatus === false)
    return(<h1>Offline!!!, You are not connected to the network</h1>)

  return listOfRestaurant.length ===0 ? (<Shimmer /> ) :(
    <div className='mt-6'>
        <div className='flex m-6 items-center'>
            <div className=''>
                <input className='bg-gray-200 w-96 h-10 border border-dotted border-cyan-400 border-1' type='text' placeholder='Enter The Restaurant Name' value={searchText} onChange={(e)=>{
                    setSeacrhText(e.target.value)
                   }}/>
                <button className="bg-orange-200 m-4 p-2 w-28 rounded-2xl" onClick={()=>{
                    const changeFilter = listOfRestaurant.filter((res)=>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setDummyListOfRestaurant(changeFilter)
                }}>Search</button>
            </div>
            
            <div className="bg-amber-200 m-4 p-2 w-32 rounded-lg ">
                    <button onClick={()=>{
                       let cardListOfRestaurant = listOfRestaurant.filter((result)=>result.info.avgRating>4)
                       setListOfRestaurant(cardListOfRestaurant)
                    }}>Top Restaurant</button>
               </div>
        </div>

        <div className="flex flex-wrap">
            {
                dummyListOfRestaurant.map((restaurant) =>(
                    <Link key={restaurant.info.id}
                    to={"/city/hyderabad/" + restaurant.info.id} className='card-details'>
                       {restaurant.info.aggregatedDiscountInfoV3 ? (<RestaurantCardDiscount resData={restaurant} />) : ( <RestaurantCard  resData={restaurant}/>)} 
                      </Link>
                ))
            }
        </div>
    </div>
  )
}

export default Body