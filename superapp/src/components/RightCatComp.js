import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Action from "../images/Action.png";
import Drama from "../images/Drama.png";
import Romance from "../images/Romance.png";
import Thriller from "../images/Thriller.png";
import Western from "../images/Western.png";
import Horror from "../images/Horror.png";
import Fantasy from "../images/Fantasy.png";
import Music from "../images/Music.png";
import Fiction from "../images/FIction.png";
import { useState } from "react";
function RightCatComp() {
  let [action, setAction] = useState(true);
  let [drama, setDrama] = useState(true);
  let [romance, setRomance] = useState(true);
  let [thriller, setThriller] = useState(true);
  let [western, setWestern] = useState(true);
  let [horror, setHorror] = useState(true);
  let [fantasy, setFantasy] = useState(true);
  let [music, setMusic] = useState(true);
  let [fiction, setFiction] = useState(true);

  let [selected, setSelected] = useState([]);

  useEffect(() => {
    if (action) {
      document.getElementById("chip1").classList.add("no-display");
    } else {
      document.getElementById("chip1").classList.remove("no-display");
    }
    if (drama) {
      document.getElementById("chip2").classList.add("no-display");
    } else {
      document.getElementById("chip2").classList.remove("no-display");
    }
    if (romance) {
      document.getElementById("chip3").classList.add("no-display");
    } else {
      document.getElementById("chip3").classList.remove("no-display");
    }
    if (thriller) {
      document.getElementById("chip4").classList.add("no-display");
    } else {
      document.getElementById("chip4").classList.remove("no-display");
    }
    if (western) {
      document.getElementById("chip5").classList.add("no-display");
    } else {
      document.getElementById("chip5").classList.remove("no-display");
    }
    if (horror) {
      document.getElementById("chip6").classList.add("no-display");
    } else {
      document.getElementById("chip6").classList.remove("no-display");
    }
    if (fantasy) {
      document.getElementById("chip7").classList.add("no-display");
    } else {
      document.getElementById("chip7").classList.remove("no-display");
    }
    if (music) {
      document.getElementById("chip8").classList.add("no-display");
    } else {
      document.getElementById("chip8").classList.remove("no-display");
    }
    if (fiction) {
      document.getElementById("chip9").classList.add("no-display");
    } else {
      document.getElementById("chip9").classList.remove("no-display");
    }
  }, [
    action,
    drama,
    romance,
    thriller,
    western,
    horror,
    fantasy,
    music,
    fiction,
    selected,
  ]);
  let handleAction = () => {
    if (action) {
      document.getElementById("action").classList.add("imgborder");
      setSelected([...selected, "Action"]);
      setAction(false);
    } else if (!action) {
      document.getElementById("action").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setAction(true);
    }
  };
  let handleDrama = () => {
    if (drama) {
      document.getElementById("drama").classList.add("imgborder");
      setSelected([...selected, "Drama"]);
      setDrama(false);
    } else if (!drama) {
      document.getElementById("drama").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setDrama(true);
    }
  };

  let handleRomance = () => {
    if (romance) {
      document.getElementById("romance").classList.add("imgborder");
      setSelected([...selected, "Romance"]);
      setRomance(false);
    } else {
      document.getElementById("romance").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setRomance(true);
    }
  };

  let handleThriller = () => {
    if (thriller) {
      document.getElementById("thriller").classList.add("imgborder");
      setSelected([...selected, "Thriller"]);
      setThriller(false);
    } else {
      document.getElementById("thriller").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setThriller(true);
    }
  };

  let handleWestern = () => {
    if (western) {
      document.getElementById("western").classList.add("imgborder");
      setSelected([...selected, "Western"]);
      setWestern(false);
    } else {
      document.getElementById("western").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setWestern(true);
    }
  };

  let handleHorror = () => {
    if (horror) {
      document.getElementById("horror").classList.add("imgborder");
      setSelected([...selected, "Horror"]);
      setHorror(false);
    } else {
      document.getElementById("horror").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setHorror(true);
    }
  };

  let handleFantasy = () => {
    if (fantasy) {
      document.getElementById("fantasy").classList.add("imgborder");
      setSelected([...selected, "Fantasy"]);
      setFantasy(false);
    } else {
      document.getElementById("fantasy").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setFantasy(true);
    }
  };

  let handleMusic = () => {
    if (music) {
      document.getElementById("music").classList.add("imgborder");
      setSelected([...selected, "Music"]);
      setMusic(false);
    } else {
      document.getElementById("music").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setMusic(true);
    }
  };

  let handleFiction = () => {
    if (fiction) {
      document.getElementById("fiction").classList.add("imgborder");
      setSelected([...selected, "Fiction"]);
      setFiction(false);
    } else {
      document.getElementById("fiction").classList.remove("imgborder");
      selected.pop();
      document.getElementById("profile-page").classList.remove("nextpage-btn");
      setFiction(true);
    }
  };
  let handleChip1 = () => {
    document.getElementById("chip1").classList.add("no-display");
    document.getElementById("action").classList.remove("imgborder");
    selected.pop();
    setAction(true);
  };
  let handleChip2 = () => {
    document.getElementById("chip2").classList.add("no-display");
    document.getElementById("drama").classList.remove("imgborder");
    selected.pop();
    setDrama(true);
  };
  let handleChip3 = () => {
    document.getElementById("chip3").classList.add("no-display");
    document.getElementById("romance").classList.remove("imgborder");
    selected.pop();
    setRomance(true);
  };
  let handleChip4 = () => {
    document.getElementById("chip4").classList.add("no-display");
    document.getElementById("thriller").classList.remove("imgborder");
    selected.pop();
    setThriller(true);
  };
  let handleChip5 = () => {
    document.getElementById("chip5").classList.add("no-display");
    document.getElementById("western").classList.remove("imgborder");
    selected.pop();
    setWestern(true);
  };
  let handleChip6 = () => {
    document.getElementById("chip6").classList.add("no-display");
    document.getElementById("horror").classList.remove("imgborder");
    selected.pop();
    setHorror(true);
  };
  let handleChip7 = () => {
    document.getElementById("chip7").classList.add("no-display");
    document.getElementById("fantasy").classList.remove("imgborder");
    selected.pop();
    setFantasy(true);
  };
  let handleChip8 = () => {
    document.getElementById("chip8").classList.add("no-display");
    document.getElementById("music").classList.remove("imgborder");
    selected.pop();
    setMusic(true);
  };
  let handleChip9 = () => {
    document.getElementById("chip9").classList.add("no-display");
    document.getElementById("fiction").classList.remove("imgborder");
    selected.pop();
    setFiction(true);
  };

  let handleClick = () => {
    if (selected.length < 3) {
      document.getElementById("error-msg").innerHTML =
        "&#9888; Minimum 3 categories required";
      document.getElementById("profile-page").classList.remove("nextpage-btn");
    } else {
      document.getElementById("error-msg").innerHTML = "";
      if (
        action ||
        drama ||
        romance ||
        thriller ||
        western ||
        horror ||
        fantasy ||
        music ||
        fiction
      ) {
        localStorage.setItem("Action", JSON.stringify(action));
        localStorage.setItem("drama", JSON.stringify(drama));
        localStorage.setItem("romance", JSON.stringify(romance));
        localStorage.setItem("thriller", JSON.stringify(thriller));
        localStorage.setItem("western", JSON.stringify(western));
        localStorage.setItem("horror", JSON.stringify(horror));
        localStorage.setItem("fantasy", JSON.stringify(fantasy));
        localStorage.setItem("music", JSON.stringify(music));
        localStorage.setItem("fiction", JSON.stringify(fiction));
        document.getElementById("profile-page").classList.add("nextpage-btn");
      } else {
      }
    }
  };
  return (
    <div className="imgcat">
      <div className="imgline1">
        <img id="action" onClick={handleAction} src={Action} alt="" />
        <img id="drama" onClick={handleDrama} src={Drama} alt="" />
        <img id="romance" onClick={handleRomance} src={Romance} alt="" />
      </div>

      <div className="imgline2">
        <img id="thriller" onClick={handleThriller} src={Thriller} alt="" />
        <img id="western" onClick={handleWestern} src={Western} alt="" />
        <img id="horror" onClick={handleHorror} src={Horror} alt="" />
      </div>

      <div className="imgline3">
        <img id="fantasy" onClick={handleFantasy} src={Fantasy} alt="" />
        <img id="music" onClick={handleMusic} src={Music} alt="" />
        <img id="fiction" onClick={handleFiction} src={Fiction} alt="" />
      </div>
      <div className="chiplinecontainer">
        <p className="chipline1">
          <span id="chip1">
            Action <span onClick={handleChip1}>&#10007;</span>
          </span>{" "}
          <span id="chip2">
            Drama<span onClick={handleChip2}>&#10007;</span>
          </span>{" "}
          <span id="chip3">
            Romance<span onClick={handleChip3}>&#10007;</span>
          </span>
        </p>
        <p className="chipline2">
          <span id="chip4">
            Thriller <span onClick={handleChip4}>&#10007;</span>{" "}
          </span>
          <span id="chip5">
            Western<span onClick={handleChip5}>&#10007; </span>{" "}
          </span>{" "}
          <span id="chip6">
            Horror <span onClick={handleChip6}>&#10007;</span>{" "}
          </span>
        </p>
        <p className="chipline3">
          <span id="chip7">
            Fantasy <span onClick={handleChip7}>&#10007;</span>{" "}
          </span>{" "}
          <span id="chip8">
            Music <span onClick={handleChip8}>&#10007;</span>{" "}
          </span>{" "}
          <span id="chip9">
            Fiction <span onClick={handleChip9}>&#10007;</span>{" "}
          </span>
        </p>
        <p id="error-msg"></p>
      </div>
      <button className="nextpage-btn" onClick={handleClick}>
        Next Page
      </button>
      <Link to={"/Category/Profile"} className="no-display" id="profile-page">
        Next Page
      </Link>
    </div>
  );
}

export default RightCatComp;
