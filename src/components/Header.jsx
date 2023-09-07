import React from 'react'
import "./header.css"
import {motion} from "framer-motion"
import Logo from  "../assets/images/fode-app-logo.png"
import { MdShoppingBasket} from "react-icons/md";
import Avatar from "../assets/images/avatar.png";
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config"

const Header = () => {
 

  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const login = async() =>{
        const response = await signInWithPopup(firebaseAuth, provider)
        
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
            src={Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl mx-5 cursor-pointer' alt="userprofile" onClick={login} />
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