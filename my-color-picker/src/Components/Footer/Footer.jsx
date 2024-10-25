import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div>      <div className={styles["about"]}>
    <h1>Find Your Perfect Color Scheme</h1>
    <p>
      Whether you're a designer, developer, or just someone who loves
      colors, our color picker tool helps you explore a vast selection of
      colors to find the perfect scheme for your project. With various
      options available, from flat design colors to Material Design
      standards and even web-safe color charts, you'll have all the tools
      you need to create stunning visuals.
    </p>
    <p>
      Our tool is not just a color picker; it’s a comprehensive color
      management solution. You can easily convert between different color
      formats like HEX, RGB, and HSL, allowing you to work with your
      preferred color code system. The color history and palette features
      let you save colors you've used or liked, ensuring you never lose
      track of a shade you want to revisit.
    </p>
    <p>
      Want to create your own custom palette? Use the upload feature to
      extract colors from an image and build a unique palette tailored to
      your needs. Save time by copying all color formats to your clipboard
      with just one click, making it easy to integrate the colors into your
      website or app.
    </p>
    <p>
      Start experimenting with various palettes, explore predefined color
      sets, and unlock your creative potential. Dive into color theory,
      enhance your projects with professional-grade palettes, and discover
      the endless possibilities that color brings to your work. From
      web-safe colors to trendy design schemes, you’re sure to find the
      ideal color combination to elevate your project's visual appeal.
    </p>
  </div></div>
  )
}

export default Footer