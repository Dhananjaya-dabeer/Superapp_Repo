import React, { useEffect } from "react";
import Profile from "../images/Profile.png";
import Hills from "../images/hills.png";
import moment from "moment/moment";
import News from "../images/News Header.png";
import { useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from "react-router-dom";
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
  let [second, setSecond] = useState(0);
  let [timeHour, setTimeHour] = useState(0);
  let [hour, setHour] = useState(0);
  let [minute, setMinute] = useState(0);
  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour clock with AM/PM
  };

  const formattedTime = new Intl.DateTimeFormat("en-US", options).format(date);
  // 6739adbda42a4f8cad1180649231808 ---->weather API
  //8e5495af7fea411b8f53dec3953b412b ---->news API
  let weather =
    " https://api.weatherapi.com/v1/current.json?key=6739adbda42a4f8cad1180649231808&q=india&aqi=no";
  let news =
  'https://newsdata.io/api/1/news?apikey=pub_27955fb5e4519b698040f99ac1bb719f07e48&country=in&language=en'
  useEffect(() => {}, [hour, minute, second, timeHour]);
  useEffect(() => {}, [timeHour]);
  useEffect(() => {
    let name = JSON.parse(localStorage.getItem("Name"));
    document.getElementById("n-ame").innerText = name;
    let email = JSON.parse(localStorage.getItem("email"));
    document.getElementById("e-mail").innerText = email.toLowerCase();
    let userName = JSON.parse(localStorage.getItem("userName"));
    document.getElementById("user-name-font").innerText = userName;
    let notes = JSON.parse(localStorage.getItem('notes'));
    document.getElementById("notes").innerText = notes;

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
    fetch(weather)
      .then((result) => {
        result
          .json()

          .then((data) => {
            document.getElementById("weather").innerHTML =
              data.current.condition.text;
            document.getElementById("temp").innerHTML = data.current.temp_c;
            document.getElementById("pressure").innerHTML =
              data.current.pressure_mb;
            document.getElementById("wind").innerHTML = data.current.wind_kph;
            document.getElementById("humidity").innerHTML =
              data.current.humidity;
          });
      })
      .catch((error) => {
        document.getElementById("weather").innerHTML = error;
      });

    fetch(new Request(news))
      .then(function (result) {
        return result.json();
      })
      .then((data) => {
        // console.log(data);
        let title = data.results[0].title;
        let author = data.results[0].source_id;
        // results[0].description
        let description = data.results[0].description;
        console.log(description)
        let time  = data.results[0].pubDate
        document.getElementById('newsdate').textContent = time;
        document.getElementById("center").textContent = title;
        document.getElementById("newscontainer1").textContent = author;

        document.getElementById("newscontainer2").textContent = description;
      })
      .catch(
        (error) => (document.getElementById("newscontainer1").innerHTML = error)
      );
  });

  let handleHourInc = () => {
    document.getElementById("hh").value = ++hour;
  };

  let handleMinInc = () => {
    document.getElementById("mm").value = ++minute;
  };

  let handleSecInc = () => {
    document.getElementById("ss").value = ++second;
  };

  let handleClick = () => {
    // let totalSeconds = hour * 3600 + minute * 60 + second;
    setTimeHour(hour * 3600 + minute * 60 + second);
    console.log(hour);
    console.log(minute);
    console.log(second);


    // setHour(0);
    // setMinute(0);
    // setSecond(0);
  };
      
  return (
    <div className="container">
    <div className="left-profile">
      <div className="personal-weather-notes-timer">
        <div className="personal_weather-notes">
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

            <div>
              <div className="time-weather">
                <div className="date-time">
                  <p id="date">{moment().format("DD-MM-YYYY")}</p>
                  <p id="time">{formattedTime}</p>
                </div>
                <div className="weather">
                  <div className="cloud">
                    <img
                      src="https://cdn.weatherapi.com/weather/64x64/night/116.png"
                      alt=""
                    />
                    <p id="weather"></p>
                  </div>
                  <div className="partician">|</div>
                  <div className="temp-presure">
                    <div>
                      <p id="temp"> </p>
                      <span>°C</span>
                    </div>
                    <div>
                      <p id="pressure"></p> <span>mbar</span>
                    </div>
                    <div>
                      <p>Pressure</p>
                    </div>
                  </div>
                  <div className="partician">|</div>
                  <div className="wind-humidity">
                    <div>
                      <p id="wind"></p> <span>km/h</span>
                      <p>wind</p>
                    </div>
                    <div>
                      <p id="humidity"></p> <span>%</span>
                      <p>humidity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="notes">
            <h2>All notes</h2>
            <textarea
              name="notes"
              id="notes"
              cols="53"
              rows="23"
              onChange={(event) => {
                localStorage.setItem(
                  "notes",
                  JSON.stringify(event.target.value)
                );
              }}
            ></textarea>
          </div>
        </div>
        <div className="timer">
          <div className="circular-timer">
            <CountdownCircleTimer
              isPlaying
              duration={timeHour}
              colors={["#FF6A6A", "#004777", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[60, 30, 15, 10, 5]}
              // onComplete={handleTimer}
            >
              {({ remainingTime }) => {
                const hours = Math.floor(remainingTime / 3600);
                const minutes = Math.floor((remainingTime % 3600) / 60);
                const seconds = remainingTime % 60;

                return `${hours}:${minutes}:${seconds}`;
              }}
            </CountdownCircleTimer>
          </div>
          <div className="arrows">
            <div className="upperarrow">
              <div className="arrow-u1">
                <p id="arrow-u1" onClick={handleHourInc}>
                  Hours
                </p>
              </div>
              <div className="arrow-u2">
                <p id="arrow-u2" onClick={handleMinInc}>
                  Minutes
                </p>
              </div>
              <div className="arrow-u3">
                <p id="arrow-u3" onClick={handleSecInc}>
                  Seconds
                </p>
              </div>
            </div>
            <div className="time">
              <div className="hh">
                <input
                  id="hh"
                  type="number"
                  min="0"
                  value={hour}
                  onChange={(e) => {
                    setHour(parseInt(e.target.value));
                  }}
                />
              </div>
              <div className="mm">
                <input
                  id="mm"
                  type="number"
                  min="0"
                  value={minute}
                  onChange={(e) => setMinute(parseInt(e.target.value))}
                />
              </div>
              <div className="ss">
                <input
                  id="ss"
                  type="number"
                  min="0"
                  value={second}
                  onChange={(e) => setSecond(parseInt(e.target.value))}
                />
              </div>
            </div>

            <button onClick={handleClick}>START</button>
          </div>
        </div>
      </div>
      <div className="news">
        <div className="img">
          <img id="right-hlls" src={Hills} alt="" />
          <div className="header-img">
            <img id="news-header" src={News} alt="" />
            <div className="center">
              <p id="center"></p>
              <p id="newsdate">{moment().format("DD-MM-YYYY")} &nbsp;| 8:00 AM </p>
            </div>
          </div>

          <div className="newscontainer">
            <p id="author">
              Author :<span id="newscontainer1"></span>
            </p>
            <p id="newscontainer2"></p>
          </div>
        </div>
      </div>
    </div>
      <Link id="browse" to={'/Category/Profile/Entertainment'}>Browse</Link>
    </div>
  );
}

export default TopLeftProfile;
