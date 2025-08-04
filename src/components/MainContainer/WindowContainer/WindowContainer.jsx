import { useColor } from "../../../store/storeColor";
import "../../../styles/WindowContainer.css";

export default function WindowContainer() {
  const bgColor = useColor((state) => state.window.bgColor);
  const borderColor = useColor((state) => state.window.borderColor);
  const textColor = useColor((state) => state.window.textColor);

  return (
    <div className="cardContainer">
      <div
        className="cardBlock"
        style={{
          borderColor: borderColor,
          color: textColor,
          backgroundColor: bgColor,
        }}
      >
        Card
      </div>
    </div>
  );
}
