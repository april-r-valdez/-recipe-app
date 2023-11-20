import React, { useState } from "react";
import { db, useAuth } from "../../firebase";
import {
  collection,
  addDoc,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const UploadPantry = ({ ingredients, userID }) => {
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

      await addDoc(pantriesRef, ingredients);

      if (!snapshot.empty) {
        // update existing pantry
        const pantry = snapshot.docs[0];
        await updateDoc(pantry.ref, { userID: ingredients });
        console.log("Existing pantry updated.");
      } else {
        // create new pantry
        await addDoc(pantriesRef, { userID: ingredients });
        console.log("New pantry created.");
      }

      alert("Pantry item uploaded successfully!");
    } catch (error) {
      console.error("ERR: Error uploading pantry item:", error.message);
    }
  };

  return (
    <button className="btn btn-secondary" onClick={handleUpload}>
      Update Pantry
    </button>
  );
};

export default UploadPantry;
