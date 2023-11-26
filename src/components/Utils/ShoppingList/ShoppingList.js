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
          console.log(snapshot.data());
          setShoppingList(snapshot.data());
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
        <td>{item}</td>
        <td>{shoppingList[item]}</td>
      </tr>
    );
  };

  return (
    <div className="container-sm text-center mt-5">
      <p className="h3">Shopping List</p>

      <table className="table">
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
