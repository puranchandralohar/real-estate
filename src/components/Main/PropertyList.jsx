import React from "react";

import { LikeButton } from "./LikeButton";

import "./propertylist.css";

export const PropertyList = ({ data }) => {
  return (
    <>
      <section className="property_list">
        {data.map(
          ({ id, name, img, price, address, beds, bathrooms, area }) => {
            return (
              <div className="property flex" key={name}>
                <div className="property_image">
                  <img src={img} alt={name} />
                </div>
                <div className="property_price">
                  <span className="property_price_tag">
                    <strong>&#8377; {price}</strong>
                    <small>/month</small>
                  </span>
                </div>
                <div className="property_name flex">
                  <div>
                    <h4>{name}</h4>
                    <p>{address}</p>
                  </div>
                  <LikeButton id={id} data={data} />
                </div>
                <div className="amenities flex">
                  <p>
                    <i className="fa-solid fa-bed" />
                    {beds} Beds
                  </p>
                  <p>
                    <i className="fa-solid fa-bath" />
                    {bathrooms} Bathrooms
                  </p>
                  <p>
                    <i className="fa-solid fa-chart-area" />
                    {area} m<sup>2</sup>
                  </p>
                </div>
              </div>
            );
          }
        )}
      </section>
    </>
  );
};
