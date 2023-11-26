import React, { useState, useEffect } from "react";
import { firestore } from "../../../firebase";

const ShoppingList = ({ userID }) => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const shoppingListRef = firestore
          .collection("ShoppingList")
          .doc(userID);
        const snapshot = await shoppingListRef.get();

        if (snapshot.exists) {
          setShoppingList(snapshot.data().items || []);
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
        <td>{item.amount}</td>
        <td>{item.name}</td>
      </tr>
    );
  };

  return (
    <div className="container-sm text-center">
      <p className="h3">Shopping List</p>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Amount</th>
            <th scope="col">Name</th>
          </tr>
        </thead>
        <tbody>{shoppingList.map(renderShoppingListItem)}</tbody>
      </table>
    </div>
  );
};

export default ShoppingList;
