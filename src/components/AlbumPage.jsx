import ProgressBar from "react-bootstrap/ProgressBar";
import CardAlbum from "./CardAlbum";
import DettagliAlbum from "./DettagliAlbum";
import MyNavbar from "./MyNavbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AlbumPage = () => {
  return (
    <BrowserRouter>
      <div className="d-flex">
        <div>
          <MyNavbar />
        </div>
        <div id="albumPage" className="d-flex flex-column">
          <div id="linkAlbumPage" className="d-flex justify-content-evenly m-4">
            <a href="">TRENDING</a>
            <a href="">PODCAST</a>
            <a href="">MOODS AND GENRES</a>
            <a href="">NEW RELEASES</a>
            <a href="">DISCOVER</a>
          </div>
          <div>
            <Routes>
              <Route path="/CardAlbum" element={<CardAlbum />} />
              <Route path="/DettagliAlbum" element={<DettagliAlbum />} />
            </Routes>
          </div>
          <div id="play" className="d-flex flex-column align-items-center">
            <div className="d-flex justify-content-center align-items-center">
              <img src="./assets/playerbuttons/Shuffle.png" alt="img" />
              <img src="./assets/playerbuttons/Previous.png" alt="img" />
              <img src="./assets/playerbuttons/Play.png" alt="img" />
              <img src="./assets/playerbuttons/Next.png" alt="img" />
              <img src="./assets/playerbuttons/Repeat.png" alt="img" />
            </div>
            <div>
              <ProgressBar now={0} id="progressBar" />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AlbumPage;
