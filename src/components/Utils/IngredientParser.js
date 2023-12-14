import React from "react";

const parseIngredients = (ingredients) => {
  const parsedIngredients = ingredients.map((line) => {
    const terms = line.match(
      /((?:\d+\s*)?[½¼¾\d]+\s*[/\d.]*)\s*([a-zA-Z]+)?\s*(.*)/ // not gibberish I promise
    );
    if (terms) {
      const amount = terms[1];
      const unit = terms[2];
      const ingredient = terms[3]
        .replace(/\([^)]*\)/g, "")
        .split(",")[0]
        .trim();
      return { amount, unit, ingredient };
    }
    return null;
  });

  return parsedIngredients.filter(Boolean);
};

export default parseIngredients;
