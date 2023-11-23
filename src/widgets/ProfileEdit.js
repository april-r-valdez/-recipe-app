import Image from 'react-bootstrap/Image'
import { auth, db, useAuth, useUserInfo, uploadProfile, reauthUser } from '../firebase';
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import {doc, updateDoc, getDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';


//need user to validate changes
const ProfileEdit = (props) => {

  const editState = props.state;
  const setEditState = props.setState;
  
  const currentUser = useAuth();
  const { userInfo, updateUserInfo } = useUserInfo(currentUser);
  const navigate = useNavigate();
  const [photoURL, setphotoURL] = useState("https://firebasestorage.googleapis.com/v0/b/recipegenerator-db0be.appspot.com/o/Users%2Fuser-profiles%2Fuser-default.jpeg?alt=media&token=eae46bc8-6744-431a-9469-617e2f7578aa");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newUsername, setNewUsername] = useState();
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [newPhone, setNewPhone] = useState();
  const [newEmail, setNewEmail] = useState();
  const [changesMade, setChangesMade] = useState(false);
     
  const handleClose= () => {setEditState(false); }
  
  const handleUpload = (e) => {
    if(e.target.files[0]){
        setPhoto(e.target.files[0]);
      }
  }

  const handleReauth = async () => {
    if (currentUser) {
      reauthUser(currentUser);
    } else {
      console.error('User is not logged in.');
    }
  }; 
 
  const handleSave = async () => {
    // Check if at least one field has been entered
  if (
    newUsername === undefined &&
    newFirstName === undefined &&
    newLastName === undefined &&
    newPhone === undefined &&
    photo === null
  ) {
    alert('No changes made!');
    return;
  }

  // If any field has been entered, prompt the user for re-authentication
  if (newUsername !== undefined || newFirstName !== undefined || newLastName !== undefined || newPhone !== undefined || photo !== null) {
    try {
      await handleReauth();
    } catch {
      alert('Re-authentication failed. Please try again.');
      return;
    }
  }

  // Update user information only for the fields that have been entered
  const updatedFields = {};
  if (newUsername !== undefined) {
    updatedFields.userName = newUsername;
  }
  if (newFirstName !== undefined) {
    updatedFields.firstName = newFirstName;
  }
  if (newLastName !== undefined) {
    updatedFields.lastName = newLastName;
  }
  if (newPhone !== undefined) {
    updatedFields.phone = newPhone;
  }
  try{
    // Update user information if there are any changes
    if (Object.keys(updatedFields).length > 0 || photo) {
      await updateUserInfo(updatedFields);
    }
      if (photo) {
        // If a new photo is selected, upload it
        await uploadProfile(photo, currentUser, setLoading);
      }
      alert('Changes saved successfully!');
      handleClose();
    }
    catch{
      alert("Error!")
    }
  }
    return (
      <div>
      {currentUser && userInfo ? (
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
              <Image src={currentUser.photoURL} width="150" roundedCircle={true}></Image>
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
                  placeholder={userInfo.userName || "Add username"}
                  onChange={(e) => {
                    setNewUsername(e.target.value);
                    setChangesMade(true);
                  }}
                  aria-label="Username"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Email</label>
                <input
                  type="email"
                  placeholder={currentUser.email}
                  aria-label="Email"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">First name: </label>
                <input
                  type="text"
                  placeholder={userInfo.firstName || "Add first name"}
                  onChange={(e) => {
                    setNewFirstName(e.target.value);
                    setChangesMade(true);
                  }}
                  aria-label="First name"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Last name: </label>
                <input
                  type="text"
                  placeholder={userInfo.lastName || "Add last name"}
                  onChange={(e) => {
                    setNewLastName(e.target.value);
                    setChangesMade(true);
                  }}
                  aria-label="Last name"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Phone number: </label>
                <input
                  type="text"
                  placeholder={userInfo.phone || "Add phone number"}
                  onChange={(e) => {
                    setNewPhone(Number(e.target.value));
                    setChangesMade(true);
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
              disabled={!changesMade || (newUsername === undefined && 
                newFirstName === undefined &&
                 newLastName === undefined &&
                  newPhone === undefined &&
                   photo === null)}
              className="btn btn-primary"
              onClick={handleSave}
            >
              {" "}
              Save{" "}
            </button>
          </Modal.Footer>
        </Modal>
      </>
      ):(
        <div>Loading...</div>
      )}
    </div>
    );
}
 

export default ProfileEdit;