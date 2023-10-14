import React, { useState } from 'react';
import './App.css';

const colors = [
  "#FF5733", "#C70039", "#900C3F", "#581845", "#FFC300",
  "#DAF7A6", "#FF5733", "#C70039", "#900C3F",
  "#008000", "#4682B4", "#FF69B4", "#FFFF00"
];

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const changeColor = (color) => {
    setSelectedColor(color);
  };

  const containerStyle = {
    backgroundColor: selectedColor,
  };

  const colorSquares = colors.map((color, index) => (
    <div
      key={index}
      className="color-square"
      style={{ backgroundColor: color }}
      onClick={() => changeColor(color)}
    ></div>
  ));

  return (
    <div className="color-picker">
      <h2>Color Picker</h2>
      <div className="color-container" style={containerStyle}>
        {colorSquares}
        <button className="my-button">Pick a Color</button>
      </div>
    </div>
  );
};

export default ColorPicker;
