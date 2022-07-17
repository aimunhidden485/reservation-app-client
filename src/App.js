import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Hotel from "./Pages/Hotel/Hotel";
import List from "./Pages/List/List";

function App() {
  return (
   <div className="App">
     <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/hotels" element={<List/>}></Route>
        <Route path="/hotel/:id" element={<Hotel/>}></Route>
      </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
