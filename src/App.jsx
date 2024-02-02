import "./App.css";
import Body from "./components/Body";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
function MainApp() {
  return (
    <>
      <Navbar />
      <Header />
      <Body/>
      <Main />
    </>
  );
}

export default MainApp;
