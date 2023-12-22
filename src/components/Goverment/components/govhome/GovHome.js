import React from 'react'
import './GovHome.css'
import logo1 from './assets/blockchain.png'
import logo2 from './assets/Cyber-Security.jpg'
import logo3 from './assets/SIH-Logo.png'
import logo4 from './assets/Vector(1).png'
import logo5 from './assets/digiLocker.jpg'
import logo6 from './assets/fingerprint.jpg'
import logo7 from './assets/g20-logo.png'
import { FaArrowCircleRight } from 'react-icons/fa'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Image, Box, Heading } from '@chakra-ui/react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './GovHome.css'

const GovHome = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    arrows: true,
  }

  return (
    <div>
      <div className="top-banner">
        <div className="container">
          <div className="small-bold-text banner-text">
            New to Usability Hub:Open and Closed card sorting
          </div>
        </div>
      </div>

      <section className=" mt-7 w-full">
        <div className="container">
          <div className="slider-wrapper">
            <div className="slider">
              <img
                id="slide-1"
                src="https://digitalindia.gov.in/wp-content/uploads/2023/01/DIG20Innovation.jpeg"
                alt="3d"
              ></img>
              <img
                id="slide-2"
                src="https://digitalindia.gov.in/wp-content/uploads/2023/01/DI-Presidency.png"
                alt="3d"
              ></img>
              <img
                id="slide-3"
                src="https://img.freepik.com/premium-photo/agile-methodology-vector_777576-3249.jpg?w=740"
                alt="3d"
              ></img>
            </div>
          </div>

          <div className="slider-nav">
            <a href="#slide-1"></a>
            <a href="#slide-2"></a>
            <a href="#slide-3"></a>
          </div>
        </div>
      </section>

      <header>
        <div className="container header-section flex">
          <div className="header-left">
            <h1>Design Confidently</h1>
            <p>
              Usability is a remote user research platform that takes the
              guesswork out of design decisions by vaildation them with real
              users
            </p>
            <a href="#" className="primary-button get-started-btn">
              Get started
            </a>
          </div>
          <div className="header-right ">
            <img src="https://img.freepik.com/premium-vector/trading-stock-forex-candlestick-concept-flat-vector-illustration-banner_128772-927.jpg?w=996"></img>
          </div>
        </div>
      </header>

      <section className="companies-section">
        <div className="container">
          <div className="small-bold-text companies-header">
            The world's best companies rely on UsabilityHub to make better
            design decisions
          </div>
          <div className="logos Flex">
            <img
              className="logo"
              src="https://previews.123rf.com/images/sn333g/sn333g1802/sn333g180200208/95995509-modern-blockchain-technology-vector-icon-or-logo-element-on-white-background.jpg"
              alt=""
            ></img>
            <img
              className="logo"
              src="https://static.vecteezy.com/system/resources/previews/005/883/788/non_2x/cyber-security-logo-free-vector.jpg"
              alt=""
            ></img>
            <img
              className="logo"
              src="https://img.freepik.com/premium-vector/ethereum-vector-coin_1078-322.jpg"
              alt=""
            ></img>
            <img className="logo" src={logo3} alt=""></img>
            <img
              className="logo"
              src="https://img.freepik.com/free-vector/indian-background-with-circle-made-watercolor_1055-75.jpg?w=740&t=st=1702915575~exp=1702916175~hmac=0bdd82c65fb52587828b66c100d334240834ed85e65d4c556c70955add70b7b9"
              alt=""
            ></img>
            <img
              className="logo"
              src="https://i.pinimg.com/564x/3d/e1/29/3de129dc3cfced974f3398ec2a53fab3.jpg"
              alt=""
            ></img>
            <img className="logo" src={logo7} alt=""></img>
          </div>
        </div>
      </section>
      <header>
        <div className="container header-section flex">
          <div className="header-right ">
            <img src="https://img.freepik.com/premium-photo/teamwork-infographic-illustration_553012-24267.jpg?w=740"></img>
          </div>
          <div className="header-left">
            <h1>Design Confidently</h1>
            <p>
              Usability is a remote user research platform that takes the
              guesswork out of design decisions by vaildation them with real
              users
            </p>
            <a href="#" className="primary-button get-started-btn">
              Get started
            </a>
          </div>
        </div>
      </header>
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <h2 className="features-heading-text">
              Your user research Swiss Army Knife
            </h2>
            <a href="#" className="secondary-button">
              See all features <FaArrowCircleRight />
            </a>
          </div>
        </div>
      </section>

      <section className="big-features-section"></section>
      <section className="big-features-section"></section>
      <section className="big-features-section"></section>

      <section className="examples-section"></section>
      <section className="cta-section"></section>
      <footer></footer>
      <div className="spacer" style={{ height: '100vh' }}></div>
    </div>
  )
}
// const MyCarousel = () => (
//   <Carousel
//     autoPlay
//     infiniteLoop
//     interval={1000}
//     showArrows={false}
//     showStatus={false}
//   >
//     <div className="w-full">
//       <img className="  bg-red-400" src={logo2} alt="dfs" />
//       {/* Add any additional content or styling for the first slide */}
//     </div>
//     <div className="w-full h-[100vh]">
//       <img
//         src="https://img.freepik.com/free-photo/3d-rendering-pen-ai-generated_23-2150695407.jpg?t=st=1702922091~exp=1702925691~hmac=d8ffdd5771dfcb4d3b27b320a39fe037d0bccc10746d4cf5db43d70d3fb5130f&w=740"
//         alt="sf"
//       />
//       {/* Add any additional content or styling for the second slide */}
//     </div>
//     <div className="w-full h-[100vh]">
//       <img
//         src="https://img.freepik.com/premium-photo/agile-methodology-vector_777576-3249.jpg?w=740"
//         alt="fsf"
//       />
//       {/* Add any additional content or styling for the third slide */}
//     </div>
//   </Carousel>
// )

export default GovHome

// {/* <Slider {...settings} className=" ">
// <div className="w-full h-screen bg-cover bg-center">
//   <img
//     src="https://img.freepik.com/free-psd/3d-rendering-bitcoin_23-2150174479.jpg?w=1380&t=st=1702921879~exp=1702922479~hmac=6bac9a1412346281fd27a37d2a0c3304050034f65bd69fd484eb90cc3e6f1d4c"
//     alt="3d"
//   ></img>

//   {/* Add any additional content for the first slide */}
// </div>
// <div className="w-full h-screen bg-cover bg-center">
//   {' '}
//   <img
//     src="https://img.freepik.com/free-psd/3d-rendering-bitcoin_23-2150174479.jpg?w=1380&t=st=1702921879~exp=1702922479~hmac=6bac9a1412346281fd27a37d2a0c3304050034f65bd69fd484eb90cc3e6f1d4c"
//     alt="3d"
//   ></img>
//   {/* Add any additional content for the second slide */}
// </div>
// <div className="w-full h-screen bg-cover bg-center">
//   <img
//     src="https://img.freepik.com/free-psd/3d-rendering-bitcoin_23-2150174479.jpg?w=1380&t=st=1702921879~exp=1702922479~hmac=6bac9a1412346281fd27a37d2a0c3304050034f65bd69fd484eb90cc3e6f1d4c"
//     alt="3d"
//   ></img>
//   {/* Add any additional content for the third slide */}
// </div>
// Add more slides as needed */}
