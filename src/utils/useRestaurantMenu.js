import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants"
const useRestaurantMenu =(resId)=>{
    const [menuData, setMenuData] = useState(null)
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json()
        setMenuData(json?.data)
    }
    return menuData;
}

export default useRestaurantMenu;