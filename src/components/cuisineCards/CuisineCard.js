import React from "react";
import { Link } from "react-router-dom";
import { Time, Group } from '../../assets';
import Ingredients from "../recipeDetails/Ingredients";

function CuisineCard(props) {
    //  destructing
    let { cuisine } = props;

    return (
        <div className="cuisineCard">
            <Link to={{ pathname: `/recipe/${cuisine.id}` }} >
                <img src={cuisine.image} alt="cuisine" className="cuisineImage"></img>
                <h4 className="cuisineTitle">{cuisine.title}</h4>
                <div className="cuisineInfo">
                    <Time />
                    <span>{cuisine.readyInMinutes}</span>
                    <Group />
                    <span>{cuisine.servings}</span>
                </div>
            </Link>
        </div>
    )
}

export default CuisineCard;


