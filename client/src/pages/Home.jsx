import React from 'react'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div class="container-fluid">
        <Banner />
      </div>
    </>
  )
}

export default Home
