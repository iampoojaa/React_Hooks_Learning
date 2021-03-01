import React, { useState, useEffect } from "react";

import axios from "./../../axios";
import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

const Ingredients = () => {
  const [userIngredients, setUserIndredients] = useState([]);

  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => {
        return response;
      })
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData.data) {
          loadedIngredients.push({
            id: key,
            title: responseData.data[key].title,
            amount: responseData.data[key].amount,
          });
        }
        setUserIndredients(loadedIngredients);
      });
  }, []);

  const addIngredientHandler = (ingredient) => {
    axios
      .post("/ingredients.json", ingredient)
      .then((response) => {
        return response;
      })
      .then((responseData) => {
        setUserIndredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.data.name, ...ingredient },
        ]);
      });
  };

  const removeIngredientHandler = (ingredientId) => {
    axios.delete(`/ingredients/${ingredientId}.json`).then((response) => {
      setUserIndredients((prevIngredients) =>
        prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
      );
    });
  };

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngredientHandler} />

      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={removeIngredientHandler}
        />
      </section>
    </div>
  );
};

export default Ingredients;
