import React, { useState } from "react";
import UserContext from "../Context";
import { useContext } from "react";


export const LikeButton = ({ id, data }) => {

    const { mylist, setMylist } = useContext(UserContext)


    const handleLikes = (id) => {
        // setClicked(!clicked)    
        const fav = data.find(item => item.id === id);
        setMylist([...mylist, fav])
    };

    return (
        <button className="like_btn" onClick={() => handleLikes(id)}>
            <i className="fa-regular fa-heart" />
        </button>
    );
};
