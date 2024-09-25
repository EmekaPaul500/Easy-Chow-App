import { Link } from "react-router-dom";

import "../Styles/LoginPage.css";

const LoginPage = () => {
  return (
    <main className="mainLoginPage">
      <figure>
        <img src="../Images/LOGO.png" alt="logo" />
      </figure>
      <section className="sectionLoginPage">
        {/* First div */}
        <div className="section-child-div">
          <h1>Welcome back ! </h1>
          {/* Form- div */}
          <div className="form-div">
            <form action="">
              <label htmlFor="">Email</label>
              <input
                type="email"
                required
                placeholder="@gmail.com"
                className="text-input"
              />

              <label htmlFor="">Password</label>
              <input
                type="password"
                required
                placeholder="at least 8 characters"
                className="text-input"
              />

              {/* Checkbox div */}

              <div className="checkbox-main-div">
                <div className="checkbox-div">
                  <input type="checkbox" />
                  <label htmlFor="">Remember me </label>
                </div>
                <a href="/">Forget Password</a>
              </div>
              <button className="loginPageLogin">Log In </button>
            </form>
          </div>
          <button className="loginPageGoggle">
            <img src="../Images/goggle.png" alt="goggle" />
            Sign in with Google
          </button>
          <div className="loginPageSignIn">
            <p>Don't have an account ?</p>
            <Link to="/signUpPage">Sign in</Link>
          </div>
        </div>

        <figure className="loginPageFig">
          <img src="../Images/IMAGE FRAME 1.png" alt="" />
        </figure>
      </section>
    </main>
  );
};

export default LoginPage;
