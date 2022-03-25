import React from "react";

const Card = ({ props }) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genreArray = [];
    for (let i = 0; i < props.genre_ids.length; i++) {
      switch (props.genre_ids[i]) {
        case 28:
          genreArray.push("Action");
          break;
        case 12:
          genreArray.push(`Aventure`);
          break;
        case 16:
          genreArray.push(`Animation`);
          break;
        case 35:
          genreArray.push(`Comédie`);
          break;
        case 80:
          genreArray.push(`Policier`);
          break;
        case 99:
          genreArray.push(`Documentaire`);
          break;
        case 18:
          genreArray.push(`Drame`);
          break;
        case 10751:
          genreArray.push(`Famille`);
          break;
        case 14:
          genreArray.push(`Fantasy`);
          break;
        case 36:
          genreArray.push(`Histoire`);
          break;
        case 27:
          genreArray.push(`Horreur`);
          break;
        case 10402:
          genreArray.push(`Musique`);
          break;
        case 9648:
          genreArray.push(`Mystère`);
          break;
        case 10749:
          genreArray.push(`Romance`);
          break;
        case 878:
          genreArray.push(`Science-fiction`);
          break;
        case 10770:
          genreArray.push(`Téléfilm`);
          break;
        case 53:
          genreArray.push(`Thriller`);
          break;
        case 10752:
          genreArray.push(`Guerre`);
          break;
        case 37:
          genreArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genreArray.map((genre) => <li key={genre}>{genre}</li>);
  };

  const addStorage = () => {
    let storedData = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];

    if (!storedData.includes(props.id.toString())) {
      storedData.push(props.id);
      window.localStorage.movies = storedData;
    }
  };

  const deleteStorage = () => {
    let storedData = window.localStorage.movies.split(",");

    let newData = storedData.filter((id) => id != props.id);
    window.localStorage.movies = newData;
  };

  return (
    <div className="card">
      <img
        src={
          props.poster_path
            ? `https://image.tmdb.org/t/p/w500${props.poster_path}`
            : "./img/img-film-sans-affiche.webp"
        }
        alt="affiche film"
      />
      <h2>{props.title}</h2>
      {props.release_date ? (
        <h5> Sorti le : {dateFormater(props.release_date)}</h5>
      ) : (
        ""
      )}
      <h4>
        {props.vote_average} <span>⭐</span>
      </h4>

      <ul>
        {" "}
        {props.genre_ids
          ? genreFinder()
          : props.genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
      </ul>

      {props.overview ? <h3>Synopsis</h3> : ""}
      <p>{props.overview}</p>

      {props.genre_ids ? (
        <div className="btn" onClick={() => addStorage()}>
          ❤️
        </div>
      ) : (
        <div
          className="btn"
          onClick={() => {
            deleteStorage();
            window.location.reload();
          }}
        >
          🚮
        </div>
      )}
    </div>
  );
};

export default Card;
