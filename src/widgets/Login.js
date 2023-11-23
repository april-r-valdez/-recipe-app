import { useRef, useState } from 'react';
import { signup, login, useAuth, logout, db} from "../firebase";
import { getFirestore, serverTimestamp, setDoc, doc, collection, addDoc} from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const currentUser = useAuth();
  const navigate = useNavigate();
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [error, setError] = useState();

    //async bc api call
     async function handleSignup(e) {
      e.preventDefault();
      setError("")
      try{
        const res = await signup(signupEmail, signupPassword);        
        // Add a new document in collection "Users"
        await setDoc(doc(db, "Users", res.user.uid), {
          firstName: "",
          lastName: "",
          userName: "", 
          email: signupEmail,
          phone: "",
          userSince: serverTimestamp(),
        });
        navigate("/home");
      }
        catch{
          alert("Error!")
        }

    }
    //async bc api call
    async function handleLogin() {
      try{
        await login(loginEmail,loginPassword);
        navigate("/home");
      }catch (error) {
        console.error("Login error:", error);
        alert("Login failed. Please check your email and password.");
      }
    }
    async function handleLogout(){
      logout();
      navigate("/home");
    }

    return ( 
        <div className="container-sm">
            <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <button className="nav-link active" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="true">Login</button>
                <button className="nav-link " id="nav-signup-tab" data-bs-toggle="tab" data-bs-target="#nav-signup" type="button" role="tab" aria-controls="nav-signup" aria-selected="true">Signup</button>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
                  <div className="form px-4 pt-5">
                    <div>
                      Successfully logged in as: {currentUser?.email}
                    </div>
                    <input type="email" className="form-control" placeholder="Email or Phone" value={loginEmail} onChange={(e) => {setLoginEmail(e.target.value)}}/>
                    <input type="password" className="form-control" placeholder="Password" value={loginPassword} onChange={(e) => {setLoginPassword(e.target.value)}}/>
                    {!currentUser &&
                    <>
                    <button onClick={handleLogin} className="btn btn-secondary">Login</button>
                    </>}
                    
                    {currentUser &&
                    <>
                    <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
                    </>}
                    
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab">
                  <div className="form px-4 pt-5">
                  <div>
                      Successfully created account! Welcome, {currentUser?.email}
                    </div>
                    <input type="email"className="form-control" placeholder="Email" value={signupEmail} onChange={(e) => {setSignupEmail(e.target.value)}}/>
                    <input type="password" className="form-control" placeholder="Password"value={signupPassword} onChange={(e) => {setSignupPassword(e.target.value)}} />
                    {!currentUser &&
                    <>
                    <button onClick={handleSignup} className="btn btn-secondary">Signup</button>
                    </>}
                    
                  </div>
                </div>
               </div>

               {/* {<ProfilePage/>} */}
      </div>
     );
}
 
export default Login;