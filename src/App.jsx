import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Button from "./components/Button";
import Description from "./components/Description";
import MenuIcon from "./components/MenuIcon";
import DiscordLogo from "./components/DiscordLogo";
import menuLogo from "./assets/menu-icon.png";
//import discordBackground from "./assets/discord-background.png"
import BackgroundImage from "./components/BackgroundImage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Header />
      <Description />
      <div className="buttonBox">
      <Button color="buttonBox color1" btnText="Download for Mac" />
      <Button color="buttonBox color2" btnText="Open Discord in your browser" />
      </div>
    <BackgroundImage />
    </div>
  );
}

export default App;
