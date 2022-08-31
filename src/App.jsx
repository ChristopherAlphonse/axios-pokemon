import { useEffect, useState } from "react";

import axios from "axios";

const App = () => {
  const [pokeData, setPokeData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=8")
      .then((response) => {
        setPokeData(response.data.results);
        console.log(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <main className="container">
      <h1> Pokemon API </h1>

      <p>*displaying 8 pokemon names</p>
      <ul>
        {pokeData.map((apidata) => (
          <li key={apidata.url}>{apidata.name[0] + " " + apidata.name[6]} </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
