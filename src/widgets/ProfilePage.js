import Image from 'react-bootstrap/Image';
import { auth, db, useAuth } from '../firebase';
import ProfileEdit from './ProfileEdit';
import React, { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const navigate = useNavigate();
  const curUser = useAuth();
  const [loading, setLoading] = useState(true);
  const [editState, setEditState] = useState(false);
  const [photoURL] = useState(
    'https://firebasestorage.googleapis.com/v0/b/recipegenerator-db0be.appspot.com/o/Users%2Fuser-profiles%2Fuser-default.jpeg?alt=media&token=eae46bc8-6744-431a-9469-617e2f7578aa'
  );
  const [userInfo, setUserInfo] = useState({});

  const userRef = curUser ? doc(db, 'Users', curUser.uid) : null;

  const getUserInfo = async () => {
    try {
      if (userRef) {
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log('curUser in useEffect:', curUser);
    if (!curUser) {
      console.log('Redirecting to login page');
      navigate('/login-page');
    } else {
      setLoading(true);
      getUserInfo();
    }
  }, []);

  if (loading) {
    console.log('Loading user data...');
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="container-sm">
        <Image
          src={curUser?.photoURL || photoURL}
          width="200"
          roundedCircle={true}
        />
      </div>
      <div>
        <h4>Welcome, {userInfo?.firstName}!</h4>
      </div>

      <div>
        <ul className="list-group">
          <li className="list-group-item">
            Name: {userInfo?.firstName + ' ' + userInfo?.lastName}
          </li>
          <li className="list-group-item">Email: {curUser?.email} </li>
          <li className="list-group-item">Phone: {userInfo?.phone} </li>
          <li className="list-group-item">
            User since: {userInfo?.userSince?.toDate()?.toDateString()}
          </li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          disabled={!curUser}
          className="btn btn-primary"
          onClick={() => setEditState(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-gear-wide"
            viewBox="0 0 16 16"
          >
            <path d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.a.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.a.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 1 0-9.995 4.998 4.998 0 0 1 0 9.996z" />
          </svg>{' '}
          Edit Profile
        </button>
        {curUser && <ProfileEdit disabled={!curUser} state={editState} setState={setEditState} />}
      </div>
    </div>
  );
};

export default ProfilePage;
