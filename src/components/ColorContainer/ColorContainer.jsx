import { useColor } from "../../store/storeColor";
import "../../styles/ColorContainer.css";
import InputColor from "../ui/inputColor";

export default function ColorContainer() {
  const reset = useColor((state) => state.reset);
  const applyAllBg = useColor((state) => state.applyAllBg);
  const applyAllBorder = useColor((state) => state.applyAllBorder);
  const applyAllText = useColor((state) => state.applyAllText);

  return (
    <aside>
      <div className="color-container">
        <div className="input-item">
          <label htmlFor="resetButton">Reset Color</label>
          <button
            id="resetButton"
            onClick={() => {
              reset();
              // console.log("reset", mainBgColor);
            }}
          >
            Reset All
          </button>
        </div>
        {/* <div className="input-item">
          <label htmlFor="mainBgColor">Main Color</label>
          <input
            id="mainBgColor"
            type="color"
            placeholder="ABC456"
            value="#fff000"
          />
        </div> */}
        <div className="input-item">
          <InputColor
            labelText="Background Color"
            handleChange={(e) => applyAllBg(e.target.value)}
          />
        </div>
        <div className="input-item">
          <InputColor
            labelText="Border Color"
            handleChange={(e) => applyAllBorder(e.target.value)}
          />
        </div>
        <div className="input-item">
          <InputColor
            labelText="Text Color"
            handleChange={(e) => applyAllText(e.target.value)}
          />
        </div>
      </div>
    </aside>
  );
}
