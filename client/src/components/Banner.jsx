import React from 'react'
import BannerImage1 from '../Assets/images/bannerImg.jpg'
import BannerImage2 from '../Assets/images/BannerImg2.jpg'
import BannerImage3 from '../Assets/images/BannerImg3.jpg'

const Banner = () => {
  return (

    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100" src={BannerImage3} alt="First slide" style={{ margin: '2rem 0px', width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={BannerImage2} alt="Second slide" style={{ margin: '2rem 0px', width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100" src={BannerImage1} alt="Third slide" style={{ margin: '2rem 0px', width: '100%', height: '400px', objectFit: 'cover' }} />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>

  )
}

export default Banner

