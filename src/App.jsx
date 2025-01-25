import NavBar from "./components/navbar/NavBar";
import "./layout.scss";
import HomePage from "./pages/homePage/HomePage";

function App() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
