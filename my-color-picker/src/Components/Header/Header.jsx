
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles["header"]}>
      <div className={styles["header-title"]}>
        <h1>Color Picker App</h1>
      </div>
      <nav className={styles["nav-menu"]}>
        <ul>
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/colordesign'}>Color Schemes</Link></li>
          <li><Link to={'/colornames'}>Color names</Link></li>
          <li><Link to={'/colorshades'}>Color Shades</Link></li>
          <li><Link to={'/gradientpicker'}>Color Gradient</Link></li>
        </ul>
      </nav>
    </header> 
  );
};

export default Header;
