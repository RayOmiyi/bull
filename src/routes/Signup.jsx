import React, { useEffect, useRef, useState } from "react";
import Welcome from "../assets/Welcome Back.png";
import OX from "../assets/Layer_1.png";
import franceFlag from "../assets/icons8-france-48.png";
import englishFlag from "../assets/english.png";
import icon from "../assets/Icon.png";
import { MdKeyboardArrowDown, MdOutlineRemoveRedEye } from "react-icons/md";
import { GoPerson, GoPersonAdd } from "react-icons/go";
import { FiKey } from "react-icons/fi";
import { CiMail, CiGlobe } from "react-icons/ci";
import "../Styles/Signup.css";
import { countries } from "countries-list";
import { RxEyeClosed } from "react-icons/rx";
import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

const Signup = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [selectedLanguageFlag, setSelectedLanguageFlag] = useState(englishFlag);
  const [showPassword, setShowPassword] = useState(false);
  const [isCompanySelected, setIsCompanySelected] = useState(false);
  const [welcomesHeight, setWelcomesHeight] = useState("auto");
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
      const formHeight = formRef.current.offsetHeight;
      setWelcomesHeight(formHeight);
    }
  }, []);

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

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setShowCountryDropdown(false);
  };

  const countryNames = Object.values(countries).map((country) => country.name);

  return (
    <div className="container">
      <section className="welcomes" style={{ height: welcomesHeight }}>
        <img src={Welcome} alt="welcomes" />
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
            <button className="btns" onClick={() => setIsCompanySelected(true)}>
              Open Account
            </button>
          </div>
          {/*  */}
              </div>
        </div>
        <div className="signup-section">
          <h1 className="Text" style={{ marginBottom: "10px" }}>
            Sign Up
          </h1>
          <div className="signup-btn">
            <button
              className={`head-btn ${!isCompanySelected ? "active" : ""}`}
              onClick={() => setIsCompanySelected(false)}
            >
             
              {!isCompanySelected && (
                <IoCheckmarkCircle className="checkmark-icon" />
              )}
              {isCompanySelected && (
                <div className="slider individual-slider" />
              )} Individual
            </button>
            <button
              className={`head-btn ${isCompanySelected ? "active" : ""}`}
              onClick={() => setIsCompanySelected(true)}
            >
              
              {isCompanySelected && (
                <IoCheckmarkCircle className="checkmark-icon" />
              )}
              {!isCompanySelected && <div className="slider company-slider" />}Company
            </button>
          </div>
          <p className="para">Country or Region</p>
          <div className="country-dropdown">
            <div
              className="select"
              onClick={() => setShowCountryDropdown(!showCountryDropdown)}
            >
              <span style={{ color: selectedCountry ? "#000" : "#D0D5DD" }}>
                {selectedCountry || "Country"}
              </span>
              <CiGlobe size={20} className="globe" />
              <MdKeyboardArrowDown size={20} className="black" />
            </div>
            {showCountryDropdown && (
              <div className="dropdown-content">
                <div className="dropdown-scrollable">
                  {countryNames.map((country, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => handleCountrySelect(country)}
                    >
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="flex">
              <div className="col">
                <p className="para">First Name</p>
                <div className="input-group">
                  <GoPerson className="input-icon" size={20} />
                  <input
                    type="name"
                    placeholder="John"
                    className="name-inputs"
                  />
                </div>
              </div>
              <div className="col">
                <p className="para">Last Name</p>
                <div className="input-group">
                  <GoPerson className="input-icon" size={20} />
                  <input
                    type="name"
                    placeholder="Smith"
                    className="name-inputs"
                  />
                </div>
              </div>
            </div>
            <div className="input-container">
              {isCompanySelected && (
                <div className="input-group">
                  <div className="col">
                    <p className="para">Company Name</p>
                    <CiGlobe className="input-icons" size={20} />
                    <input
                      type="email"
                      placeholder="Company"
                      className="email-inputs"
                    />
                  </div>
                </div>
              )}
              <div className="input-group">
                <div className="col">
                  <p className="para">Email</p>
                  <CiMail className="input-icons" size={20} />
                  <input
                    type="email"
                    placeholder="olivia@untitled.com"
                    className="email-inputs"
                  />
                </div>
              </div>
              <div className="input-group">
                <div className="col">
                  <p className="para">Password</p>
                  <FiKey className="input-icons" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="password-inputs"
                  />
                  {showPassword ? (
                    <RxEyeClosed
                      className="eye-icons"
                      size={20}
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <MdOutlineRemoveRedEye
                      className="eye-icons"
                      size={20}
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <p className="hint-text">
                *Must be 8 to 20 characters <br /> *Must at least contain one
                uppercase letter, one lowercase letter, one special <br />{" "}
                symbol and one digital number
              </p>
              <div className="input-group">
                <div className="col">
                  <p className="para">Confirm Password</p>
                  <FiKey className="input-icons" size={20} />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className="password-inputs"
                  />
                  {showPassword ? (
                    <RxEyeClosed
                      className="eye-icons"
                      size={20}
                      onClick={togglePasswordVisibility}
                    />
                  ) : (
                    <MdOutlineRemoveRedEye
                      className="eye-icons"
                      size={20}
                      onClick={togglePasswordVisibility}
                    />
                  )}
                </div>
              </div>
              <div className="input-group">
                <div className="col">
                  <p className="para">Referral Code</p>
                  <GoPersonAdd className="input-icons" size={20} />
                  <input
                    type="email"
                    placeholder="Code"
                    className="email-inputs"
                  />
                </div>
              </div>
              <h5 className="h5">
                By creating an account, you agree to the{" "}
                <span className="blue">
                  Terms & <br /> Conditions, Privacy Policy
                </span>{" "}
                and <span className="blue">Cookies Policy</span>
              </h5>
              <button type="submit">Send Verification Email</button>
            </div>
             <Link to="/"><button className="buttons">Back</button></Link>
            <p className="p">
            Risk warning: Trading Derivatives carries a high level of risk to
            your capital and you should <br /> only trade with money you can afford to
            lose. Trading Derivatives may not be suitable for all <br /> investors, so
            please ensure that you fully understand the risks involved and seek
            independent <br /> advice if necessary. Raw Spread accounts commission
            charge of USD $3.50 per 100k traded. <br /> Standard account offers spreads
            from 0.8 pip with no additional commission charges. <br /> Spreads on CFD
            indices start at 0.4 points.
          </p>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Signup;
