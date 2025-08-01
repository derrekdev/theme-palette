import "./App.css";
import ColorContainer from "./components/ColorContainer/ColorContainer";
import FooterContainer from "./components/FooterContainer/FooterContainer";
import HeaderContainer from "./components/HeaderContainer/HeaderContainer";
import MainContainer from "./components/MainContainer/MainContainer";

function App() {
  return (
    <main>
      <HeaderContainer />
      <ColorContainer />
      <MainContainer />
      <FooterContainer />
    </main>
  );
}

export default App;
