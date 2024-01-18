import ProgressBar from "react-bootstrap/ProgressBar";

const Play = () => {
  return (
    <>
      <div id="play" className="d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <img src="./assets/playerbuttons/Repeat.png" alt="img" />
          <img src="./assets/playerbuttons/Next.png" alt="img" />
          <img src="./assets/playerbuttons/Play.png" alt="img" />
          <img src="./assets/playerbuttons/Previous.png" alt="img" />
          <img src="./assets/playerbuttons/Shuffle.png" alt="img" />
        </div>
        <div>
          <ProgressBar now={0} id="progressBar" />
        </div>
      </div>
    </>
  );
};

export default Play;