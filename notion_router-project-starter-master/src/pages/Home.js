import React from 'react'
import Card from '../components/Card'
import Testimonial from '../components/Testimonial'
import reviews from "../data";

const Home = () => {
  return (
    <div className='flex justify-center items-center text-white text-3xl h-full'>
     <Testimonial reviews = {reviews}/>
    </div>
  )
}

export default Home