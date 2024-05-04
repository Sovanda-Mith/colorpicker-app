import { ChangeEvent, useState } from "react";
import "./index.css";

function ColorPicker() {
  const [color, setColor] = useState("#555555");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h1 className="text-5xl text-red-700 m-5">Color Picker</h1>
      <div className="w-full flex justify-center my-10 ">
        <div className="w-64 h-64" style={{ backgroundColor: color }}>
          <h1 className="flex justify-center items-center h-full text-2xl">
            {color}
          </h1>
        </div>
      </div>
      <div className="w-full flex justify-center border-4">
        <label className="text-xl" htmlFor="color-picker">Choose a color to display</label>
        <input
          name="color-picker"
          className="mx-4"
          type="color"
          id="color-picker"
          value={color}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default ColorPicker;
