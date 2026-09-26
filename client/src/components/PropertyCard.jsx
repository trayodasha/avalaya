import React from 'react'

const PropertyCard = (props) => {
  return (
    <div className='property-card'>
        <h3>{props.title}</h3>
        <p>{props.location}</p>
        <p>{props.price}</p>  

</div>
     )
}

export default PropertyCard