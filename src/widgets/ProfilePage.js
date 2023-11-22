import Image from 'react-bootstrap/Image'
import defaultProfile from '../assets/images/defaultProfile.svg';
import { useAuth } from '../firebase';
import ProfileEdit from './ProfileEdit';
import React, { useState } from 'react';
import { IoIosSettings } from "react-icons/io";


//bug has been resolved

const ProfilePage = () => {

  const curUser = useAuth();
  const [editState, setEditState] = useState(false);
  const [photoURL] = useState("https://firebasestorage.googleapis.com/v0/b/recipegenerator-db0be.appspot.com/o/Users%2Fuser-profiles%2Fuser-default.jpeg?alt=media&token=eae46bc8-6744-431a-9469-617e2f7578aa");

    return (
      <div className="d-flex flex-column mb-3 align-items-center justify-content-center" >
        {curUser && (
          <>
            <div className="p-2">
              <Image
                src={curUser.photoURL || photoURL}
                width="200"
                roundedCircle={true}
              ></Image>
            </div>
            <div className="p-2">
              <h4>Welcome, {curUser?.displayName}!</h4>
            </div>

            <div className="p-2">
              <ul className="list-group">
                <li className="list-group-item">Name: {curUser?.displayName} </li>
                <li className="list-group-item">Email: {curUser?.email} </li>
                <li className="list-group-item">Phone: {curUser?.phone} </li>
                <li className="list-group-item">User since: {curUser?.creationtime}</li>
              </ul>
            </div>
            <div className="p-2" >
              <button
                type="button"
                disabled ={!curUser}
                className="btn btn-primary"
                onClick={() => setEditState(true)}
              >
                <IoIosSettings style={{ fontSize: '20px'}}/>
                Edit Profile
              </button>
              {curUser && <ProfileEdit state={editState} setState={setEditState}/>}
            </div>
          </>
        )}
      </div>
    );
}
 
export default ProfilePage;