import React from "react";
import './Header.css';

let Header = (props) => {
    return (
        <nav className="header">
            <h2 className="logo">Haru's Recipe</h2>
            <div className="cuisines">
                <a href="#" onClick={(e) => props.cuisineSelect("Indian")}>Indian</a>
                <a href="#" onClick={(e) => props.cuisineSelect("Italian")}>Italian</a>
                <a href="#" onClick={(e) => props.cuisineSelect("American")}>American</a>
                <a href="#" onClick={(e) => props.cuisineSelect("Chinese")}>Chinese</a>
            </div>
        </nav>

    )
}

export default Header;