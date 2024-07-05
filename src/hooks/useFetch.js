import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [apiData, getApiData] = useState();
  const getApi = (url) => {
    axios
      .get(url)
      .then((res) => getApiData(res.data))
      .catch((err) => console.log(err));
  };

  const getType = (url) => {
    axios
      .get(url)
      .then((res) =>
        getApiData({ results: res.data.pokemon.map((poke) => poke.pokemon) })
      )
      .catch((err) => console.log(err));
  };
  return [apiData, getApi, getType];
};

export default useFetch;
