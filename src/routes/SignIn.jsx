import React, { useState } from "react";
import Welcome from "../assets/Welcome Back.png";
import OX from "../assets/Layer_1.png";
import icon from "../assets/Icon.png";
import "../Styles/SignIn.css";
import { Link } from "react-router-dom";
import { FiKey } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { MdKeyboardArrowDown, MdOutlineRemoveRedEye } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import franceFlag from "../assets/icons8-france-48.png";
import englishFlag from "../assets/english.png";


const SignIn = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [showPassword, setShowPassword] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [selectedLanguageFlag, setSelectedLanguageFlag] = useState(englishFlag);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
    if (language === "English") {
      setSelectedLanguageFlag(englishFlag);
    } else if (language === "French") {
      setSelectedLanguageFlag(franceFlag);
    }
  };



  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container">
      <section className="welcome">
        <img src={Welcome} alt="welcome" />
      </section>
      <section className="form">
      <div className="header">
          <div className="div">
            <div className="ox-image">
            <img src={OX} alt="ox" />
            </div>
          <div className="btn">
            <div className="dropdown">
              <div
                className="select"
                onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
              >
                <img src={selectedLanguageFlag} alt={selectedLanguage} />{" "}
                {selectedLanguage}
                <MdKeyboardArrowDown size={20} className="black" />
              </div>
              {showLanguageDropdown && (
                <div className="language-dropdown-content">
                  <div className="language-dropdown-scrollable">
                    <div
                      className="language-dropdown-item"
                      onClick={() => handleLanguageSelect("English")}
                    >
                      <img src={englishFlag} alt="english" /> English
                    </div>
                    <div
                      className="language-dropdown-item"
                      onClick={() => handleLanguageSelect("French")}
                      >
                      <img src={franceFlag} alt="france" /> French
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button className="btns">
              Home <img src={icon} alt="" />
            </button>
            <button className="btns" >
              Open Account
            </button>
          </div>
          {/*  */}
              </div>
        </div>
        
        <div className="signin-section">
          <h1 className="Text">Sign In </h1>
          <h4 className="h4">OX Securities Secure Client Area</h4>
        </div>
        <div className="input-container">
          <div className="input-group">
            <CiMail className="input-icon" size={20} />
            <input
              type="email"
              placeholder="olivia@untitled.com"
              className="email-input"
            />
          </div>
          <div className="input-group">
            <FiKey className="input-icon" size={20} />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="password-input"
            />
            {showPassword ? (
              <RxEyeClosed
                className="eye-icon"
                size={20}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <MdOutlineRemoveRedEye
                className="eye-icon"
                size={20}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
        </div>
        <div className="bottom-bar">
          <div className="input-group remember-me">
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <div className="input-group forgot-password">
            <a href="/">Forgot your password?</a>
          </div>
        </div>
        <button type="submit">Sign In</button>
        <div className="links-container">
          <h4>
            Don't have an account?{" "}
            <Link to="/signup">Register for one here</Link>
          </h4>
        </div>
        <div className="links-container">
          <h4>
            Forgot your password? <Link>Reset here</Link>
          </h4>
        </div>
        <div className="paragraph">
          <p>
            Risk warning: Trading Derivatives carries a high level of risk to
            your capital and you should only trade with money you can afford to
            lose. Trading Derivatives may not be suitable for all investors, so
            please ensure that you fully understand the risks involved and seek
            independent advice if necessary. Raw Spread accounts commission
            charge of USD $3.50 per 100k traded. Standard account offers spreads
            from 0.8 pip with no additional commission charges. Spreads on CFD
            indices start at 0.4 points.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SignIn;
