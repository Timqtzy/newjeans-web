import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Discography from "./pages/Discography";
import Gallery from "./pages/Gallery";
import Video from "./pages/Video";
import Notice from "./pages/Notice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="Profile" element={<Profile />}></Route>
        <Route path="Discography" element={<Discography />}></Route>
        <Route path="Gallery" element={<Gallery />}></Route>
        <Route path="Video" element={<Video />}></Route>
        <Route path="Notice" element={<Notice />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
