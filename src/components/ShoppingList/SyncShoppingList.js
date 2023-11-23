import React, { useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const SyncShoppingList = ({ ingredients, setIngredients, userID }) => {
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!userID) {
      alert("You're not signed in!");
      console.log("ERR: Not signed in.");
      return;
    }

    try {
      const shoppingListsRef = collection(db, "ShoppingLists");

      // look for existing user shopping list first
      const q = query(shoppingListsRef, where("userID", "==", userID));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        // update existing shopping list
        const pantry = snapshot.docs[0];
        await updateDoc(pantry.ref, {
          userID: userID,
          ingredients: ingredients,
        });
        console.log("Existing shopping list updated.");
      } else {
        // create new shopping list
        console.log(`INFO: Attempting to add ${ingredients} under ${userID}`);
        await addDoc(shoppingListsRef, {
          userID: userID,
          ingredients: ingredients,
        });
        console.log("New shopping list created.");
      }

      alert("Shopping list item uploaded successfully!");
    } catch (error) {
      console.error("ERR: Error uploading shopping list:", error.message);
    }
  };

  useEffect(() => {
    const handleDownload = async (e) => {
      try {
        const shoppingListsRef = collection(db, "ShoppingLists");

        const q = query(shoppingListsRef, where("userID", "==", userID));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const shoppingList = snapshot.docs[0];
          setIngredients(shoppingList.data().ingredients);
        }
      } catch (error) {
        console.error("ERR: Error retrieving shopping list: ", error.message);
      }
    };

    handleDownload();
  }, [userID, setIngredients]);

  return <></>;
};

export default SyncShoppingList;
