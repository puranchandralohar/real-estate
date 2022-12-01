import React, { useEffect, useState } from "react";
import { PropertyList } from "./PropertyList";
import axios from "axios";

import "./main.css";

export const Main = () => {
  const [data, setData] = useState([]);
  const [storeData, setStoreData] = useState([]);
  const [filterData, setFilterData] = useState({
    location: "",
    category: "",
    date: "",
    price: "",
  });

  useEffect(() => {
    let url = `https://raw.githubusercontent.com/puranchandralohar/apis/main/property.json`;
    axios.get(url).then((response) => {
      let result = response.data;
      setData(result);
      setStoreData(result);
    });
  }, []);

  const handleSelect = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    let splitPrice = filterData.price.split("-");
    console.log(filterData);
    const makeChanges = storeData.filter((item) => {
      const date1 = new Date(filterData.date);
      const date2 = new Date(item.date);

      if (
        (filterData.location === "" ||
          filterData.location.toLowerCase() === item.location.toLowerCase()) &&
        (filterData.category === "" ||
          filterData.category.toLowerCase() === item.category.toLowerCase()) &&
        ((date2.getDate() === date1.getDate() &&
          date2.getMonth() === date1.getMonth() &&
          date1.getFullYear() === date2.getFullYear()) ||
          filterData.date === "") &&
        ((parseInt(splitPrice[0]) <= item.price &&
          parseInt(splitPrice[1]) >= item.price) ||
          filterData.price === "")
      ) {
        return item;
      }
    });
    setData(makeChanges);
  };

  return (
    <div className="main-container">
      <section className="search_group flex">
        <h2 className="search-title">Search Properties to rent</h2>
        <input type="text" name="search" id="search" onBlur={handleSelect} />
      </section>
      <section className="search_filter_area flex">
        <div>
          <label htmlFor="location">Location</label>
          <select name="location" id="location" onChange={handleSelect}>
            <option defaultValue="" disabled={true} selected={true}>
              Choose Location
            </option>
            <option defaultValue="Mumbai">Mumbai</option>
            <option defaultValue="Pune">Pune</option>
            <option defaultValue="Hydrabad">Hydrabad</option>
            <option defaultValue="Ranchi">Ranchi</option>
            <option defaultValue="Kolkata">Kolkata</option>
          </select>
        </div>
        <div>
          <label htmlFor="movedate">When</label>
          <input
            type="date"
            name="date"
            onChange={handleSelect}
            id="movedate"
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <select name="price" onChange={handleSelect} id="price">
            <option defaultValue="500-1000">500-1000</option>
            <option defaultValue="1000-2000">1000-2000</option>
            <option defaultValue="2000-5000">2000-5000</option>
            <option defaultValue="5000-10000">5000-10000</option>
          </select>
        </div>
        <div>
          <label htmlFor="category">Property Type</label>
          <select name="category" id="category" onChange={handleSelect}>
            <option defaultValue="House">House</option>
            <option defaultValue="Single-Family Home">
              Single Family Home
            </option>
            <option defaultValue="Town House">Town House</option>
            <option defaultValue="Farmhouse">Farmhouse</option>
            <option defaultValue="Bunglow">Bunglow</option>
          </select>
        </div>
        <button className="btn search" onClick={handleSearch}>
          Search
        </button>
      </section>
      <PropertyList data={data} />
    </div>
  );
};
