import { useRef } from 'react';
import { signup, login, useAuth, logout} from "../firebase";
import ProfilePage from "./ProfilePage";

const Login = () => {

  const emailRef = useRef();
  const passRef = useRef();
  const emailLog = useRef();
  const passLog = useRef();
  const curUser = useAuth();

    //async bc api call
     async function handleSignup() {
      try{
        await signup(emailRef.current.value,passRef.current.value);
      }
        catch{
          alert("Error!")
        }
    }
    //async bc api call
    async function handleLogin() {
      try{
        await login(emailLog.current.value,passLog.current.value);
      }
        catch{
          alert("Error!")
        }
    }
    async function handleLogout(){
      logout();
    }

    return ( 
        <div className="container-sm">
            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                <button className="nav-link active " id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="true">Login</button>
                <button className="nav-link " id="nav-signup-tab" data-bs-toggle="tab" data-bs-target="#nav-signup" type="button" role="tab" aria-controls="nav-signup" aria-selected="true">Signup</button>
            </div>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
                  <div className="form px-4 pt-5">
                    <div>
                      Successfully logged in as: {curUser?.email}
                    </div>
                    <input ref={emailLog} type="text" name="" className="form-control" placeholder="Email or Phone"/>
                    <input ref={passLog} type="password" name="" className="form-control" placeholder="Password"/>
                    {!curUser &&
                    <>
                    <button onClick={handleLogin} className="btn btn-secondary">Login</button>
                    </>}
                    
                    {curUser &&
                    <>
                    <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
                    </>}
                    
                  </div>
                </div>
                <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab">
                  <div className="form px-4 pt-5">
                  <div>
                      Successfully created account! Welcome, {curUser?.email}
                    </div>
                    <input ref={emailRef}type="text" name="" className="form-control" placeholder="Email"/>
                    <input ref={passRef} type="password" name="" className="form-control" placeholder="Password"/>
                    {!curUser &&
                    <>
                    <button onClick={handleSignup} className="btn btn-secondary">Signup</button>
                    </>}
                    
                  </div>
                </div>
               </div>

               {<ProfilePage />}
      </div>
     );
}
 
export default Login;