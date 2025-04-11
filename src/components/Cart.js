import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = ()=>{
        dispatch(clearCart())
    }
    return(
        <div className="text-center m-4 p-4">
          <h1 className="text-center font-bold text-2xl mb-6">Cart</h1>
          <button className="mb-6 bg-yellow-400 p-2 rounded-lg w-44" 
          onClick={handleClearCart}>Clear Cart</button>
          {cartItems.length ===0 && <h1 className="font-bold mb-6">Your cart is empty<p className="text-orange-500">You can go to home page to view more restaurants</p></h1>}
          <div className="w-6/12 m-auto border border-dotted+">
          <ItemList items={cartItems}/>
          </div>
        </div>
    )
}

export default Cart