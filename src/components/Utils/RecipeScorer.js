import React, { useState, useEffect } from "react";

function RecipeScorer({ availableIngredients, recipes }) {
  const [scoredRecipes, setScoredRecipes] = useState([]);

  useEffect(() => {
    // TODO: parallelize this
    const calculateRecipeScore = (recipe) => {
      let score = 0;

      // TODO: Set lookup is more efficient (or try frequency map)
      recipe.ingredients.forEach((ingredient) => {
        if (availableIngredients.includes(ingredient)) {
          score++;
        }
      });
      return score;
    };

    const scoredRecipes = recipes.map((recipe) => ({
      ...recipe,
      score: calculateRecipeScore(recipe),
    }));

    // by non-increasing order (thanks dr.Koh)
    scoredRecipes.sort((a, b) => b.score - a.score);

    setScoredRecipes(scoredRecipes);
  }, [availableIngredients, recipes]);

  return (
    <div>
      <h2>Recipe Scorer</h2>
      <ul>
        {scoredRecipes.map((recipe, index) => (
          <li key={index}>
            {recipe.name}: {recipe.ingredients.join(", ")} - SCORE:{" "}
            {recipe.score} (target:
            {recipe.truth})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeScorer;
