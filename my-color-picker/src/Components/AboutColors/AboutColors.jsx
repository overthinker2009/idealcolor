import styles from './AboutColor.module.css';

const AboutColors = () => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>What are HTML Color Codes?</h1>
      <p className={styles['description']}>
        Color codes are ways of representing the colors we see every day in a format that a computer can interpret and display. Commonly used in websites and other software applications, there are a variety of formats, including hex color codes, RGB and HSL values, and HTML color names.
      </p>
      <section className={styles['section']}>
        <h2 className={styles['sectionTitle']}>Hex Color Codes</h2>
        <p>
          The most popular are hex color codes; these are six hexadecimal numbers (representing the contrast of six digits), with each pair of characters in the hex code, representing the intensity of red, green, and blue in the color respectively.
        </p>
        <div className={styles['colorBox']} style={{ backgroundColor: '#FFFFFF' }}>
          <span>#FFFFFF</span>
        </div>
        <p>
          Hex code values range from 00, which is the lowest intensity of a color, to FF, which represents the highest intensity. The color white, for example, is made by mixing each of the three primary colors at their full intensity, resulting in the hex color code of <strong>#FFFFFF</strong>.
        </p>
      </section>

      <section className={styles['section']}>
        <h2 className={styles['sectionTitle']}>Black</h2>
        <div className={styles['colorBox']} style={{ backgroundColor: '#000000' }}>
          <span>#000000</span>
        </div>
        <p>
          Black, the absence of any color on a screen display, is the complete opposite, with each color displayed at their lowest possible intensity and a hex code of <strong>#000000</strong>.
        </p>
      </section>

      <section className={styles['section']}>
        <h2 className={styles['sectionTitle']}>Understand the Basics</h2>
        <p>
          Understanding the basics of hex color codes means we can create graphic colors very easily, since they contrast of equal intensities of each color:
        </p>
        <div className={styles['colorRow']}>
          <div className={styles['colorBox']} style={{ backgroundColor: '#454545' }}>
            <span>#454545</span>
          </div>
          <div className={styles['colorBox']} style={{ backgroundColor: '#999999' }}>
            <span>#999999</span>
          </div>
        </div>
      </section>

      <section className={styles['section']}>
        <h2 className={styles['sectionTitle']}>The Three Primary Colors</h2>
        <p>
          The three primary colors, red, green, and blue, are made by mixing the highest intensity of the desired color with the lowest intensities of the other colors:
        </p>
        <div className={styles['colorRow']}>
          <div className={styles['colorBox']} style={{ backgroundColor: '#FF0000' }}>
            <span>#FF0000</span>
          </div>
          <div className={styles['colorBox']} style={{ backgroundColor: '#00FF00' }}>
            <span>#00FF00</span>
          </div>
          <div className={styles['colorBox']} style={{ backgroundColor: '#0000FF' }}>
            <span>#0000FF</span>
          </div>
        </div>
      </section>

      <section className={styles['section']}>
        <h2 className={styles['sectionTitle']}>Modern Color Possibilities</h2>
        <p>
          With modern browsers supporting the full spectrum of 24-bit color, there are 16,777,216 different color possibilities. Use our color picker to explore all 167 million of them, or if that&apos;s too many, check our color charts for a selection of palettes focused on design, Material design, and web-safe colors.
        </p>
      </section>
    </div>
  );
};

export default AboutColors;
