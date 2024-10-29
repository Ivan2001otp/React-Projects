import React from 'react'
import carImage from '../images/car.jpg'

const Hero = () => {
  return (
    <div className='mt-40 place-items-center mx-20'>

        <div
        className='text-8xl text-purple-950 hover:text-purple-700 font-bold p-2 w-1/2 place-content-center'
        >Your Personal AI Note Taker</div>
        
        
        <div className='w-full flex justify-center mt-5 leading-normal'>
          <p className='text-center w-4/12 text-gray-400 font-bold'>Save 5+ hours every week and let Jamie take <strong className='text-slate-600'>rich meeting notes, answer questions, and automate </strong>annoying tasks for you .Without a bot.</p>
        </div>

        <div
          className='mt-10'
        >
            <button type='submit' className='bg-black text-white px-5 py-2 rounded-xl mr-1'>Try now</button>
            <button type='submit' className='bg-gray-400 text-black px-5 py-2 rounded-xl ml-1'>See how it works</button>
        </div>
        <div className="mt-6">
            <p className='text-gray-400 font-semibold small-fonts'>v4.2.4 | macOS 13.1+ | Windows 10+ | Oxygen 8+</p>
        </div>

        <div>
          <img className='mt-10 rounded-3xl h-1/2 border-gray-300 border-8' src={carImage} alt='Description'/>
        </div>

        <div
          className='mt-10'
        >

        </div>
    </div>
  ) 
}

export default Hero