import { useColor } from "../../../store/storeColor";
import "../../../styles/formContainer.css";

function FormInput({ labelText = "Input", inputType = "text" }) {
  const formColors = useColor((state) => state.form);

  return (
    <div className="form-item">
      <label
        htmlFor={`input${inputType}`}
        style={{ color: formColors.textColor }}
      >
        {labelText}
      </label>
      <input
        id={`input${inputType}`}
        type={inputType}
        style={{
          backgroundColor: formColors.inputBgColor,
          borderColor: formColors.inputBorderColor,
          color: formColors.inputTextColor,
        }}
      />
    </div>
  );
}

export default function FormContainer() {
  const formColors = useColor((state) => state.form);

  return (
    <div className="form-container">
      <form
        style={{
          backgroundColor: formColors.bgColor,
          borderColor: formColors.borderColor,
        }}
      >
        <div className="form-item">
          <span style={{ color: formColors.textColor }}>Form</span>
        </div>
        <FormInput labelText="Input Email" inputType="email" />
        <FormInput labelText="Input Text" inputType="text" />
        <FormInput labelText="Input Password" inputType="password" />
        <FormInput labelText="Input Date" inputType="date" />
        <div className="form-item">
          <input
            type="submit"
            style={{
              backgroundColor: formColors.inputBgColor,
              borderColor: formColors.inputBorderColor,
              color: formColors.inputTextColor,
            }}
          />
        </div>
      </form>
    </div>
  );
}
