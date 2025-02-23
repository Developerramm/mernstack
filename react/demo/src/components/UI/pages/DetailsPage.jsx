import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {
  // const params = useParams();
  // console.log(params.id);
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="row">
      <div className="col-md-6">
        <img src={data.Poster} alt="" />
      </div>
      <div className="col-md-6">
        <h3> Name : {data.Title} </h3>
        <p>
          {" "}
          <b>Actors</b> : {data.Actors}{" "}
        </p>
        <p>
          {" "}
          <b>Director </b> : {data.Director}{" "}
        </p>
        <p> {data.Plot} </p>
      </div>
    </div>
  );
};

export default DetailsPage;
