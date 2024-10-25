import { useState } from "react";
import chroma from "chroma-js";
import styles from "./ColorShades.module.css";
import colors from "../../JSON/colorShades.json";
import Footer from "../Footer/Footer";

const generateShades = (color, count = 10) => {
  return chroma.scale([color, "white"]).mode("lab").colors(count);
};

const ColorShades = () => {
  const [chosenColor, setChosenColor] = useState(null);
  const [inputColor, setInputColor] = useState("");

  const handleShadeClick = (shade) => {
    setChosenColor(shade);
  };

  const handleInputChange = (e) => {
    setInputColor(e.target.value);
  };

  const renderShades = (colorInput) => {
    try {
      const shades = generateShades(colorInput);
      return shades.map((shade, idx) => (
        <div
          key={idx}
          className={styles["shade"]}
          style={{
            backgroundColor: shade,
            color: chroma.contrast(shade, "black") > 4.5 ? "black" : "white",
          }}
          onClick={() => handleShadeClick(shade)}
        >
          {shade}
        </div>
      ));
    } catch (error) {
      console.error("Invalid color input:", error);
      return <div className={styles["error"]}>Invalid color format!</div>;
    }
  };

  return (
    <div className={styles['content']} style={{ backgroundColor: chosenColor }}>
      <div className={styles["header"]}>
        <h1>Color Shades Generator</h1>
        <input
          type="text"
          value={inputColor}
          onChange={handleInputChange}
          placeholder="Enter HEX, RGB, or HSL"
          className={styles["colorInput"]}
        />
      </div>
      <div className={styles["container"]}>
        {inputColor && renderShades(inputColor)}
        {colors.map((color, index) => (
          <div key={index} className={styles["colorBlock"]}>
            <div className={styles["colorName"]}>{color.name}</div>
            {generateShades(color.hex).map((shade, idx) => (
              <div
                key={idx}
                className={styles["shade"]}
                style={{
                  backgroundColor: shade,
                  color: chroma.contrast(shade, "black") > 4.5 ? "black" : "white",
                }}
                onClick={() => handleShadeClick(shade)}
              >
                {shade}
              </div>
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ColorShades;
