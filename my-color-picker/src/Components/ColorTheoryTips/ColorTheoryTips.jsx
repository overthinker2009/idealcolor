
import styles from './ColorTheoryTips.module.css';

const ColorTheoryInfo = () => {
  return (
    <div className={styles['container']}>
      <h1 className={styles['title']}>Understanding Color Creation and Naming</h1>

      <section className={styles['section']}>
        <h2 className={styles['subtitle']}>How Colors Are Created</h2>
        <ul className={styles['list']}>
          <li>
            <strong>Additive Color Mixing:</strong> Combining red, green, and blue light (RGB) to create new colors.
          </li>
          <li>
            <strong>Subtractive Color Mixing:</strong> Mixing pigments or dyes using cyan, magenta, yellow, and black (CMYK).
          </li>
          <li>
            <strong>Color Models:</strong> Models like RGB and CMYK define colors based on different parameters.
          </li>
          <li>
            <strong>Spectral Colors:</strong> Colors produced by the refraction of light, defined by their wavelength.
          </li>
        </ul>
      </section>

      <section className={styles['section']}>
        <h2 className={styles['subtitle']}>How Color Names Are Created</h2>
        <ul className={styles['list']}>
          <li>
            <strong>Descriptive Names:</strong> Colors named after common objects or phenomena (e.g., &quot;sky blue&quot;).
          </li>
          <li>
            <strong>Historical and Cultural Influences:</strong> Names based on historical figures or traditional pigments (e.g., &quot;Cadmium yellow&quot;).
          </li>
          <li>
            <strong>Creative Naming:</strong> Unique names given by artists to evoke emotions (e.g., &quot;midnight&quot;).
          </li>
          <li>
            <strong>Standardization:</strong> Organizations like Pantone assign unique codes and names to ensure consistency.
          </li>
          <li>
            <strong>Color Psychology:</strong> Names that reflect psychological attributes (e.g., &quot;tranquil teal&quot;).
          </li>
        </ul>
      </section>

      <footer className={styles['footer']}>
        <p>Understanding color theory can enhance your design projects!</p>
      </footer>
    </div>
  );
};

export default ColorTheoryInfo;
