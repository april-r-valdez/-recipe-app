import Image from 'react-bootstrap/Image'
import { auth, db, useAuth } from '../firebase';
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import {doc, updateDoc, getDoc} from "firebase/firestore";


//need to add user's info to firestore
const ProfileEdit = (props) => {

  const editState = props.state;
  const setEditState = props.setState;
  
  const currentUser = useAuth();
  const [photoURL, setphotoURL] = useState("https://firebasestorage.googleapis.com/v0/b/recipegenerator-db0be.appspot.com/o/Users%2Fuser-profiles%2Fuser-default.jpeg?alt=media&token=eae46bc8-6744-431a-9469-617e2f7578aa");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [newUsername, setNewUsername] = useState();
  const [newPhone, setNewPhone] = useState(0);
  const [newEmail, setNewEmail] = useState();
  const [userInfo, setUserInfo] = useState(null);

  const userRef = doc(db, "Users", currentUser.uid);
  const getUserInfo = async () => {
    try{
      const docSnap = await getDoc(userRef);
      if (docSnap.exists()) {
        setUserInfo(docSnap.data(), doc.id);
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
  }catch{
    alert("Error!")}
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  const handleClose= () => {setEditState(false); };
  
  useEffect(() => {
    if(currentUser?.photoURL){
      setphotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  const handleUpload = (e) => {
    if(e.target.files[0]){
        setPhoto(e.target.files[0]);
      }
  }

  async function handleSave() {
    try{
      // Add a new document in collection "Users"
    await updateDoc(userRef, {
      userName: newUsername,
      firstName: newFirstName,
      lastName: newLastName,
      //email: newEmail,
      phone: newPhone,
    });
    //uploadProfile(photo, currentUser.uid, setLoading);
    getUserInfo();
    }
    catch{
      alert("Error!")
    }
  }
    return (
      <>
        <Modal
          show={editState}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header>
            <Modal.Title>Edit Account Information</Modal.Title>
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close"
            ></button>
          </Modal.Header>

          <Modal.Body>
            <div className="d-flex justify-content-center">
              <Image src={photoURL} width="150" roundedCircle={true}></Image>
            </div>
            <div className="mb-3">
              <label for="formFileSm" className="form-label">
                Upload
              </label>
              <input
                disabled={loading}
                onChange={handleUpload}
                className="form-control-sm"
                id="formFileSm"
                type="file"
              />
            </div>
            <div className="container">
              <div className="input-group">
                <label className="input-group-text">Username: </label>
                <input
                  type="text"
                  placeholder={currentUser ? userInfo?.userName : "Add username"}
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                  }}
                  aria-label="Username"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Email</label>
                <input
                  type="email"
                  placeholder={currentUser?.email}
                  aria-label="Email"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">First name: </label>
                <input
                  type="text"
                  placeholder={currentUser ? userInfo?.firstName : "Add first name"}
                  onChange={(e) => {
                    setNewFirstName(e.target.value);
                  }}
                  aria-label="First name"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Last name: </label>
                <input
                  type="text"
                  placeholder={currentUser ? userInfo?.lastName : "Add last name"}
                  onChange={(e) => {
                    setNewLastName(e.target.value);
                  }}
                  aria-label="Last name"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Phone number: </label>
                <input
                  type="text"
                  placeholder={currentUser ? userInfo?.phone : "Add phone number"}
                  onChange={(e) => {
                    setNewPhone(Number(e.target.value));
                  }}
                  aria-label="First name"
                  className="form-control"
                />
              </div>
              <button type="button" className="btn btn-primary btn-sm">
                {" "}
                Reset Password?{" "}
              </button>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleClose}
            >
              {" "}
              Cancel{" "}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSave}
            >
              {" "}
              Save{" "}
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
}
 

export default ProfileEdit;