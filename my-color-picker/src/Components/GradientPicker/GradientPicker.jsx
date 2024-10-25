import { useState, useEffect } from "react";
import { HexColorPicker } from "react-colorful";
import styles from "./GradientPicker.module.css";

const GradientPicker = () => {
  const [stops, setStops] = useState([
    { color: "#ff0000", position: 0 },
    { color: "#0000ff", position: 100 },
  ]);
  const [angle, setAngle] = useState(90);
  const [cssCode, setCssCode] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    generateCssCode();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stops, angle]);

  const handleColorChange = (index, newColor) => {
    const newStops = [...stops];
    newStops[index].color = newColor;
    setStops(newStops);
  };

  const handlePositionChange = (index, newPosition) => {
    const newStops = [...stops];
    newStops[index].position = newPosition;
    setStops(newStops);
  };

  const removeColorStop = (index) => {
    setStops(stops.filter((_, i) => i !== index));
  };

  const generateCssCode = () => {
    const code = `linear-gradient(${angle}deg, ${stops
      .map((stop) => `${stop.color} ${stop.position}%`)
      .join(", ")})`;
    setCssCode(code);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`background: ${cssCode}`).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className={styles.gradientPicker}>
      <div className={styles.controls}>
        <div className={styles.angleControl}>
          <label>Angle:</label>
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
          />
          <span>{angle}°</span>
        </div>
        <div className={styles.stopsControl}>
          <div className={styles['stops']}>
            {stops.map((stop, index) => (
              <div key={index} className={styles.colorStop}>
                <HexColorPicker
                  color={stop.color}
                  onChange={(newColor) => handleColorChange(index, newColor)}
                />
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={stop.position}
                  onChange={(e) => handlePositionChange(index, e.target.value)}
                />
                <span>%</span>
                {stops.length > 2 && (
                  <button
                    className={styles.removeButton}
                    onClick={() => removeColorStop(index)}
                  >
                    ✕
                  </button>
                )}
              </div>
            ))}
          </div>
          <div
            className={styles.gradientPreview}
            style={{ background: cssCode }}
          >
            Gradient Preview
          </div>
        </div>
      </div>

      <button className={styles.getCodeButton} onClick={copyToClipboard}>
        Get CSS Code
      </button>
      {copied && (
        <div className={styles.copiedMessage}>CSS code copied!</div>
      )}
      {cssCode && (
        <div className={styles.cssCodeContainer}>
          {`background: ${cssCode}`}
        </div>
      )}
    </div>
  );
};

export default GradientPicker;
