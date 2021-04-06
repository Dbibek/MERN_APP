import React from 'react'
import BannerImage from '../Assets/images/bannerImg.jpg'
const Banner = () => {
  return (
    <div style={{ background: 'cream' }}>
      <img src={BannerImage} class="img-fluid" alt="BannerPic" style={{ margin: '2rem 0px', width: '100%', height: '400px', objectFit: 'cover' }} />
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio ea similique.lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio ea similique.lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio ea similique.lorem ipsum dolor sit amet
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet optio ea similique.lorem ipsum dolor sit amet</p>
      </div>
    </div>
  )
}

export default Banner
