import { useState } from "react";
import ColorPicker from "./ColorPicker";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`${darkMode && "dark"}`}>
      <ColorPicker />
      <button
        onClick={toggleDarkMode}
        className="absolute w-16 h-16 bottom-16 right-16 bg-neutral-900 dark:bg-white rounded-full text-white dark:text-black font-semibold"
      >
        {darkMode ? "LHT" : "DRK"}
      </button>
    </div>
  );
}

export default App;
