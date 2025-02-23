import React from "react";
import { useLoaderData } from "react-router-dom";

const Movie = () => {
  const movieData = useLoaderData();
  // console.log(movieData.Search);
  const arr = movieData.Search;
  console.log(arr);
  return (
    <div className="row">
      {arr.map((item, index) => {
        return (
          <div className="col-md-3" key={index}>
            <div className="card text-center" style={{ width: "18rem" }}>
              <img src={item.Poster} className="card-img-top" />
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
