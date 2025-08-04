import ColorContainer from "./components/ColorContainer/ColorContainer";
import FooterContainer from "./components/FooterContainer/FooterContainer";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import MainContainer from "./components/MainContainer/MainContainer";
import { useColor } from "./store/storeColor";

function App() {
  const mainColor = useColor((state) => state.mainBgColor);
  return (
    <main
      style={{
        backgroundColor: mainColor,
      }}
    >
      <HeaderContainer />
      <ColorContainer />
      <MainContainer />
      <FooterContainer />
    </main>
  );
}

export default App;
