import FormContainer from "./FormContainer/FormContainer";
import WindowContainer from "./WindowContainer/WindowContainer";

export default function MainContainer() {
  // const mainColor = useColor((state) => state.mainBgColor);
  return (
    <section
    // style={{
    //   backgroundColor: mainColor,
    // }}
    >
      <WindowContainer />
      <FormContainer />
    </section>
  );
}
