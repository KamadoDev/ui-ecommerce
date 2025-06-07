import React from 'react'
import Category from '../components/Category'
import Slide from '../components/Slide'

const Home = () => {
  return (
    <main className='container px-5 md:px-4 mx-auto'>
      <div className='grid grid-cols-12 gap-6 py-5'>
        <Category />
        <Slide />
      </div>
    </main>
  )
}

export default Home