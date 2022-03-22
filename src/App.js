import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Create from "./Pages/Create";
import List from "./Pages/List";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<List />} />
            <Route path="/create" element={<Create />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
