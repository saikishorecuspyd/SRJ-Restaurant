import React from 'react'
import { CDN_URL } from "../utils/constants";
function RestaurantCard(props) {
    const {resData} = props;
    const {cloudinaryImageId, name,avgRating,cuisines,areaName,sla} =resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] hover:bg-red-100">
    <img src={CDN_URL +
        cloudinaryImageId
    } alt="Image" className="w-[250px] h-[200px] rounded-[10px]"/>
    <h3 className="font-bold py-4">{name}</h3>
    <h4>{`⭐${avgRating} ${sla.slaString}`}</h4>
    <p>{cuisines.join(" , ")}</p>
    <p>{areaName}</p>
</div>
  )
}

export default RestaurantCard