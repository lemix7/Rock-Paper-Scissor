import React from 'react'

const Buttons = ({icon,clickF}) => {
  return (
    <button className='bg-white h-[70px] w-[70px] md:h-[90px] md:w-[90px] rounded-full border-4 border-black hover:scale-110 transition-all ease-in' onClick={clickF}>
        <img className=' w-12 md:w-14  my-0 mx-auto' src={icon} alt="icon" />
    </button>
  )
}

export default Buttons