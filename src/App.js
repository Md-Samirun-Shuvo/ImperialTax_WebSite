import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import TopBar from "./components/TopBar/TopBar";

function App() {
  return (
    <div className="App">
      <div className="fixed-top bg-white">
        <TopBar />
        <Nav />
      </div>
      <div className="homepagecontainer">
        <Home />
      </div>
    </div>
  );
}

export default App;
