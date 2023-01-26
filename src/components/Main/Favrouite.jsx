import React, { useEffect, useState } from "react";
import UserContext from "../Context";
import { useContext } from "react";

import "./propertylist.css";

export const Favrouite = () => {
  const { mylist, setMylist } = useContext(UserContext);

  return (
    <>
      <section className="property_list">
        {mylist.length !==0 ?mylist.map(
          ({ id, name, img, price, address, beds, bathrooms, area }) => {
            return (
              <div className="property flex" key={id}>
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
                  <button className="remove_like"><i class="fa-solid fa-circle-minus" /></button>
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
        ):"Empty"}
      </section>
    </>
  );
};
