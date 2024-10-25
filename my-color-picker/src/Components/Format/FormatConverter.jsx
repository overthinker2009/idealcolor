import { useState } from 'react';
import chroma from 'chroma-js';
import styles from './FromatConverter.module.css';

const FormatConverter = () => {
  const [hex, setHex] = useState('#');
  const [rgb, setRgb] = useState('');
  const [hsl, setHsl] = useState('');

  const handleHexChange = (e) => {
    const newHex = e.target.value;
    setHex(newHex);
    if (chroma.valid(newHex)) {
      const rgbValue = chroma(newHex).rgb();
      const hslValue = chroma(newHex).hsl();
      setRgb(`rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`);
      setHsl(`hsl(${hslValue[0]}, ${hslValue[1]}%, ${hslValue[2]}%)`);
    } else {
      setRgb('');
      setHsl('');
    }
  };

  const handleRgbChange = (e) => {
    const newRgb = e.target.value.replace(/[^0-9,]/g, '').split(',');
    if (newRgb.length === 3) {
      const [r, g, b] = newRgb.map(Number);
      const hexValue = chroma.rgb(r, g, b).hex();
      const hslValue = chroma.rgb(r, g, b).hsl();
      setHex(hexValue);
      setRgb(`rgb(${r}, ${g}, ${b})`);
      setHsl(`hsl(${hslValue[0]}, ${hslValue[1]}%, ${hslValue[2]}%)`);
    } else {
      setHex('');
      setHsl('');
    }
  };

  const handleHslChange = (e) => {
    const newHsl = e.target.value.replace(/[^0-9,]/g, '').split(',');
    if (newHsl.length === 3) {
      const [h, s, l] = newHsl.map(Number);
      const hexValue = chroma.hsl(h, s / 100, l / 100).hex();
      const rgbValue = chroma.hsl(h, s / 100, l / 100).rgb();
      setHex(hexValue);
      setRgb(`rgb(${rgbValue[0]}, ${rgbValue[1]}, ${rgbValue[2]})`);
      setHsl(`hsl(${h}, ${s}%, ${l}%)`);
    } else {
      setHex('');
      setRgb('');
    }
  };

  return (
    <div className={styles.converterContainer}>
      <div className={styles.converter}>
        <h2>Color Format Converter</h2>
        <div className={styles.inputGroup}>
          <label htmlFor="hex">HEX:</label>
          <input
            type="text"
            id="hex"
            value={hex}
            onChange={handleHexChange}
            placeholder="#FFFFFF"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="rgb">RGB:</label>
          <input
            type="text"
            id="rgb"
            value={rgb}
            onChange={handleRgbChange}
            placeholder="rgb(255, 255, 255)"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="hsl">HSL:</label>
          <input
            type="text"
            id="hsl"
            value={hsl}
            onChange={handleHslChange}
            placeholder="hsl(0, 0%, 100%)"
          />
        </div>
      </div>
    </div>
  );
};

export default FormatConverter;
