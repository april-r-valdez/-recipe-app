import Image from 'react-bootstrap/Image'
import defaultProfile from '../assets/images/defaultProfile.svg';
import { useAuth, uploadProfile } from '../firebase';
import React, { useState, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";

const inititalState = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  phone: "",
}
//need to add user's info to firestore
const ProfileEdit = (props) => {
  const editState = props.state;
  const action = props.action;
  
  const curUser = useAuth(); 
  const [photoURL, setphotoURL] = useState(defaultProfile);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [data, setData] = useState();
  //const {firstName, lastName, email, userName, phone} = data
  
  const handleClose= () => {editState = !editState};
  
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
          keyboard={false}>
            <Modal.Header>
              <Modal.Title>Edit Account Information</Modal.Title>
              <button type="button" className="btn-close" onClick={action} aria-label="Close" ></button>
            </Modal.Header>

            <Modal.Body>
            <div className="d-flex justify-content-center">
              <Image
                src={photoURL}
                width="150"
                roundedCircle={true}
              ></Image>
            </div>
            <div className="mb-3">
                <label for="formFileSm" className="form-label">Upload</label>
                <input disabled={loading} onChange={handleUpload} className="form-control-sm" id="formFileSm" type="file"/>
            </div>
              <div className="container">
              <div className="input-group">
                    <label className="input-group-text">Username: </label>
                    <input type="text" placeholder={curUser.userName || 'Add username' }  aria-label="Username" className="form-control" userName="userName"/>
                </div>
                <div className="input-group">
                  <label className="input-group-text">Email</label>
                  <input type="text" placeholder={curUser.email}  aria-label="Email" className="form-control" email='email' />
                </div>
                <div className="input-group">
                  <label className="input-group-text">First name: </label>
                  <input type="text" placeholder={curUser.firstName || 'Add first name' }  aria-label="First name" className="form-control" firstName='firstName' />
                </div>
                <div className="input-group">
                  <label className="input-group-text">Last name: </label>
                  <input type="text" placeholder={curUser.lastName || 'Add last name' } aria-label="Last name" className="form-control" lastName='lastName' />
                </div>
                <div className="input-group">
                  <label className="input-group-text">Phone number: </label>
                  <input type="text" placeholder={curUser.phone || 'Add phone number' }  aria-label="First name" className="form-control" />
                </div>
                <button type="button" className="btn btn-primary btn-sm"> Reset Password? </button>
              
              </div>
            </Modal.Body>
            <Modal.Footer>
              <button type="button" className="btn btn-secondary" onClick={action}> Cancel </button>
              <button type="button" className="btn btn-primary" onClick={handleSave}> Save </button>
            </Modal.Footer>
        </Modal>
      </>
    );
}
 

export default ProfileEdit;