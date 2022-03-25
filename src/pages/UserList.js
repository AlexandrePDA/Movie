import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Card from "../components/Card";

const UserList = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    for (let i = 0; i < moviesId.length; i++) {
      const fetchDataPref = async () => {
        try {
          const movieIdCall = await axios.get(
            `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=5dfb6f18610a7f35c06fa5c755e1e604&language=fr-FR`
          );
          const data = movieIdCall;
          setListData((listData) => [...listData, data.data]);
        } catch (error) {
          console.log(error.message);
        }
      };
      fetchDataPref();
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />

      <h2>
        Coup de <span>❤️</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card props={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default UserList;
