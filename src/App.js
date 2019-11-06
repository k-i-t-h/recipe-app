import React, { useEffect, useState } from "react";
import Recipe from "./components/Recipe";
import Navigation from './components/Navigation'
import "./App.css";
/**
|--------------------------------------------------
|         Component Starts here!
|--------------------------------------------------
*/
const App = () => {
  //API ID and Key
  const APP_ID = "16e37ef2";
  const APP_KEY = "41a1f21e7821c73ef710f546da3878e9";

  /**
|--------------------------------------------------
|               Hooks
|--------------------------------------------------
*/
  //hook that contains received/input/state data
  const [recipes, setRecipes] = useState([]); //container for DATA
  const [search, setSearch] = useState(""); //container for INPUT
  const [query, setQuery] = useState("Chicken"); //container for SEARCH INPUT

  //hook that loads API function'getRecipe()'
  useEffect(() => {
    getRecipes();
  }, [query]);
  /**
|--------------------------------------------------
|          Helper Functions???
|--------------------------------------------------
*/
  /**(A)**
   ** API fetch function **/
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  /**(B)**
   ** Targets users input in searchbox **/
  const typedSearch = e => {
    setSearch(e.target.value);
  };

  /**(C)**
   ** Prevents setQuery & only fires when onSubmit triggers**/
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  /**
  |--------------------------------------------------
  |              Welcome to JSX Land!
  |--------------------------------------------------
  */
  return (
    <div>
      <Navigation />
      <article>
        <form className="search-form" onSubmit={getSearch}>
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={typedSearch}
          />
          <button className="search-button btn" type="submit">
            Search
        </button>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </form>
        {recipes.map(recp => (
          <Recipe
            key={Math.random()}
            title={recp.recipe.label}
            image={recp.recipe.image}
            calories={recp.recipe.calories}
            ingredients={recp.recipe.ingredients}
          />
        ))}
      </article>
    </div>
  );
};

export default App;
