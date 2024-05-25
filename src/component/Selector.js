import { useState } from "react";
import './Selector.css';

const Selector = () => {
  const [color, setColor] = useState("");
  const [hex, setHex] = useState(true);
  const [style, setStyle] = useState(null);

  const generateColorRGB = () => {
    let rgbColor = `${Math.floor(Math.random() * 250)} , ${Math.floor(
      Math.random() * 250
    )} , ${Math.floor(Math.random() * 250)}`;
    console.log(rgbColor);
    setColor(rgbColor);
    setHex(false);
  };

  const generateColorHEX = () => {
    // Generate a random number between 0 and 16777215 (0xFFFFFF)
    const randomColor = Math.floor(Math.random() * 16777215);

    // Convert the random number to a hex string and pad it with leading zeros if necessary
    const hexColor = `${randomColor.toString(16).padStart(6, "0")}`;
    setColor(hexColor);
    setHex(true);
  };

  const generateColor = () => {
    if(hex){
        setStyle(`#${color}`);
    }else{
        setStyle(`rgb(${color})`);
    }
    console.log(style)
  };

  const divStyle = {
    backgroundColor : style
  }

  return (
    <div className="main_container">
      <div className="btn_container">
        <button onClick={() => generateColorRGB()}>Get RBG color</button>
        <button onClick={() => generateColorHEX()}>Get HEX color</button>
        <button onClick={() => generateColor()}>Generate Color</button>
      </div>
      <div className="color_container" style={divStyle}>
        <span>{style}</span>
      </div>
    </div>
  );
};

export default Selector;
