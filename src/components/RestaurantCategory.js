import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory =( {dataItems,showItems, setShowIndex})=>{

// const [showItem, setShowItem] = useState(false)
    const {title, itemCards}= dataItems?.card?.card
    const changeHandler =()=>{
        setShowIndex()
    }
    return(
        <div className=" p-4 my-4 border shadow-lg">
            <div className="flex justify-between cursor-pointer" onClick={changeHandler}>
               <h3 className="font-bold">{title} ({itemCards.length})</h3>
               <h3 className="icon-[mdi-light--home] text-2xl"><MdOutlineKeyboardArrowDown /></h3>
            </div>
            {showItems && <ItemList items={itemCards}/>}
        </div>
       
    )
}

export default RestaurantCategory