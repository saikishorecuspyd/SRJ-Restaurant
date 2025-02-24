import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCategory from "./RestaurantCategory"
import { useState } from "react"
const RestaurantMenu =()=>{

const { resId } = useParams()

const menuData = useRestaurantMenu(resId);

const [showIndex, setShowIndex] = useState(null)

if(menuData===null) return <Shimmer />

const restaurantInfo = menuData?.cards[2]?.card?.card?.info;

const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName } = restaurantInfo;

const { itemCards } = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
// console.log(itemCards)
// if (!itemCards || itemCards.length === 0) {
//     return <p>Loading menu...</p>;
//   }

  const categories =menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=> c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
  console.log(categories)
return(
    <div className="ml-[360px] w-6/12">
        <h1 className="font-bold m-6 text-3xl">{name}</h1>

        <div className="bg-gray-200 h-40 rounded-xl">
            <div className="border  rounded-xl bg-white w-[98%] ml-2 h-36 p-2">
            <h3 className="ml-2 font-bold p-1">{`⭐${avgRating} (${totalRatingsString}) • ${costForTwoMessage} `}</h3>
            <h4 className="ml-2 text-orange-500 font-bold p-1">{cuisines}</h4>
            <h4 className="ml-2 p-1"><span className="font-bold">Outlet</span> {areaName}</h4>
            <h4 className="ml-2 font-bold p-1">20-25 mins</h4>
            </div>
          
        </div>

        <div className="mt-8 ">
        {/* {itemCards.length > 0 ? (
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"₹"}{" "}
            {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
          </li>
        ))}
      </ul>
    ) : (
      <p>Loading menu...</p>
    )} */}
        {/* <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"₹"} {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                 </li>
                  ))}
                </ul> */}
                {categories.map((categories, index)=> 
                //Controlled Component
                <RestaurantCategory 
                key={categories?.card?.card.title} 
                dataItems={categories}
                showItems ={index === showIndex ? true : false}
                setShowIndex = {()=> setShowIndex(index)}
                />)}
            </div>
    </div>
)
}

export default RestaurantMenu;