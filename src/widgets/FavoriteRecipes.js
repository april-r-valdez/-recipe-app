import React, { useEffect, useState } from 'react'
import { db, useAuth } from '../firebase';
import { doc, getDoc } from '@firebase/firestore';
import DisplayRecipeCardList from '../components/Utils/DisplayRecipeCardList';

const FavoriteRecipes = () => {
  
  // favorite recipe list
  const [recipeList, setRecipeList] = useState([]);
  const curUser = useAuth();

  const getFavoriteList = async () => {
    if (curUser) {
        const userRef = doc(db, 'Users', curUser.uid);
        try {
            const docSnap = await getDoc(userRef);
            if (docSnap.exists()) {
                const favoriteList = docSnap.data().favoriteRecipes;
                setRecipeList(favoriteList);
            } else {
                console.log("User not found.");
            }
        } catch (error) {
            console.log("Error getting recipe list:", error);
        }
    } else {
        console.log("getting user info...");
    }
  };

  useEffect(() => {
    getFavoriteList();
  }, [curUser]);
  
  return (
    <div className='container-fluid' style={{maxWidth: '1200px'}}>
      <h4>My List</h4>
      { recipeList.length !== 0 ?
        (<DisplayRecipeCardList recipeList={recipeList} displayCount={9}/>) :
        (<p>empty</p>)
      }
    </div>
  )
}

export default FavoriteRecipes
