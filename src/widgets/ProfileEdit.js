import Image from 'react-bootstrap/Image'
import defaultProfile from '../assets/images/defaultProfile.svg';
import { Auth } from "firebase/auth";
import { useAuth, uploadProfile } from '../firebase';
import React, { useState, useEffect } from 'react';

const inititalState = {
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  phone: "",
}

const ProfileEdit = (props) => {

  const curUser = useAuth(); 
  const [photoURL, setphotoURL] = useState(defaultProfile);
  const [photo, setPhoto] = useState(null);
  const [loading, setLoading] = useState(false);
  //const [data, setData] = useState();
  //const {firstName, lastName, email, userName, phone} = data
  
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
      <div>
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" 
          tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel"> Edit Account Information </h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
              </div>
              <div className="modal-body">
              <div className="container">
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
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Cancel </button>
                <button type="button" className="btn btn-primary" onClick={handleSave}> Save </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 

export default ProfileEdit;