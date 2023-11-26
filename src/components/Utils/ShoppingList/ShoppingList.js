import React, { useState, useEffect } from "react";
import { db } from "../../../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

const ShoppingList = ({ userID }) => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!userID) {
        alert("You're not signed in!");
        console.log("ERR: Not signed in.");
        return;
      }

      try {
        const shoppingListRef = collection(db, "ShoppingLists");

        // look for existing user shopping list
        const userDocRef = doc(shoppingListRef, userID);
        console.log("userID: ", userID);
        const snapshot = await getDoc(userDocRef);

        if (snapshot.exists()) {
          setShoppingList(snapshot.data().ingredients);
        }
      } catch (error) {
        console.error("Error fetching shopping list:", error);
      }
    };

    fetchData();
  }, [userID]);

  const renderShoppingListItem = (item, index) => {
    return (
      <tr key={index}>
        <td>{shoppingList[item]}</td>
        <td>{item}</td>
      </tr>
    );
  };

  return (
    <div className="container-sm text-center mt-5">
      <p className="h3">Shopping List</p>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(shoppingList).map((item, index) =>
            renderShoppingListItem(item, index)
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
