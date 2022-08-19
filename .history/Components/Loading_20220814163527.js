import React from "react";
import { Circle } from "better-react-spinkit"

function Loading() {
  return (
    <center>
      <img
        src="https://github.com/Qu4ntumGuy/All_Images/blob/main/Message-PNG-Background.png?raw=true"
        alt=""
        height={150}
        style={{ marginBottom: 10}}
      />
      <Circle color="black" size={70} />
    </center>
  );
}

export default Loading;
