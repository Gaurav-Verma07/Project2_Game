import "./Styles/styles/base.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main/Main";
import Options from "./Components/Options/Options";
import GameProvider from "./store/ContextProvider";
function App() {
  return (
    <GameProvider>
      <Header />
      <main>
        <Options />
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </GameProvider>
  );
}

export default App;
