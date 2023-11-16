import Image from 'react-bootstrap/Image'
import defaultProfile from '../assets/images/defaultProfile.svg';
import { useAuth } from '../firebase';
import ProfileEdit from './ProfileEdit';
import React, { useState } from 'react';


//going to incorporate using Firebase store to populate the profile

const ProfilePage = () => {

  const curUser = useAuth();
  const [editState, setEditState] = useState(false);
  const [photoURL] = useState("https://firebasestorage.googleapis.com/v0/b/recipegenerator-db0be.appspot.com/o/Users%2Fuser-profiles%2Fuser-default.jpeg?alt=media&token=eae46bc8-6744-431a-9469-617e2f7578aa");

    return (
      <div>
        {curUser && (
          <>
            <div class="container-sm">
              <Image
                src={curUser.photoURL || photoURL}
                width="200"
                roundedCircle={true}
              ></Image>
            </div>
            <div>
              <h4>Welcome, {curUser?.displayName}!</h4>
            </div>

            <div>
              <ul className="list-group">
                <li className="list-group-item">Name: {curUser?.displayName} </li>
                <li className="list-group-item">Email: {curUser?.email} </li>
                <li className="list-group-item">Phone: {curUser?.phone} </li>
                <li className="list-group-item">User since: {curUser?.creationtime}</li>
              </ul>
            </div>
            <div>
              <button
                type="button"
                disabled ={!curUser}
                className="btn btn-primary"
                onClick={() => setEditState(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-gear-wide"
                  viewBox="0 0 16 16"
                >
                  <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
                </svg>{" "}
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