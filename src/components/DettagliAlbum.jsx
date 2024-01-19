import { useState, useEffect } from "react";


const DettagliAlbum = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      const url = "https://deezerdevs-deezer.p.rapidapi.com/search?q=playlist";
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

        if (result.data) {
          setTracks(result.data);
          console.log("Risposta JSON Tracce:", result.data);
        } else {
          console.error(
            "Dati delle tracce non trovati nella risposta:",
            result
          );
        }
      } catch (error) {
        console.error("Errore nella richiesta:", error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div>
      <h1 className="text-light m-3">Lista delle Canzoni</h1>
      {tracks.map((track) => (
        <div key={track.id}className="m-5 p-2"id="track">
          <div className="d-flex justify-content-evenly align-items-end" id="canzoni">
            <img src={track.album.cover} alt="img" />
            <p className="text-light m-0">{track.title}</p>
            <p className="text-light m-0">{track.duration}s.</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DettagliAlbum;

