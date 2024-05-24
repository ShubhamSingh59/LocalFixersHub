import React from 'react'
import hero_image from '../assets/hero_image.jpg'
import '../Style/Homepage.css'

function Homepage() {
  return (
    <section className="hero-section pt-5">
        <div className="container">
        <div className="row">
            <div className="hero-text col-lg-6 col-12 pt-5 order-lg-0 order-1">
                <h2 className="headline">Find Trusted Service Providers Near You</h2>
                <h3 className="subheadline py-3">Connecting you with local professionals for all your home and vehicle needs</h3>
                <p className="description">LocalFixersHub makes it easy to find reliable mechanics, plumbers, electricians, and other skilled professionals in your area. Simply search for the service you need, browse profiles, read reviews, and book the best provider for the job. Get your tasks done quickly and efficiently with trusted experts from your community</p>
            </div>
            <div className="hero-image col-lg-6 col-12 order-0">
                <img src={hero_image} alt="" />
            </div>
        </div>
        </div>
    </section>
  )
}
export default Homepage;