import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import ComingSoon from "./pages/ComingSoon";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/comingsoon" element={<ComingSoon />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
