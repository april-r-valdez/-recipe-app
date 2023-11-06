import Image from 'react-bootstrap/Image'
import defaultProfile from '../assets/images/defaultProfile.svg';
import { Auth } from "firebase/auth";
import { useAuth } from '../firebase';
import React, { useState, useEffect } from 'react';


const ProfileEdit = (props) => {

  const curUser = useAuth(); 
  const [photoURL, setphotoURL] = useState(defaultProfile);

  useEffect(() => {
    if(curUser?.photoURL){
      setphotoURL(curUser.photoURL);
    }
  }, [curUser]);

  const handleSave = () => {
    return ("hi"  );
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
                width="100"
                roundedCircle={true}
              ></Image>
            </div>
            <button type="button" className="btn btn-primary btn-sm">Upload Profile Picture</button>
            <div className="container">
              <div className="input-group">
                    <label className="input-group-text">Username: </label>
                    <input  type="text" aria-label="Username" className="form-control" />
                </div>
                <div className="input-group">
                  <label className="input-group-text">Email</label>
                  <input type="text" aria-label="Email" className="form-control" />
                </div>
                <div className="input-group">
                  <label className="input-group-text">First name: </label>
                  <input  type="text" aria-label="First name" className="form-control" />
                </div>
                <div className="input-group">
                  <label className="input-group-text">Last name: </label>
                  <input  type="text" aria-label="Last name" className="form-control" />
                </div>
                <div className="input-group">
                  <label className="input-group-text">Phone number: </label>
                  <input  type="text" aria-label="First name" className="form-control" />
                </div>
                <div className="input-group">
                  <label className="input-group-text">Last name: </label>
                  <input  type="text" aria-label="Last name" className="form-control" />
                </div>
                <button type="button" className="btn btn-primary btn-sm"> Reset Password? </button>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"> Close </button>
                <button type="button" className="btn btn-primary"> Understood </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 

export default ProfileEdit;