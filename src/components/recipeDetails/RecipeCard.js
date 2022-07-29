import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Ingredients from './Ingredients';
import './RecipeCards.css';

let API_KEY = "56a3ef1f767041a186a07d21d91ac99a";

function RecipeCard(props) {
    let { recipeID } = useParams();

    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        fetchRecipeInfo();
    }, [recipeID]);

    async function fetchRecipeInfo() {
        let response = await fetch(`https://api.spoonacular.com/recipes/${recipeID}/information?apiKey=${API_KEY}`);
        let recipeInfo = await response.json();
        console.log(recipeInfo);
        setRecipe(recipeInfo);
    }

    return (
        <div className='recipeCard'>
            <Link to={"/"}>
                <button className='closeButton'>X</button>
            </Link>
            {/* Header */}
            <div className='recipeHeader' style={{ backgroundImage: `url(${recipe.image})` }}>
                <span className='recipeTitle'>{recipe.title}</span>
            </div>

            {/* Summary */}
            <p className='recipeSummary' dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>

            {/* Ingredients */}
            <Ingredients ingredients={recipe.extendedIngredients || []} />

            {/* Instructions */}
        </div>
    );
}

export default RecipeCard;
