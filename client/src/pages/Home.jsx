import React from 'react'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <Banner />
        <Footer />
      </div>
    </>
  )
}

export default Home
