import Image from 'react-bootstrap/Image'
import defaultProfile from '../assets/images/defaultProfile.svg';
import { useAuth, uploadProfile, db } from '../firebase';
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";

//need to add user's info to firestore
const ProfileEdit = (props) => {
  const editState = props.state;
  const setEditState = props.setState;
  
  const curUser = useAuth(); 
  const [photoURL, setphotoURL] = useState("https://firebasestorage.googleapis.com/v0/b/recipegenerator-db0be.appspot.com/o/Users%2Fuser-profiles%2Fuser-default.jpeg?alt=media&token=eae46bc8-6744-431a-9469-617e2f7578aa");
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [username, setUsername] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();

  
  const handleClose= () => {setEditState(false); };
  
  useEffect(() => {
    if(curUser?.photoURL){
      setphotoURL(curUser.photoURL);
    }
  }, [curUser]);

  const handleUpload = (e) => {
    if(e.target.files[0]){
        setPhoto(e.target.files[0]);
      }
  }

  const handleSave = () => {
    uploadProfile(photo, curUser, setLoading);

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
                  placeholder={curUser ? curUser.userName : "Add username"}
                  value={username}
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  aria-label="Username"
                  className="form-control"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Email</label>
                <input
                  type="text"
                  placeholder={curUser?.email}
                  aria-label="Email"
                  className="form-control"
                  email="email"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">First name: </label>
                <input
                  type="text"
                  placeholder={curUser ? curUser.firstName : "Add first name"}
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  aria-label="First name"
                  className="form-control"
                  firstName="firstName"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Last name: </label>
                <input
                  type="text"
                  placeholder={curUser ? curUser.lastName : "Add last name"}
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  aria-label="Last name"
                  className="form-control"
                  lastName="lastName"
                />
              </div>
              <div className="input-group">
                <label className="input-group-text">Phone number: </label>
                <input
                  type="text"
                  placeholder={curUser ? curUser.phone : "Add phone number"}
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
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