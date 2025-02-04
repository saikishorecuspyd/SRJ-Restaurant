// import React from 'react'
import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData} = props;
    const {cloudinaryImageId, name,avgRating,cuisines,areaName,sla} =resData?.info;
  return (
    <div className="m-4 p-4 w-[250px] hover:bg-red-100">
    <img src={CDN_URL +
        cloudinaryImageId
    } alt="Image" className="w-[250px] h-[200px] rounded-[10px] "/>
    <h3 className="font-bold py-4">{name}</h3>
    <h4>{`⭐${avgRating} ${sla.slaString}`}</h4>
    <p className='py-2'>{cuisines.join(" , ")}</p>
    <p>{areaName}</p>
</div>
  );

};

  // Higher Order Component

  // input - RestaurantCard ==> RestaurantCardPromoted

  export const withDiscountInfo =(RestaurantCard)=>{
    return (props)=>{
      const {resData} = props;
      const {header,subHeader} =resData?.info?.aggregatedDiscountInfoV3
      return(
        <div>
         <h2 className="h-[38px] bg-gradient-to-b from-transparent to-zinc-800/80  absolute my-44 mx-10 text-white font-extrabold ProximaNovaCond_Black uppercase text-[20px]">
         {`${header} ${subHeader}`}
         </h2>
         <RestaurantCard {...props}/>
        </div>
       
      )
    }
  }

export default RestaurantCard