import { ChangeEvent, useEffect, useState } from "react";
import "./index.css";

type Color = string;

function ColorPicker() {
  const [color, setColor] = useState<Color>(() => {
    const localColor = localStorage.getItem("color");
    if (localColor == null) return "#555555";
    return JSON.parse(localColor as Color);
  });

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(color));
  }, [color]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <main className="dark:bg-neutral-900 h-screen">
      <div className="font-bold text-5xl mb-10 ml-5" style={{ color: color }}>
        Color Picker
      </div>
      <div className="w-full flex justify-center my-4">
        <div className="w-64 h-64" style={{ backgroundColor: color }}></div>
      </div>
      <div className="w-full flex justify-center mb-3 font-bold text-lg">
        <h2 style={{ color: color }}>{color}</h2>
      </div>
      <div className="w-full flex justify-center">
        <label className="dark:text-white text-xl" htmlFor="color-picker">
          Choose a color to display
        </label>
        <input
          name="color-picker"
          className="mx-4"
          type="color"
          id="color-picker"
          value={color}
          onChange={handleChange}
        />
      </div>
    </main>
  );
}

export default ColorPicker;
