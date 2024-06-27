// import React from 'react';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Tabs from './components/Tabs';
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import Footer from "./components/Footer"


const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  // const [loader,setLoader] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([])

  const searchRecipes = async () => {
    setIsLoading(true);
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes()
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Navigate to="/login" />} /> {/* Default route */}
      </Routes>
    </Router>
    <Tabs/>
    <div className="Rec_container">
      <h2>Our Food Recipes</h2>
      <SearchBar
        isLoading={isLoading}
        query={query}
        setQuery={setQuery}
        handleSubmit={handleSubmit}
      />
      <div className="recipes">
        
        {recipes ? recipes.map(recipe => (
          <RecipeCard
             key={recipe.idMeal}
             recipe={recipe}
          />
        )) : "No Results."}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;