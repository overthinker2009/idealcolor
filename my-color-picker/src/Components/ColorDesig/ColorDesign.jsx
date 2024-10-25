
import { useState } from "react";
import styles from "./ColorDesign.module.css";
import Footer from "../Footer/Footer";
import palettes from "../../JSON/palletes.json"; 

const ColorDesign = () => {
  const [currentPalette, setCurrentPalette] = useState(palettes.flat);
  const [chosenColor, setChosenColor] = useState(null);

  const handlePaletteChange = (palette) => {
    setCurrentPalette(palettes[palette]);
    setChosenColor(null); 
  };

  const handleColorClick = (color) => {
    setChosenColor(color);
  };

  return (
    <div className={styles["content"]}>
      <div className={styles["color-picker"]}>
        <header className={styles["color-picker-header"]}>
          <h1>Color Charts</h1>
          <div className={styles["palette-selector"]}>
            <button onClick={() => handlePaletteChange("flat")}>Flat Design</button>
            <button onClick={() => handlePaletteChange("material")}>Material Design</button>
            <button onClick={() => handlePaletteChange("webSafe")}>Web Safe</button>
          </div>
        </header>

        <div className={styles["color-chart"]}>
          {currentPalette.map((color, index) => (
            <div
              key={index}
              className={styles["color-swatch"]}
              style={{ backgroundColor: color }}
              onClick={() => handleColorClick(color)}
            />
          ))}
        </div>

        {chosenColor && (
          <div className={styles["chosen-color"]}>
            <p>Selected Color:</p>
            <div
              className={styles["color-display"]}
              style={{ backgroundColor: chosenColor }}
            />
            <p>{chosenColor}</p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ColorDesign;
