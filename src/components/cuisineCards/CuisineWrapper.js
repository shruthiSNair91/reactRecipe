import React, { useEffect, useState } from 'react';
import CuisineCard from './CuisineCard';
import './CuisineCards.css';

let API_KEY = "56a3ef1f767041a186a07d21d91ac99a";

let CuisineWrapper = (props) => {

    const [cuisines, setCuisines] = useState([]);

    // console.log(props);
    useEffect(() => {
        if (props.selectedCuisine) { fetchCuisine() }
    }, [props.selectedCuisine]);

    async function fetchCuisine() {
        let response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&cuisine=${props.selectedCuisine}&addRecipeInformation=true&number=2`);
        let cuisineData = await response.json();
        setCuisines(cuisineData.results);
        console.log(cuisineData);
    }

    return (
        <div className='cuisineTile'>
            {cuisines.map((i) => (
                <CuisineCard key={i.id} cuisine={i} />
            ))}
        </div>
    );
}

export default CuisineWrapper;