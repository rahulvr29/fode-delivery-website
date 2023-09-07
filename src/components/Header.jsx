import React, { useState } from 'react'
import "./header.css"
import {motion} from "framer-motion"
import Logo from  "../assets/images/fode-app-logo.png"
import { MdShoppingBasket, MdAdd, MdLogout} from "react-icons/md";
import Avatar from "../assets/images/avatar.png";
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"
import { useStateValue } from "../context/StateProvider"
import { actionType } from '../context/reducer';

const Header = () => {
 

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue()
  
  const [isMenu, setIsMenu] = useState(false)

  const login = async () => {
    if (!user){
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      }); 
      localStorage.setItem('user', JSON.stringify(providerData[0]))
    }else{
      setIsMenu(!isMenu)
    }
  };




  return (
    <header className='fixed z-50 w-screen p-6 px-16'>
  {/* tablet and desktop work */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
          <Link to={'/'} className='flex items-center gap-2'>
              <img src={Logo} className='logo' alt="logo" />
          </Link>

        <div className='flex items-center justify-center'>
        <ul className=' flex items-center gap-8 '>
            <li className='text-base text-textColor hover:text-headingColor  duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>About Us</li>
            <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer '>Service</li>
          </ul>

          <motion.div 
          whileTap={{ scale: 0.8 }}
          className='relative flex items-center justify-center'>
            <MdShoppingBasket  className='text-textColor text-2xl ml-8 cursor-pointer'/>
            <div className=' absolute -top-1.5 -right-3 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
              <p className='text-xs text-white font-semibold'>1</p>
            </div>
          </motion.div>

            <div className="relative">
            <motion.img 
            whileTap={{ scale: 0.7 }}
            src={ user ? user.photoURL : Avatar } className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl mx-5 cursor-pointer rounded-full' alt="userprofile" onClick={login} />

            {isMenu && (
              <motion.div
              initial={{opacity: 0, scale:0.6}}
              animate={{opacity: 1, scale:1}}
              exit={{opacity: 0, scale:0.6}}
              className="w-40 bg-primary shadow-xl rounded-lg flex flex-col absolute top-15 right-9  ">
              {user && user.email === "saivrrahulvr29@gmail.com" && (
              <Link to={'/createItem'}>
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">New Items <MdAdd/>
              </p>
              </Link>
              )}
              <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base">Logout <MdLogout/></p>
            </motion.div>
            )

            }
            </div>
        </div>
      </div>

  {/* mobile work */}
      <div className='flex md:hidden w-full h-full '>

      </div>

    </header>
  )
}

export default Header