import React, { useState } from "react";
import UserContext from "../Context";
import { useContext } from "react";

import './likebutton.css'


export const LikeButton = ({ id, data }) => {

    const { mylist, setMylist } = useContext(UserContext)

    const [color,setColor] = useState('active')
    const handleLikes = (id) => {
        setColor(!color)    
        const fav = data.find(item => item.id === id);
        setMylist([...mylist, fav])
    };

    return (
        <button className={`like_btn ${color}`} onClick={() => handleLikes(id)}>
            <i className="fa-regular fa-heart" />
        </button>
    );
};
