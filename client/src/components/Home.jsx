import React from 'react'
import PropertyCard from './PropertyCard'

const Home = () => {
  return (

    <div className='home'>
    <h2>Welcome to Avalaya</h2>
    <p>Find your perfect property</p>
    <PropertyCard
      title="Modern Apartment"
      location="Ghaziabad, Uttar Pradesh"
      price="₹25,000 / month"
    />

    <PropertyCard
      title="Luxury Villa"
      location="Noida, Uttar Pradesh"
      price="₹60,000 / month"
    />
    </div>
    
  )
}

export default Home