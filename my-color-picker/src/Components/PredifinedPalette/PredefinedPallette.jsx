

import styles from "./PredifinedPalette.module.css";

// eslint-disable-next-line react/prop-types
const PredefinedPalette = ({ onColorSelect }) => {
  const colors = [
    "#FF0000", "#FF7F00", "#FFFF00", "#7FFF00", "#00FF00",
    "#00FF7F", "#00FFFF", "#007FFF", "#0000FF", "#7F00FF",
    "#FF00FF", "#FF007F", "#FFFFFF", "#000000", "#888888",
    "#FFCCCC", "#FFCC99", "#FFFF99", "#CCFF99", "#99FFCC",
    "#99CCFF", "#9999FF", "#CC99FF", "#FF99CC", "#FFE6E6",
  ];

  return (
    <div className={styles.paletteContainer}>
      {colors.map((color, index) => (
        <div
          key={index}
          className={styles.colorSwatch}
          style={{ backgroundColor: color }}
          onClick={() => onColorSelect(color)}
          title={color}
        />
      ))}
    </div>
  );
};

export default PredefinedPalette;
