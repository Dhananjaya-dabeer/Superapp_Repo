import Images from "../images/Partyimg.png";
import React from "react";

function Imagecomp() {
  return (
    <div className="partyimg">
      <img src={Images} alt="" />
      <h1>
        Discover new things on
        <br /> Superapp
      </h1>
    </div>
  );
}

export default Imagecomp;
