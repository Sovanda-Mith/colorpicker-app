import { ChangeEvent, useEffect, useState } from "react";
import "./index.css";

type Color = string;

function ColorPicker() {
  const [color, setColor] = useState<Color>(() => {
    const localColor = localStorage.getItem("color");
    return localColor ? JSON.parse(localColor) : "#555555";
  });

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(color));
  }, [color]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 text-neutral-900 dark:text-white transition-colors duration-300">
      <div className="bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-2xl w-[22rem] flex flex-col items-center space-y-6 transition-all duration-300">
        <h1 className="text-4xl font-bold" style={{ color }}>
          🎨 Color Picker
        </h1>

        <div
          className="w-40 h-40 rounded-full shadow-md border-4 transition-all duration-300"
          style={{ backgroundColor: color }}
        />

        <h2 className="text-lg font-semibold" style={{ color }}>
          {color}
        </h2>

        <div className="flex flex-col items-center space-y-2 w-full">
          <label htmlFor="color-picker" className="text-lg">
            Choose your color
          </label>
          <input
            id="color-picker"
            type="color"
            value={color}
            onChange={handleChange}
            className="w-20 h-10 rounded-lg border-none cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
}

export default ColorPicker;
