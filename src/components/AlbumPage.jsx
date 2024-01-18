
import ProgressBar from "react-bootstrap/ProgressBar";
import CardAlbum from "./CardAlbum";

const AlbumPage = () => {
  return (
    <div id="albumPage" className="d-flex flex-column">
      <div id="linkAlbumPage" className="d-flex justify-content-evenly m-4">
        <a href="">TRENDING</a>
        <a href="">PODCAST</a>
        <a href="">MOODS AND GENRES</a>
        <a href="">NEW RELEASES</a>
        <a href="">DISCOVER</a>
      </div>
      <div>
        <CardAlbum />
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
    /* </div> */
  );
};

export default AlbumPage;
