import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
  const [moviesData, setMoviesData] = useState([]);
  const [search, setSearch] = useState("batman");
  const [sortGoodBad, setSortGoodBad] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiCall = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=5dfb6f18610a7f35c06fa5c755e1e604&query=${search}&language=fr-FR`
        );
        const data = apiCall;
        setMoviesData(data.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);

  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Film"
            id="search-input"
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <div className="btn-sort-container">
          <div
            className="btn-sort"
            id="goodToBad"
            onClick={() => setSortGoodBad("goodToBad")}
          >
            Top
          </div>
          <div
            className="btn-sort"
            id="badToGood"
            onClick={() => setSortGoodBad("badToGood")}
          >
            Flop
          </div>
        </div>
      </div>

      <div className="result">
        {moviesData
          .sort((a, b) => {
            if (sortGoodBad === "goodToBad") {
              return b.vote_average - a.vote_average;
            } else if (sortGoodBad === "badToGood") {
              return a.vote_average - b.vote_average;
            }
          })
          .map((movie) => (
            <Card key={movie.id} props={movie} />
          ))}
      </div>
    </div>
  );
};

export default Form;
