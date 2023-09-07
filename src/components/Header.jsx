import React from 'react'

const Header = () => {
  return (
    <div className='fixed z-50 w-screen bg-slate-300 p-5 px-15'>
  {/* tablet and desktop work */}
      <div className='hidden md:flex w-full h-full '>

      </div>

  {/* mobile work */}
      <div className='flex md:hidden w-full h-full '>

      </div>

    </div>
  )
}

export default Header