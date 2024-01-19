/* import { useState, useEffect } from "react";
import MyNavbar from "./MyNavbar";
import Album from "./Album";

const RicercaAlbum = () => {
  const [loading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://deezerdevs-deezer.p.rapidapi.com/${searchValue}`;
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
        setLoading(false)
        console.log("Risposta JSON:", result);
      } catch (error) {
        console.error("Errore nella richiesta:", error);
      }
    };

    fetchData();
  }, [searchValue]);

  return (
    <>
    <div>
        <MyNavbar setSearchValue={setSearchValue} />
        {!loading ? (
            <Album 
            cover={album.cover} />
        ) : null}
    </div>
    </>
  );
};

export default RicercaAlbum;
 */