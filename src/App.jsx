import axios from "axios";
import { useEffect, useState } from "react";
const App = () => {
  const [pokeData, setPokeData] = useState([]);
  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokeData(response.data.results);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <main className="container">
      <h1> Pokemon API </h1>

      <p>*displaying 807 pokemon names</p>
      <ul>
        {pokeData.map((apidata) => (
          <li key={apidata.url}>{apidata.name} </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
