import React from "react";
import { Circle } from "better-react-spinkit"

function Loading() {
  return (
    <center style={{ display: "grid", placeItems: "center", height: "70vh" }}>
      <img
        src="https://github.com/Qu4ntumGuy/All_Images/blob/main/Message-PNG-Background.png?raw=true"
        alt=""
        height={150}
        style={{ marginBottom: 20}}
      />
      <Circle color="#327ee3" size={50} />
    </center>
  );
}

export default Loading;
