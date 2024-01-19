import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CardAlbum = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=album";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "124ee62ab1msh317a02ca9faa374p1b1349jsn2caa85d9c6e2",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setAlbums(result.data);
        console.log("Risposta JSON:", result);
      } catch (error) {
        console.error("Errore nella richiesta:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      {albums.map((album) => (
        <div key={album.id} id="cardAlbum" className="m-3 mt-5 p-2">
          <Link to="/DettagliAlbum" style={{ textDecoration: 'none', color: 'white' }}>
          <div className="d-flex flex-column align-items-center">
            <img src={album.album.cover} alt="img" />
            <p className="mt-2">Album:{album.album.title}</p>
            <p>Artist:{album.artist.name}</p>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardAlbum;
