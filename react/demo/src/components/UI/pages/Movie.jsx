import React from "react";
import { useLoaderData } from "react-router-dom";
const Movie = () => {
  const movieData = useLoaderData();
  const arr = movieData.Search;
  return (
    <div className="row mt-4">
      {movieData && arr.map((item, index) => {
        return (
          <div className="col-md-3 border border-1 text-center" key={index}>
            <div className="card text-center" style={{ width: "14rem" }}>
              <img src={item.Poster} className="card-img-top"  />
            </div>
            <div className="card-body">
              <p className="card-title text-center"> Titlt : {item.Title} </p>
              <p className="card-text text-center"> Type :  {item.Type} </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Movie;
