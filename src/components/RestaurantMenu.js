import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu =()=>{

const { resId } = useParams()

const menuData = useRestaurantMenu(resId);

if(menuData===null) return <Shimmer />

const restaurantInfo = menuData?.cards[2]?.card?.card?.info;

const { name, avgRating, totalRatingsString, costForTwoMessage, cuisines, areaName } = restaurantInfo;

const { itemCards } = menuData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards)
if (!itemCards || itemCards.length === 0) {
    return <p>Loading menu...</p>;
  }
return(
    <div className="res-menu">
        <h1>{name}</h1>

        <div className="res-ratings">
            <div className="res-ratings-info">
            <h3 className="ratings-info">{`⭐${avgRating} (${totalRatingsString}) • ${costForTwoMessage} `}</h3>
            <h4 className="ratings-info-cusines">{cuisines}</h4>
            <h4 className="ratings-info">Outlet {areaName}</h4>
            <h4 className="ratings-info">20-25 mins</h4>
            </div>
          
        </div>

        <div className="Menu-list">
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
        <ul>
            {itemCards.map((item) => (
                <li key={item.card.info.id}>
                    {item.card.info.name} - {"₹"} {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                 </li>
                  ))}
                </ul>
            </div>
    </div>
)
}

export default RestaurantMenu;