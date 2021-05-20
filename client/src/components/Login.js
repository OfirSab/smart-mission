import React from 'react';

const Login = () =>{
    return (
        <div className="login-page">
            <form action="/login" method="POST" className="form">
            <h1>Login</h1>
            <div class="form-floating mb-3">
                <input type="text" className="form-control" name="username" id="floatingInput" placeholder="lastname"/>
                <label for="floatingInput">First name</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" className="form-control" name="password" id="floatingInput" placeholder="lastname"/>
                <label for="floatingInput">Last name</label>
            </div>
              <input type="submit" value="Connect" className="btn btn-dark btn-block"/>
          </form>
        </div>
    )
}

export default Login;