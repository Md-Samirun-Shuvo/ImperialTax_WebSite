import "./App.css";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import TopBar from './components/TopBar/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Nav />
      {/* <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes> */}
      <Home />
    </div>
  );
}

export default App;
