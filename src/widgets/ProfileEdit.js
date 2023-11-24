import Image from 'react-bootstrap/Image'
import { useAuth, useUserInfo, uploadProfile, reauthUser } from '../firebase';
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';


//need user to validate changes
const ProfileEdit = (props) => {

  const editState = props.state;
  const setEditState = props.setState;
  
  const currentUser = useAuth();
  const { userInfo, updateUserInfo } = useUserInfo(currentUser);
  const [photoURL, setphotoURL] = useState("https://firebasestorage.googleapis.com/v0/b/recipegenerator-db0be.appspot.com/o/Users%2Fuser-profiles%2Fuser-default.jpeg?alt=media&token=eae46bc8-6744-431a-9469-617e2f7578aa");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [newUsername, setNewUsername] = useState();
  const [newFirstName, setNewFirstName] = useState();
  const [newLastName, setNewLastName] = useState();
  const [newPhone, setNewPhone] = useState();
  const [newEmail, setNewEmail] = useState();
  const [changesMade, setChangesMade] = useState(false);

  const [reAuthModal, setReAuthModal] = useState(false);
  const [password, setPassword] = useState();

  const handleClose= () => {setEditState(false); }

  const handleReAuthClose = () => {setReAuthModal(false); }
  
  const handleUpload = (e) => {
    if(e.target.files[0]){
        setPhoto(e.target.files[0]);
      }
  }
 
  const handleSave = async () => {
    // Check if the user is already authenticated
    if (!currentUser) {
      alert('User is not authenticated.');
      return;
    }
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
    // Show reauthentication modal only if changes are made
    if (
      newUsername !== undefined ||
      newFirstName !== undefined ||
      newLastName !== undefined ||
      newPhone !== undefined ||
      photo !== null
    ) {
      // Check if the user is authenticated before showing the re-authentication modal
      if (currentUser) {
        setReAuthModal(true);
      } else {
        // Handle the case where currentUser is not defined (not authenticated)
        alert('User is not authenticated.');
      }
    } else {
      // No changes made, proceed directly with the save operation
      await handleSaveChanges();
    }
  };

  const handleSaveChanges = async () => {
    try {
      // Update user information if there are any changes
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
  
      if (Object.keys(updatedFields).length > 0 || photo) {
        await updateUserInfo(updatedFields);
        props.onUpdateUserInfo(userInfo => ({ ...userInfo, ...updatedFields }));
      }
  
      if (photo) {
        // If a new photo is selected, upload it
        await uploadProfile(photo, currentUser, setLoading);
      }
  
      // Close the main modal after successful save
      setEditState(false);
    } catch (error) {
      console.error('Error during save changes:', error.message);
      // Handle the error or throw it again if necessary
    }
  };

 
  const handleReauthSuccess = async () => {
    try {
      // Reauthenticate the user
      await reauthUser(currentUser, password);
      // Apply changes after successful re-authentication
      await handleSaveChanges();
      alert('Success!')

    } catch (error) {
      alert('Error during re-authentication.');
    }
    // Close the reauthentication modal only if re-authentication was successful
    setReAuthModal(false);
  };

    return (
      <div>
      {currentUser && userInfo ? (
      <>
        <Modal
          show={editState}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
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

          {/* Modal for re-authentication */}
        </Modal>
        <Modal
          size="sm"
          show={reAuthModal}
          onHide={handleReAuthClose}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header>
            <Modal.Title>Enter your password.</Modal.Title>
            <button
              type="button"
              className="btn-close"
              onClick={handleReAuthClose}
              aria-label="Close"
            ></button>
          </Modal.Header>

          <Modal.Body>
            <div className="container">
              <label>Password:</label>
                <input
                    type="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    className="form-control"
                />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReAuthClose}
            >
              {" "}
              Cancel{" "}
            </button>
            <button
              type="button"
              disabled={!password}
              onClick={handleReauthSuccess}
              className="btn btn-primary"
            >
              {" "}
              Confirm{" "}
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