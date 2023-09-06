/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
// import { faCss3, faFacebook } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Abc() {
  return (
    <>
      <header>
        <div className="section-header">
          <div className="container-fluid">
            <div className="container">
              <div className="logo">
                <img src="/images/header/logo1.png" alt="...." />
              </div>
            </div>
          </div>
        </div>
      </header>
      <form>
        <div className="login-section">
          <div className="container-fluid">
            <div className="container">
              <div className="login">
                <div className="login-page">
                  <div className="login-data">
                    <div className="heading">Login</div>
                    <div className="login-info">
                      <label htmlFor="Email">Email</label>
                      <input type="Email" name="Email" required />
                    </div>
                    <div className="login-info">
                      <label htmlFor="password">password</label>
                      <input type="password" name="password" required />
                    </div>
                    <div className="forgot-pass">
                      <a href="#">Forgot Password?</a>
                    </div>
                    <div className="submit">
                      <button className="sub" type="submit">
                        Login
                      </button>
                      <div className="add-button">
                        <button className="sub_1" type="submited">
                          <a href="/super.html"> Super Admin</a>
                        </button>
                        <button className="sub_1" type="submited">
                          <a href="/hr.html">HR Department</a>
                        </button>
                        <button className="sub_1" type="submited">
                          <a href="company.html">Company</a>
                        </button>
                        <button className="sub_1" type="submited">
                          <a href="/employee.html">Employee</a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image">
                  <img src="/images/header/h1.avif" alt=".." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Abc;
