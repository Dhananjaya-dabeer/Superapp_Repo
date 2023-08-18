import React, { useEffect } from "react";
import Profile from "../images/Profile.png";
import moment from "moment/moment";
function TopLeftProfile() {
  let action = JSON.parse(localStorage.getItem("action"));
  let drama = JSON.parse(localStorage.getItem("drama"));
  let romance = JSON.parse(localStorage.getItem("romance"));
  let thriller = JSON.parse(localStorage.getItem("thriller"));
  let western = JSON.parse(localStorage.getItem("western"));
  let horror = JSON.parse(localStorage.getItem("horror"));
  let fantasy = JSON.parse(localStorage.getItem("fantasy"));
  let music = JSON.parse(localStorage.getItem("music"));
  let fiction = JSON.parse(localStorage.getItem("fiction"));
  const date = new Date(); // Get the current date and time

const options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true // Use 12-hour clock with AM/PM
};

const formattedTime = new Intl.DateTimeFormat('en-US', options).format(date);

  useEffect(() => {
    let name = JSON.parse(localStorage.getItem("Name"));
    document.getElementById("n-ame").innerText = name;
    let email = JSON.parse(localStorage.getItem("email"));
    document.getElementById("e-mail").innerText = email.toLowerCase();
    let userName = JSON.parse(localStorage.getItem("userName"));
    document.getElementById("user-name-font").innerText = userName;

    
    if (action) {
      document.getElementById("action").classList.add("no-display");
      document.getElementById("action").innerText = "";
    } else {
      document.getElementById("action").innerText = "Action";
      document.getElementById("action").classList.remove("no-display");
    }
    if (drama) {
      document.getElementById("drama").classList.add("no-display");
      document.getElementById("drama").innerText = "";
    } else {
      document.getElementById("drama").innerText = "Drama";
      document.getElementById("drama").classList.remove("no-display");
    }
    if (romance) {
      document.getElementById("romance").classList.add("no-display");
      document.getElementById("romance").innerText = "";
    } else {
      document.getElementById("romance").innerText = "Romance";
      document.getElementById("romance").classList.remove("no-display");
    }
    if (thriller) {
      document.getElementById("thriller").classList.add("no-display");
      document.getElementById("thriller").innerText = "";
    } else {
      document.getElementById("thriller").innerText = "Thriller";
      document.getElementById("thriller").classList.remove("no-display");
    }
    if (western) {
      document.getElementById("western").classList.add("no-display");
      document.getElementById("western").innerText = "";
    } else {
      document.getElementById("western").innerText = "Western";
      document.getElementById("western").classList.remove("no-display");
    }
    if (horror) {
      document.getElementById("horror").classList.add("no-display");
      document.getElementById("horror").innerText = "";
    } else {
      document.getElementById("horror").innerText = "Horror";
      document.getElementById("horror").classList.remove("no-display");
    }
    if (fantasy) {
      document.getElementById("fantasy").classList.add("no-display");
      document.getElementById("fantasy").innerText = "";
    } else {
      document.getElementById("fantasy").innerText = "Fantasy";
      document.getElementById("fantasy").classList.remove("no-display");
    }
    if (music) {
      document.getElementById("music").classList.add("no-display");
      document.getElementById("music").innerText = "";
    } else {
      document.getElementById("music").innerText = "Music";
      document.getElementById("music").classList.remove("no-display");
    }
    if (fiction) {
      document.getElementById("fiction").classList.add("no-display");
      document.getElementById("fiction").innerText = "";
    } else {
      document.getElementById("fiction").innerText = "Fiction";
      document.getElementById("fiction").classList.remove("no-display");
    }
  });

  return (
    <div className="left-profile">
      <div className="personal_weather">
        <div className="personal">
          <img src={Profile} alt="" />
          <div className="personal-info-container">
            <div className="personal-info">
              <p id="n-ame">vinay</p>
              <p id="e-mail">vinay@gmail</p>
              <p id="user-name-font">vinay060</p>
            </div>
            <div className="slected-category">
              <p id="category-line-1">
                {" "}
                <span id="action"></span> <span id="drama"></span>{" "}
                <span id="romance"></span>{" "}
              </p>
              <p id="category-line-2">
                {" "}
                <span id="thriller"></span> <span id="western"></span>{" "}
                <span id="horror"></span>{" "}
              </p>
              <p id="category-line-3">
                {" "}
                <span id="fantasy"></span> <span id="music"></span>{" "}
                <span id="fiction"></span>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="time-weather">
            <div className="date-time">
              <p id="date">{moment().format("DD-MM-YYYY")}</p> 
              <p id="time">{formattedTime}</p>
            </div>
            <div className="weather">
                hey
            </div>
        </div>
      </div>
    </div>
  );
}

export default TopLeftProfile;
