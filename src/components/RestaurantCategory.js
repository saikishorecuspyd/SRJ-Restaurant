import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import ItemList from "./ItemList";
const RestaurantCategory =(props)=>{
    const {title, itemCards}= props.dataItems?.card?.card
    return(
        <div className=" p-4 my-4 border shadow-lg">
            <div className="flex justify-between">
               <h3 className="font-bold">{title} ({itemCards.length})</h3>
               <h3 className="icon-[mdi-light--home] text-2xl"><MdOutlineKeyboardArrowDown /></h3>
            </div>
            <ItemList items={itemCards}/>
        </div>
       
    )
}

export default RestaurantCategory