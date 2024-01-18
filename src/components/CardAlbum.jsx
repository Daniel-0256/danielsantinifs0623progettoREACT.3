import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

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
    <Row>
      {albums.map((album) => (
        <Col key={album.id} xl={3} id="cardAlbum">
          
            <img src={album.album.cover} alt="img" />
            <p>Album:{album.album.title}</p>
            <p>Artist:{album.artist.name}</p>
          
        </Col>
      ))}
    </Row>
  );
};

export default CardAlbum;
