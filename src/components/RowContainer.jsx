import { useEffect, useRef, useState } from 'react';
import { MdShoppingBasket } from "react-icons/md";
import {motion} from "framer-motion";
import NotFound from "../assets/images/NotFound.svg"
import { useStateValue } from "../context/StateProvider"
import { actionType } from '../context/reducer';

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [items, setItems] = useState([]);
  const [ { cartItems }, dispatch] = useStateValue();

  const addtocart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);


  return (
    <div
    ref={rowContainer}
    className={`w-full flex items-center my-12 scroll-smooth bg-orange-100 gap-3 ${
      flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
    }`}>
      {data && data.length > 0 ? (data.map(item => (
      <div key={item?.id} className="w-300 h-[175px] min-w-[300px] md:min-w-[340]   md:w-340  bg-cardOverlay rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex  items-center justify-between relative">


        <div className="w-full flex items-end justify-evenly">
          <motion.img
          whileHover={{scale:1.2}}
          src={item?.imageURL} alt="" className=' w-40 h-40 object-contain  cursor-pointer -mt-0 drop-shadow-2xl '/>
        </div>
        <div className="w-full flex flex-col pt-16 items-end">
          <motion.div
          whileTap={{scale: 0.75}}
          className="  w-8 h-8 rounded-full bg-red-600 flex flex-col items-center justify-center cursor-pointer hover:shadow-md " onClick={() => setItems([...cartItems, item])}>
            <MdShoppingBasket className="text-white"/>
          </motion.div>
          <p className="text-textColor font-semibold text-base md:text-lg">
            {item?.title}
          </p>
          <p className="mt-1 text-sm text-gray-500">
            {item?.calories}
          </p>
          <div className="flex items-center gap-8">
            <p className='text-lg text-headingColor font-semibold'>
              <span className="text-sm text-red-500">$</span> {item?.price}
            </p>
          </div>
        </div>
    </div> )) ): (
    <div className="w-full flex items-center justify-center">
            <img src={NotFound} className='h-420' />
            <p className="text-xl text-headingColor font-semibold my-2">Items Not Available</p>
    </div>
    )}
    </div>
  )
}

export default RowContainer