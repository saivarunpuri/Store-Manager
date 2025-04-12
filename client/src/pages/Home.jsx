import React from 'react'
import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestRatings from '../components/BestRatings'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10 '>
      <MainBanner/>
      <Categories/>
      <BestRatings/>
      <NewsLetter/>
    </div>
  )
}

export default Home
