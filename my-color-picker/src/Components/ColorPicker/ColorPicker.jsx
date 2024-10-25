import { useState, useRef, useEffect } from "react";
import PredefinedPalette from "../PredifinedPalette/PredefinedPallette";
import styles from "./ColorPicker.module.css";
import { Link } from "react-router-dom";

import Footer from "../Footer/Footer";
import chroma from "chroma-js";
import AboutColors from "../AboutColors/AboutColors";
import ColorTheoryTips from "../ColorTheoryTips/ColorTheoryTips";
const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff");
  const [palette, setPalette] = useState([]);
  const [history, setHistory] = useState([]);
  const [uploadedImage, setUploadedImage] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!history.includes(color)) {
      setHistory((prev) => [...new Set([...prev.slice(-4), color])]);
    }
  }, [color, history]);

  const hexToRGB = (hex) => {
    const [r, g, b] = [1, 3, 5].map((start) =>
      parseInt(hex.slice(start, start + 2), 16)
    );
    return `${r}, ${g}, ${b}`;
  };

  const hexToHSL = (H) => {
    let [r, g, b] = [1, 3, 5].map(
      (start) => parseInt(H.slice(start, start + 2), 16) / 255
    );
    let [cmax, cmin] = [Math.max(r, g, b), Math.min(r, g, b)];
    let delta = cmax - cmin;
    let l = (cmax + cmin) / 2;
    let h = 0,
      s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    if (delta !== 0) {
      if (cmax === r) h = ((g - b) / delta) % 6;
      else if (cmax === g) h = (b - r) / delta + 2;
      else h = (r - g) / delta + 4;
      h = Math.round(h * 60);
    }
    return `${h < 0 ? h + 360 : h}, ${(s * 100).toFixed(1)}%, ${(
      l * 100
    ).toFixed(1)}%`;
  };

  const handleColorChange = (e) => setColor(e.target.value);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => alert(`Copied: ${text}`),
      () => alert("Failed to copy!")
    );
  };

  const addToPalette = () => {
    if (!palette.includes(color)) setPalette((prev) => [...prev, color]);
  };

  const copyAllFormats = () => {
    const allFormats = `HEX: ${color}, RGB: ${hexToRGB(color)}, HSL: ${hexToHSL(
      color
    )}`;
    copyToClipboard(allFormats);
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          extractDominantColors(img);
          const imgElement = document.querySelector(
            `.${styles["uploaded-image"]}`
          );
          imgElement.classList.add("show");
        };
      };
      reader.readAsDataURL(file);
    }
  };

  const colo = [
    { name: "Red", hex: "#FF0000" },
    { name: "Green", hex: "#008000" },
    { name: "Blue", hex: "#0000FF" },
    { name: "Yellow", hex: "#FFFF00" },
  ];

  const extractDominantColors = (image) => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.drawImage(image, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;
    const colorCount = {};

    for (let i = 0; i < data.length; i += 4) {
      const color = `#${(
        (1 << 24) +
        (data[i] << 16) +
        (data[i + 1] << 8) +
        data[i + 2]
      )
        .toString(16)
        .slice(1)}`;
      colorCount[color] = (colorCount[color] || 0) + 1;
    }

    const sortedColors = Object.keys(colorCount).sort(
      (a, b) => colorCount[b] - colorCount[a]
    );
    setPalette(sortedColors.slice(0, 3));
    setColor(sortedColors[0]);
  };

  const downloadPalette = () => {
    const paletteData = {
      colors: palette,
      timestamp: new Date(),
    };
    const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(paletteData)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "color-palette.json";
    link.click();
  };

  const handleColorSelect = (selectedColor) => {
    setColor(selectedColor);
  };
  const generateShades = (color, count = 10) => {
    return chroma.scale([color, "white"]).mode("lab").colors(count);
  };

  return (
    <div className={styles["main-content"]} style={{ backgroundColor: color }}>
      <div className={styles["color-picker"]}>
        <h2 className={styles["color-picker-title"]}>Color Picker</h2>

        <div className={styles["main-section"]}>
          <div
            className={styles["color-display"]}
            style={{ backgroundColor: color }}
          />

          <div className={styles["color-details"]}>
            <div className={styles["color-input"]}>
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className={styles["color-wheel"]}
                aria-label="Select color"
              />
              <input
                type="text"
                value={color}
                onChange={handleColorChange}
                className={styles["hex-input"]}
                maxLength={7}
                aria-label="Hex color code"
              />
            </div>
            <div className={styles["format-container"]}>
              <div
                className={styles["format-item"]}
                onClick={() => copyToClipboard(color)}
              >
                <span>HEX</span>
                <span>{color}</span>
              </div>
              <div
                className={styles["format-item"]}
                onClick={() => copyToClipboard(hexToRGB(color))}
              >
                <span>RGB</span>
                <span>{hexToRGB(color)}</span>
              </div>
              <div
                className={styles["format-item"]}
                onClick={() => copyToClipboard(hexToHSL(color))}
              >
                <span>HSL</span>
                <span>{hexToHSL(color)}</span>
              </div>
            </div>
            <button className={styles["button"]} onClick={addToPalette}>
              Add to Palette
            </button>
            <button className={styles["button"]} onClick={copyAllFormats}>
              Copy All Formats
            </button>
          </div>
        </div>

        <section className={styles["section-title"]}>History</section>
        <div className={styles["color-grid"]}>
          {history.map((color) => (
            <div
              key={color}
              className={styles["color-swatch"]}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>

        <section className={styles["section-title"]}>Palette</section>
        <div className={styles["color-grid"]}>
          {palette.map((color) => (
            <div
              key={color}
              className={styles["color-swatch"]}
              style={{ backgroundColor: color }}
              onClick={() => handleColorSelect(color)}
            />
          ))}
        </div>

        <div className={styles["upload-container"]}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className={styles["file-input"]}
          />
          {uploadedImage && (
            <img
              src={uploadedImage}
              alt="Uploaded"
              className={styles["uploaded-image"]}
            />
          )}
        </div>

        <canvas ref={canvasRef} style={{ display: "none" }} />
        <button className={styles["button"]} onClick={downloadPalette}>
          Download Palette
        </button>

        <PredefinedPalette onColorSelect={handleColorSelect} />

        <div className={styles["about"]}>
          <h1>Find Your Perfect Color Scheme</h1>

          <p>
            With flat design, Material design, and web-safe color charts,
            you&apos;re
          </p>
          <p>
            sure to find the perfect color scheme for your website or app – just
          </p>
          <p>keep hunting!</p>

          <div className={styles["palette-selector"]}>
            <Link to={"/colordesign"}>
              <button className={styles["button"]}>Flat</button>
            </Link>
            <Link to={"/colordesign"}>
              <button className={styles["button"]}>Material</button>
            </Link>
            <Link to={"/colordesign"}>
              <button className={styles["button"]}>Web safe </button>
            </Link>
          </div>
        </div>
        <div className={styles["color-names"]}>
          <div className={styles["color"]}>
            <h2>Keep in mind this colors if tou need</h2>
            <p>In this we added 150 colors to memorize </p>
            <div className={styles.colo}>
              <Link className={styles["colorItem"]} to={"/colornames"}>
                Explore More Colors
                <img src="/pointer.svg" />
              </Link>
              <ColorTheoryTips />
            </div>
          </div>
          <div className={styles["color-shades"]}>
            <h2>Explore More Shades</h2>
            <p>Explore more color shades with this library</p>
            <div className={styles.container}>
              {colo.map((color, index) => (
                <Link
                  key={color.name}
                  className={styles["link"]}
                  to={"/colorshades"}
                >
                  <div key={index} className={styles.colorBlock}>
                    <div className={styles.colorName}>{color.name}</div>
                    {generateShades(color.hex).map((shade, idx) => (
                      <div
                        key={idx}
                        className={styles.shade}
                        style={{
                          backgroundColor: shade,
                          color:
                            chroma.contrast(shade, "black") > 4.5
                              ? "black"
                              : "white",
                        }}
                      >
                        {shade}
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <Link className={styles["burger"]} to={"/colorshades"}>
            Color Shades
          </Link>
        </div>
        <AboutColors />
      </div>
      <Footer />
    </div>
  );
};

export default ColorPicker;
