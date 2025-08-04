import { useColor } from "../../store/storeColor";
import "../../styles/colorContainer.css";
import InputColor from "../InputColor";

export default function ColorContainer() {
  const reset = useColor((state) => state.reset);
  const applyAllBg = useColor((state) => state.applyAllBg);
  const applyAllBorder = useColor((state) => state.applyAllBorder);
  const applyAllText = useColor((state) => state.applyAllText);
  const applyMainOnlyBg = useColor((state) => state.applyMainOnlyBg);
  const updateWindowProperty = useColor((state) => state.updateWindowProperty);
  const updateFormProperty = useColor((state) => state.updateFormProperty);

  return (
    <aside>
      <form className="color-container">
        <div className="color-header">
          <h2>Update Color</h2>
          <p>Select you prefered color below</p>
        </div>
        <div className="form-container">
          <fieldset>
            <legend>All</legend>
            <div className="input-item">
              <InputColor
                labelText="Background"
                handleChange={(e) => applyAllBg(e.target.value)}
              />
            </div>
            <div className="input-item">
              <InputColor
                labelText="Border"
                handleChange={(e) => applyAllBorder(e.target.value)}
              />
            </div>
            <div className="input-item">
              <InputColor
                labelText="Text"
                handleChange={(e) => applyAllText(e.target.value)}
              />
            </div>
            <div className="input-item">
              <InputColor
                labelText="Background Main Only"
                handleChange={(e) => applyMainOnlyBg(e.target.value)}
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Card Window</legend>
            <div className="input-item">
              <InputColor
                labelText="Background"
                handleChange={(e) =>
                  updateWindowProperty("bgColor", e.target.value)
                }
              />
            </div>

            <div className="input-item">
              <InputColor
                labelText="Border"
                handleChange={(e) =>
                  updateWindowProperty("borderColor", e.target.value)
                }
              />
            </div>

            <div className="input-item">
              <InputColor
                labelText="Text"
                handleChange={(e) =>
                  updateWindowProperty("textColor", e.target.value)
                }
              />
            </div>
          </fieldset>
          <fieldset>
            <legend>Form</legend>
            <div className="input-item">
              <InputColor
                labelText="Background"
                handleChange={(e) =>
                  updateFormProperty("bgColor", e.target.value)
                }
              />
            </div>

            <div className="input-item">
              <InputColor
                labelText="Border"
                handleChange={(e) =>
                  updateFormProperty("borderColor", e.target.value)
                }
              />
            </div>

            <div className="input-item">
              <InputColor
                labelText="Text"
                handleChange={(e) =>
                  updateFormProperty("textColor", e.target.value)
                }
              />
            </div>
            <div className="input-item">
              <InputColor
                labelText="Input Background Color"
                handleChange={(e) =>
                  updateFormProperty("inputBgColor", e.target.value)
                }
              />
            </div>
            <div className="input-item">
              <InputColor
                labelText="Input Border"
                handleChange={(e) =>
                  updateFormProperty("inputBorderColor", e.target.value)
                }
              />
            </div>
            <div className="input-item">
              <InputColor
                labelText="Input Text"
                handleChange={(e) =>
                  updateFormProperty("inputTextColor", e.target.value)
                }
              />
            </div>
            <div className="input-item">
              <InputColor
                labelText="Input Button"
                handleChange={(e) =>
                  updateFormProperty("inputButtonColor", e.target.value)
                }
              />
            </div>
          </fieldset>
        </div>
        <div className="color-footer">
          <button
            type="reset"
            id="resetButton"
            onClick={() => {
              reset();
            }}
          >
            Reset All
          </button>
        </div>
      </form>
    </aside>
  );
}
