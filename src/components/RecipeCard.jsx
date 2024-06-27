import React from "react";
import './Recipe.css'
const RecipeCard = ({ recipe }) => {
    const {
        idMeal,
        strMeal,
        strCategory,
        strMealThumb,
    } = recipe;
    
    return (
        <div className="card1">
            <img
                src={strMealThumb}
                alt={strMeal}
                className="card-image"
            />
            <div className="card-body">
                <span className="category">{strCategory}</span>
                <h3>{strMeal}</h3>
                <a href={"https://www.themealdb.com/meal/" + idMeal} target="_blank">Instructions</a>
            </div>
        </div>
    )
};

export default RecipeCard;