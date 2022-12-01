import React from 'react'

import './propertylist.css'

export const PropertyList = ({data}) => {
  return (
    <>
        <section className='property_list'>
            {data.map(({id,name,img,price,address,beds,bathrooms,area})=>{
              return(
                <div className="property flex" key={id}>
                  <div className="property_image">
                    <img src={img} alt={name} />
                  </div>
                  <div className="property_price">
                    <span className='property_price_tag'><strong>&#8377; {price}</strong><small>/month</small></span>
                  </div>
                  <div className="property_name">
                    <h4>{name}</h4>
                    <p>{address}</p>
                  </div>
                  <div className="amenities flex">
                    <p><i class="fa-solid fa-bed"></i> {beds} Beds</p>
                    <p><i class="fa-solid fa-bath"></i> {bathrooms} Bathrooms</p>
                    <p><i class="fa-solid fa-chart-area"></i> {area} m<sup>2</sup></p>
                  </div>
                </div>

              )
            })}
        </section>
    </>
  )
}
