import { useState } from "react";
import styles from "./ColorNames.module.css";
import colors from "../../JSON/colorNames.json"; // Adjust the path as necessary
import Footer from "../Footer/Footer";

const ColorNames = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredColors, setFilteredColors] = useState(colors);
  const [chosenColor, setChosenColor] = useState(null);
  const [showFilters, setShowFilters] = useState(false); // New state for dropdown visibility

  const [filters, setFilters] = useState({
    dark: false,
    light: false,
    warm: false,
    cool: false,
    neutral: false,
    pastel: false,
    red: false,
    green: false,
    blue: false,
    yellow: false,
  });

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    filterColors(query, filters);
  };

  const handleFilterChange = (filter) => {
    setFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
    filterColors(searchQuery, { ...filters, [filter]: !filters[filter] });
  };

  const filterColors = (query, activeFilters) => {
    const newFilteredColors = colors.filter((color) => {
      const matchesQuery =
        color.name.toLowerCase().includes(query) ||
        color.hex.toLowerCase().includes(query) ||
        color.rgb.toLowerCase().includes(query);

      const matchesFilters =
        (!activeFilters.dark || color.shade === "dark") &&
        (!activeFilters.light || color.shade === "light") &&
        (!activeFilters.warm || color.type === "warm") &&
        (!activeFilters.cool || color.type === "cool") &&
        (!activeFilters.neutral || color.type === "neutral") &&
        (!activeFilters.pastel || color.shade === "pastel") &&
        (!activeFilters.red || color.name.toLowerCase().includes("red")) &&
        (!activeFilters.green || color.name.toLowerCase().includes("green")) &&
        (!activeFilters.blue || color.name.toLowerCase().includes("blue")) &&
        (!activeFilters.yellow || color.name.toLowerCase().includes("yellow"));

      return matchesQuery && matchesFilters;
    });

    setFilteredColors(newFilteredColors);
  };

  const handleColorClick = (color) => {
    setChosenColor(color.hex);
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <div
      className={styles['content']}
      style={{ backgroundColor: chosenColor }}
    >
      <div className={styles['searchBar']}>
        <input
          type="text"
          placeholder="Search colors..."
          value={searchQuery}
          onChange={handleSearchChange}
          className={styles['searchInput']}
        />
      </div>

      <div className={styles['filters']}>
        <button
          className={styles['filterToggleButton']}
          onClick={toggleFilters}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        <div
          className={`${styles['filterOptions']} ${showFilters ? styles['show'] : ''}`}
        >
          {Object.keys(filters).map((filter) => (
            <label key={filter} className={styles['filterLabel']}>
              <input
                type="checkbox"
                checked={filters[filter]}
                onChange={() => handleFilterChange(filter)}
              />
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </label>
          ))}
        </div>
      </div>

      <div className={styles['colorGrid']}>
        {filteredColors.map((color, index) => (
          <div
            key={index}
            className={styles['colorItem']}
            onClick={() => handleColorClick(color)}
          >
            <div
              className={styles['colorBox']}
              style={{ backgroundColor: color.hex }}
            />
            <div className={styles['colorDetails']}>
              <span className={styles['colorName']}>{color.name}</span>
              <span className={styles['colorHex']}>{color.hex}</span>
              <span className={styles['colorRgb']}>{color.rgb}</span>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ColorNames;
