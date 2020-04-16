import React from "react";
// import * as routes from "../routes/index.js";
import Avatar from "../routes/Avatar";
import Name from "../routes/Name";
import Email from "../routes/Email";
import SaveBtn from "../routes/SaveBtn";
import style from "../index.css";

// const names = ["Avatar", "Name", "Email", "SaveBtn"];


class App extends React.Component {
  render = () => {
    return (
      <div>
        <Avatar style={style} />
        <Name style={style} />
        <Email style={style} />
        <SaveBtn style={style} />
      </div>
    );
  };
}

export default App;
