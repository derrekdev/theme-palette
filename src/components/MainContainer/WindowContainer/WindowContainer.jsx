import { useColor } from "../../../store/storeColor";
import "../../../styles/WindowContainer.css";

export default function WindowContainer() {
  const borderColor = useColor((state) => state.windowBorderColor);

  return (
    <div className="cardContainer">
      <div className="cardBlock" style={{ borderColor: borderColor }}>
        Card
      </div>
    </div>
  );
}
