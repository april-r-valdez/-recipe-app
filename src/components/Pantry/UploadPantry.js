import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc } from "firebase/firestore";

const UploadPantry = (ingredients) => {
  //   const [itemName, setItemName] = useState("");
  //   const [quantity, setQuantity] = useState("");

  const handleUpload = async (e) => {
    e.preventDefault();

    try {
      const pantryRef = collection(db, "Pantry");
      //   await addDoc(pantryRef, {
      //     itemName: itemName,
      //     quantity: quantity,
      //   });
      await addDoc(pantryRef, ingredients);

      // clear form fields after successful upload
      //   setItemName("");
      //   setQuantity("");

      alert("Pantry item uploaded successfully!");
    } catch (error) {
      console.error("ERR: Error uploading pantry item:", error.message);
    }
  };

  return (
    <div>
      {/* <h2>Upload Pantry Item</h2>
      <form onSubmit={handleUpload}>
        <label>
          Item Name:
          <input
            type="text"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Quantity:
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </label>
        <br /> */}

      <button className="btn btn-secondary" onClick={handleUpload}>
        Update Pantry
      </button>
      {/* </form> */}
    </div>
  );
};

export default UploadPantry;
