import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Container from "./components/Container/Container";

function App() {
  // const [scrollHeigth, setScrollHeigth] = useState(0);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
