import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import AlbumPage from "./components/AlbumPage";

function App() {
  return (
    <>
      <div className="d-flex">
        <MyNavbar />
        <AlbumPage />
      </div>
    </>
  );
}

export default App;
