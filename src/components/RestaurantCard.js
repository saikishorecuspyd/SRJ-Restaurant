import React from 'react'
import { CDN_URL } from "../utils/constants";
function RestaurantCard(props) {
    const {resData} = props;
    const {cloudinaryImageId, name,avgRating,cuisines,areaName,sla} =resData?.info;
  return (
    <div className="res-card">
    <img src={CDN_URL +
        cloudinaryImageId
    } alt="Image" className="res-image"/>
    <h3>{name}</h3>
    <h4>{`⭐${avgRating} ${sla.slaString}`}</h4>
    <p>{cuisines.join(" , ")}</p>
    <p>{areaName}</p>
</div>
  )
}

export default RestaurantCard