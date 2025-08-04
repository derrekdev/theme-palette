import { useState } from "react";
import { AiOutlineNumber } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import "../../styles/inputColor.css";

export default function InputColor(
  { labelText = "Color", handleChange },
  props
) {
  const [inputType, setInputType] = useState("color");

  const num = (Math.random().toPrecision(3) * 10).toString();

  return (
    <>
      <label htmlFor={`color-${num}`}>{labelText}</label>
      <div className="inputBlock">
        <input
          id={`color-${num}`}
          type={inputType}
          placeholder="#ABC456"
          maxLength={7}
          onChange={handleChange}
          {...props}
        />
        <button
          className="toggleButton"
          onClick={(e) => {
            e.preventDefault();
            setInputType((type) => (type === "text" ? "color" : "text"));
          }}
        >
          {inputType === "text" ? <IoIosColorPalette /> : <AiOutlineNumber />}
        </button>
      </div>
    </>
  );
}
