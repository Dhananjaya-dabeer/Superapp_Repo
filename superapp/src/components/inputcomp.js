import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Inputcomp() {
  let [name, setName] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [isFormValid, setisFormValid] = useState(false);

  useEffect(() => {}, [name]);
  useEffect(() => {}, [userName]);
  useEffect(() => {}, [email]);
  useEffect(() => {}, [mobile]);
  function errorCheck(event) {
    event.preventDefault();
    const checkBox = document.getElementById("checkbox");
    const checkBoxValue = checkBox.checked;
    let isFormValid = true;
    if (name === "") {
      isFormValid = false;
      document.getElementById("nameinput").innerText = "Field is required";
    } else {
      document.getElementById("nameinput").innerText = "";
    }
    if (userName === "") {
      isFormValid = false;
      document.getElementById("usernameinput").innerText = "Field is required";
    } else {
      document.getElementById("usernameinput").innerText = "";
    }
    if (email === "") {
      isFormValid = false;
      document.getElementById("emailinput").innerText = "Field is required";
    } else {
      document.getElementById("emailinput").innerText = "";
    }
    if (mobile === "") {
      isFormValid = false;
      document.getElementById("mobileinput").innerText = "Field is required";
    } else if (mobile.length !== 10) {
      isFormValid = false;
      document.getElementById("mobileinput").innerText = "enter-10 numbers";
    } else {
      document.getElementById("mobileinput").innerText = "";
    }
    if (!checkBoxValue) {
      isFormValid = false;
      document.getElementById("checkboxinput").innerText =
        "Check this box if you want to proceed";
    } else {
      document.getElementById("checkboxinput").innerText = "";
    }
    if (!isFormValid) {
      document.getElementById("reg_msg").innerText = "";
    } else {
      localStorage.setItem("Name", JSON.stringify(name));
      localStorage.setItem("userName", JSON.stringify(userName));
      localStorage.setItem("mobile", JSON.stringify(mobile));
      localStorage.setItem("email", JSON.stringify(email));
      document.getElementById("reg_msg").innerText =
        "Registration was successful.";
      setisFormValid(true);
    }
  }

  let HandleName = (event) => {
    setName(event.target.value);

    if (name === null) {
      document.getElementById("nameinput").innerText = "Field is required";
    } else {
      document.getElementById("nameinput").innerText = "";
    }
  };

  let HandleUserName = (event) => {
    setUserName(event.target.value);
    if (userName === null) {
      document.getElementById("usernameinput").innerText = "Field is required";
      setisFormValid(false);
    } else {
      document.getElementById("usernameinput").innerText = "";
    }
  };

  let HandleEmail = (event) => {
    setEmail(event.target.value);

    if (email === null) {
      document.getElementById("emailinput").innerText = "Field is required";
      setisFormValid(false);
    } else {
      document.getElementById("emailinput").innerText = "";
    }
  };

  let HandleMobile = (event) => {
    setMobile(event.target.value);
    let inputElement = event.target.value;
    let mobileValue = inputElement.trim();
    if (mobileValue === "") {
      document.getElementById("mobileinput").innerText = "Field is required";
      setisFormValid(false);
    } else if (mobileValue.length === 10) {
      document.getElementById("mobileinput").innerText = "";
    } else if (isNaN(mobileValue)) {
      document.getElementById("mobileinput").innerText = "enter a valid Number";
      setisFormValid(false);
    } else {
      document.getElementById("mobileinput").innerText =
        "enter 10-digit number";
      setisFormValid(false);
    }
  };
  let HandleCheckBox = (event) => {
    let checkBox = event.target.checked;

    if (!checkBox) {
      document.getElementById("checkboxinput").innerText =
        "Check this box if you want to proceed";
      setisFormValid(false);
    } else {
      document.getElementById("checkboxinput").innerText = "";
    }
  };

  return (
    <>
      <form className="inputfields" onSubmit={errorCheck}>
        <div className="userdetails">
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={HandleName}
          />
          <p id="nameinput"></p>
          <input
            type="text"
            name="username"
            placeholder="UserName"
            onChange={HandleUserName}
          />
          <p id="usernameinput"></p>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={HandleEmail}
          />
          <p id="emailinput"></p>
          <input
            id="mobilenumber"
            type="text"
            name="mobile"
            placeholder="Mobile"
            onChange={HandleMobile}
          />
          <p id="mobileinput">
            <span id="mobilenum"></span>
          </p>
          <button type="submit" id="Router">
            SIGN UP
          </button>
        </div>
        <input type="checkbox" id="checkbox" onChange={HandleCheckBox} />{" "}
        <span id="checkboxspan">Share my registration data with Superapp</span>
        <p id="checkboxinput"></p>
        <div id="reg_msg"></div>
      </form>
      {isFormValid && (
        <Link id="CategoryPage" to={"/Category/*"}>
          Click here to Catogery List{" "}
        </Link>
      )}
    </>
  );
}

export default Inputcomp;
