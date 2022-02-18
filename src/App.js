import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CardList from "./components/CardList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/task-list">Today's housework</Link>
          </li>
          <li>
            <Link to="/task-history">History</Link>
          </li>
        </ul>

        <Routes>
          <Route path="/" exact element={<CardList />} />
          <Route path="/:id" element={<CardList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
