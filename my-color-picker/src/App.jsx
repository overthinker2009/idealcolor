import { Route, Routes } from "react-router-dom";
import "./App.css";
import ColorDesign from "./Components/ColorDesig/ColorDesign";
import ColorNames from "./Components/ColorNames/ColorNames";
import ColorShades from "./Components/ColorShades/ColorShades";
import FormatConverter from "./Components/Format/FormatConverter";
import ScrollToTop from "./Components/Scroll.jsx";
import Home from "./Pages/Home";
import Header from "./Components/Header/Header";
import GradientPicker from "./Components/GradientPicker/GradientPicker.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colordesign" element={<ColorDesign />} />
          <Route path="/colornames" element={<ColorNames />} />
          <Route path="/colorshades" element={<ColorShades />} />
          <Route path="/colorformatcjanger" element={<FormatConverter />} />
          <Route path="/gradientpicker" element={<GradientPicker />} />
        </Routes>
    </div>
  );
}

export default App;
