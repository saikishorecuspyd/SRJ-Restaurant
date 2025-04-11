import { useDispatch } from "react-redux";
import { IMAGE_CATEGORY_URL } from "../utils/constants";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {

  const dispatch = useDispatch()
  const handleAddItem =(item)=>{
    dispatch(addItems(item))
  }

    return (
      <div>
        <ul>
          {items.map((item) => (
            <div key={item.card.info.id} className="flex justify-between items-start border-b p-2">
              {/* Text Section */}
              <div className="w-8/12">
                <h3 className="mt-2 font-bold text-[#02060c] p-1">
                  {item.card.info.name} - ₹{item.card.info.defaultPrice / 100 || item.card.info.price / 100}
                </h3>
                <h6 className="font-bold text-sm p-1">
                  <span className="text-green-800">{item.card.info.ratings?.aggregatedRating?.rating}</span> (
                  {item.card.info.ratings?.aggregatedRating?.ratingCountV2})
                </h6>
                <p className="p-1 text-gray-600 break-words leading-5 text-justify">
                  {item.card.info.description}
                </p>
              </div>
  
              {/* Image and Button Section */}
              <div className="w-3/12 flex flex-col items-center">
                {item.card.info.imageId && (
                  <img
                    src={IMAGE_CATEGORY_URL + item.card.info.imageId}
                    className="w-32 h-24 mt-2 rounded-lg object-cover"
                  />
                )}
                <button className="bg-white w-20 h-8 text-green-600 font-bold mt-2 border border-green-600 rounded-lg"
                onClick={()=> handleAddItem(item)}>
                  ADD
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ItemList;
  