import { ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";

// Call this function if the given image is an URL string 
export function uploadImageToFirebase(imageUrl, imageLocation) {

    // create a reference to point to RecipeImage in Firebase Storage
    const imageRef = ref(storage, imageLocation);

    // fetch the image from the URL
    fetch(imageUrl)
      .then(response => response.blob())
      .then(blob => {
        return uploadBytes(imageRef, blob);
      })
      .then((snapshot) => {console.log(snapshot);})
      .catch((error) => {console.log('Error uploading image: ', error);});
}

// Call this function if the given image is a File object
export function uploadImageFileToFirebase(imageFile, imageLocation) {
  
  // create a reference to point to RecipeImage in Firebase Storage
  const imageRef = ref(storage, imageLocation);

  // upload image file to database
  uploadBytes(imageRef, imageFile)
  .then((snapshot) => {console.log(snapshot);})
  .catch((error) => {console.log('Error uploading image: ', error);})
}
