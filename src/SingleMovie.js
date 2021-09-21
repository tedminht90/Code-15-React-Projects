import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { useGlobalContext } from "./context";
const url = `https://www.omdbapi.com/?i=`;

const SingleMovie = () => {
  const { api } = useGlobalContext();
  const { id } = useParams();
  //console.log(id);
  const [isLoading, setIsLoading] = useState(false);
  const [film, setFilm] = useState("");

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const reps = await fetch(`${url}${id}${api}`);
      const data = await reps.json();
      //console.log(data.Title);
      if (data) {
        const {
          Title: title,
          Year: year,
          Director: director,
          Actors: actors,
          Country: country,
          Poster: img,
          Plot: plot,
          imdbRating: rate,
        } = data;
        const newData = {
          title,
          year,
          director,
          actors,
          country,
          img,
          plot,
          rate,
        };
        setFilm(newData);
      } else {
        setFilm("");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }, [id, api]);
  useEffect(() => {
    getData();
  }, [id, getData]);

  if (isLoading) {
    return <div className="loading"></div>;
  }
  if (!film) {
    return <h2>no film to display</h2>;
  }

  const { title, year, director, actors, country, img, plot, rate } = film;

  return (
    <section className="single-movie">
      <img src={img} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <p>Director: {director}</p>
        <p>Actors: {actors}</p>
        <p>Contry: {country}</p>
        <p>Rate: {rate}</p>
        <Link to="/" className="btn">
          back to movie
        </Link>
      </div>
    </section>
  );
};

export default SingleMovie;
