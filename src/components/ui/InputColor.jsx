import { useState } from "react";
import { AiOutlineNumber } from "react-icons/ai";
import { IoIosColorPalette } from "react-icons/io";
import { useColor } from "../../store/storeColor";
import "../../styles/inputColor.css";

export default function InputColor(
  { labelText = "Color", handleChange },
  props
) {
  const [inputType, setInputType] = useState("text");
  const applyBorderColor = useColor((state) => state.applyAllBorder);

  // console.log("applyBorderColor", applyBorderColor);
  return (
    <>
      <label htmlFor="mainBgColor">{labelText}</label>
      <div className="inputBlock">
        <input
          id="mainBgColor"
          type={inputType}
          placeholder="#ABC456"
          maxLength={7}
          onChange={handleChange}
          // onChange={() => console.log("test")}
          {...props}
        />
        <button
          className="toggleButton"
          onClick={() => {
            setInputType((type) => (type === "text" ? "color" : "text"));
          }}
        >
          {inputType === "text" ? <IoIosColorPalette /> : <AiOutlineNumber />}
        </button>
      </div>
    </>
  );
}
