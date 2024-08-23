import { useState } from "react";

const LoginForm = () => {
  const [isLogin, setisLogin] = useState(true);

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button
            className={isLogin ? "active" : " "}
            onClick={() => setisLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? "active" : " "}
            onClick={() => setisLogin(false)}
          >
            Sign Up
          </button>
        </div>
        {isLogin ? (
          <>
            <div className="form">
              <h2>Login Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <a href="#">Forgot Password?</a>
              <button>Login</button>
              <p>
                Not a member?{" "}
                <a href="#" onClick={() => setisLogin(false)}>
                    SignUp Now?
                </a>
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="form">
              <h2>SignUp Form</h2>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="password" />
              <input type="password" placeholder="Confirm Password" />
              <button>SignUp</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
