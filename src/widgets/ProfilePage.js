import Image from 'react-bootstrap/Image';
import { useAuth, useUserInfo } from '../firebase';
import ProfileEdit from './ProfileEdit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSettings } from "react-icons/io";
import { RotatingTriangles } from 'react-loader-spinner';

const ProfilePage = () => {
  const navigate = useNavigate();
  const currentUser = useAuth();
  const [userInfo, setUserInfo] = useState(null);

  const { userInfo: userInformation, updateUserInfo } = useUserInfo(
    currentUser,
    setUserInfo
  );
  console.log('userInfo:' ,userInfo?.firstName)
  const [editState, setEditState] = useState(false);
  const [photoURL] = useState(
    'https://firebasestorage.googleapis.com/v0/b/recipegenerator-db0be.appspot.com/o/Users%2Fuser-profiles%2Fuser-default.jpeg?alt=media&token=eae46bc8-6744-431a-9469-617e2f7578aa'
  );
  
  if (!currentUser) {
    // Redirect or show a login component here
    console.log('Redirecting to login page');
    navigate('/login-page');
    return null; // Prevent rendering the rest of the component
  }

  return (
    <div>
      {currentUser && userInfo ? (
      <>
      <div className="container-sm">
        <Image
          src={currentUser.photoURL || photoURL}
          width="200"
          roundedCircle={true}
        />
      </div>
       <div>
         <h4>Welcome, {userInfo.firstName}!</h4>
       </div>
       
        <div>
         <ul className="list-group">
          <li className="list-group-item">Username: {userInfo.userName} </li>
          <li className="list-group-item">
             Name: {userInfo.firstName + ' ' + userInfo.lastName}
           </li>
          <li className="list-group-item">Email: {userInfo.email} </li>
          <li className="list-group-item">Phone: {userInfo.phone} </li>
          <li className="list-group-item">User since: {userInfo.userSince?.toDate().toDateString()}</li>
          </ul>
       </div>

       <div>
         <button
           type="button"
           className="btn btn-primary"
           onClick={() => setEditState(true)}
         >
            <IoIosSettings style={{ fontSize: '20px'}}/>
           Edit Profile
         </button>
          <ProfileEdit state={editState} setState={setEditState} onUpdateUserInfo={setUserInfo} />
       </div>
       </>
       ) : (
        <div className="row d-flex"><RotatingTriangles /></div>
      )}
    </div>
  );
};

export default ProfilePage;
