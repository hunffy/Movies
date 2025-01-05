import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import Main from "./pages/Main.js";
import InputName from "./pages/InputName.js";
import Search from "./pages/Search.js";
import Result from "./pages/Result.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/inputname" element={<InputName />} />
          <Route path="/search" element={<Search />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
