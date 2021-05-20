import React from 'react';

const Login = () =>{
    return (
        <div className="login-page">
            <form action="/login" method="POST" className="form">
            <h1>Login</h1>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="username" id="floatingInputName" placeholder="lastname"/>
                <label>First name</label>
            </div>
            <div className="form-floating mb-3">
                <input type="text" className="form-control" name="password" id="floatingInputLast" placeholder="lastname"/>
                <label>Last name</label>
            </div>
              <input type="submit" value="Connect" className="btn btn-dark btn-block"/>
          </form>
        </div>
    )
}

export default Login;