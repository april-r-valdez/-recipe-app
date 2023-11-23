import React, { useState, useEffect } from "react";
import { db, useAuth } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const SyncPantry = ({ ingredients, setIngredients, userID }) => {
  const handleUpload = async (e) => {
    e.preventDefault();

    if (!userID) {
      alert("You're not signed in!");
      console.log("ERR: Not signed in.");
      return;
    }

    try {
      const pantriesRef = collection(db, "Pantry");

      // look for existing user pantry first
      const q = query(pantriesRef, where("userID", "==", userID));
      const snapshot = await getDocs(q);

      if (!snapshot.empty) {
        // update existing pantry
        const pantry = snapshot.docs[0];
        await updateDoc(pantry.ref, {
          userID: userID,
          ingredients: ingredients,
        });
        console.log("Existing pantry updated.");
      } else {
        // create new pantry
        console.log(`INFO: Attempting to add ${ingredients} under ${userID}`);
        await addDoc(pantriesRef, { userID: userID, ingredients: ingredients });
        console.log("New pantry created.");
      }

      alert("Pantry item uploaded successfully!");
    } catch (error) {
      console.error("ERR: Error uploading pantry:", error.message);
    }
  };

  useEffect(() => {
    const handleDownload = async (e) => {
      try {
        const pantriesRef = collection(db, "Pantry");

        const q = query(pantriesRef, where("userID", "==", userID));
        const snapshot = await getDocs(q);

        if (!snapshot.empty) {
          const pantry = snapshot.docs[0];
          setIngredients(pantry.data().ingredients);
        }
      } catch (error) {
        console.error("ERR: Error retrieving pantry: ", error.message);
      }
    };

    handleDownload();
  }, [userID, setIngredients]);

  return (
    <></>
    // <div>
    //   {ingredients.length !== 0 && (
    //     <button className="btn btn-secondary" onClick={handleUpload}>
    //       Update Pantry
    //     </button>
    //   )}
    // </div>
  );
};

export default SyncPantry;
