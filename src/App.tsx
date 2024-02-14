import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./styles/app.scss";
import About from "./pages/About";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route index element={<About />} />
            <Route path="work" element={<Work />} />
            <Route path="resume" element={<Resume />} />
            <Route path="experience" element={<Experience />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
