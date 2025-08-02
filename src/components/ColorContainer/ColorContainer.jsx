import { useColor } from "../../store/storeColor";
import "../../styles/ColorContainer.css";
import InputColor from "../ui/inputColor";

export default function ColorContainer() {
  const colorApplication = useColor();

  return (
    <aside>
      <div className="color-container">
        <div className="input-item">
          <label htmlFor="resetButton">Reset Color</label>
          <button
            id="resetButton"
            onClick={() => {
              colorApplication.reset;
              console.log("reset", colorApplication.mainBgColor);
            }}
          >
            Reset
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
            labelText="Main Color"
            handleChange={(e) => colorApplication.applyAllBg(e.target.value)}
          />
        </div>
        <div className="input-item">
          <InputColor
            labelText="Border Color"
            handleChange={(e) =>
              colorApplication.applyAllBorder(e.target.value)
            }
          />
        </div>
      </div>
    </aside>
  );
}
