import React from "react";
import { useGlobalContext } from "./context";
import { Link } from "react-router-dom";
const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { data, isLoading } = useGlobalContext();
  //console.log(data);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (!data) {
    return <h2>error</h2>;
  }

  return (
    //<h2>movies component</h2>
    <section className="movies">
      {data.map((item) => {
        const { title, img, type, year, id } = item;
        return (
          <Link to={`/movies/${id}`} key={id} className="movie">
            <article>
              <img src={img === "N/A" ? url : img} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{type}</p>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        );
      })}
    </section>
  );
};

export default Movies;
