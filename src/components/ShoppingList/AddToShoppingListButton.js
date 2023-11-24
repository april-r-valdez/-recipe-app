import React from "react";
import { db } from "../../firebase";
import { collection, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";

const AddToShoppingListButton = ({
  newIngredient,
  userID,
  btnText,
  btnStyle,
  btnClassnames,
}) => {
  const handleUpload = async () => {
    try {
      if (!userID) {
        alert("You're not signed in!");
        console.log("ERR: Not signed in.");
        return;
      }

      const shoppingListRef = collection(db, "ShoppingLists");
      const userShoppingListRef = doc(shoppingListRef, userID);

      // check if the user's shopping list already exists
      const userShoppingListDoc = await getDoc(userShoppingListRef);

      if (userShoppingListDoc.exists()) {
        // shopping list exists, update the ingredient count or add a new ingredient
        const shoppingListData = userShoppingListDoc.data();
        const ingredients = shoppingListData.ingredients || {};

        if (ingredients.hasOwnProperty(newIngredient)) {
          // ingredient exists, increment its count
          ingredients[newIngredient] += 1;
        } else {
          // ingredient doesn't exist, add a new entry
          ingredients[newIngredient] = 1;
        }

        // update the shopping list document
        await updateDoc(userShoppingListRef, {
          ingredients: { ...ingredients },
        });
      } else {
        // shopping list doesn't exist, create a new one
        await setDoc(userShoppingListRef, {
          ingredients: { [newIngredient]: 1 },
        });
      }

      alert("Shopping list item uploaded successfully!");
    } catch (error) {
      console.error("ERR: Error uploading shopping list:", error.message);
    }
  };

  return (
    <button
      className={btnClassnames}
      style={btnStyle}
      data-bs-toggle="tooltip"
      data-bs-placement="top"
      title="Add to Shopping List"
      onClick={handleUpload}
    >
      {btnText}
    </button>
  );
};

export default AddToShoppingListButton;
