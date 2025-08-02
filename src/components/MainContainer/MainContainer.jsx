import { useColor } from "../../store/storeColor";
import WindowContainer from "./WindowContainer/WindowContainer";

export default function MainContainer() {
  const mainColor = useColor((state) => state.mainBgColor);
  return (
    <section
      style={{
        backgroundColor: mainColor,
      }}
    >
      <WindowContainer />
    </section>
  );
}
