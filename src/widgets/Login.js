
const Login = () => {
    return (
    <div className="container-sm">
        <div class="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
            <button className="nav-link active" id="nav-login-tab" data-bs-toggle="tab" data-bs-target="#nav-login" type="button" role="tab" aria-controls="nav-login" aria-selected="true">Login</button>
            <button class="nav-link " id="nav-signup-tab" data-bs-toggle="tab" data-bs-target="#nav-signup" type="button" role="tab" aria-controls="nav-signup" aria-selected="true">Signup</button>
        </div>
        <div className="tab-content" id="pills-tabContent">
            <div className="tab-pane fade show active" id="nav-login" role="tabpanel" aria-labelledby="nav-login-tab">
              <div className="form px-4 pt-5">
                <input type="text" name="" className="form-control" placeholder="Email or Phone"/>
                <input type="text" name="" className="form-control" placeholder="Password"/>
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
            <div className="tab-pane fade" id="nav-signup" role="tabpanel" aria-labelledby="nav-signup-tab">
              <div className="form px-4">
                <input type="text" name="" className="form-control" placeholder="Name"/>
                <input type="text" name="" className="form-control" placeholder="Email"/>
                <input type="text" name="" className="form-control" placeholder="Username"/>
                <input type="text" name="" className="form-control" placeholder="Phone"/>
                <input type="text" name="" className="form-control" placeholder="Password"/>
                <button className="btn btn-primary">Signup</button>
              </div>
            </div>
            </div>
    </div>
  );
}
 
export default Login;