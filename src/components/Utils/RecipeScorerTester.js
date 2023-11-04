import React, { useState } from "react";
import RecipeScorer from "./RecipeScorer";

function RecipeScorerTester() {
  const availableIngredients = ["eggs", "soy sauce"];
  const recipes = [
    { name: "Sauced Eggs (2)", ingredients: ["eggs", "soy sauce"], truth: "2" },
    {
      name: "Green and Eggs (1)",
      ingredients: ["eggs", "bok choy"],
      truth: "1",
    },
    {
      name: "Salt (0)",
      ingredients: ["a", "sprinkle", "of", "salt"],
      truth: "0",
    },
    {
      name: "Eggs x4 (4)",
      ingredients: ["eggs", "eggs", "eggs", "eggs"],
      truth: "4",
    },
  ];

  return (
    <div>
      <RecipeScorer
        availableIngredients={availableIngredients}
        recipes={recipes}
      />
    </div>
  );
}

export default RecipeScorerTester;
