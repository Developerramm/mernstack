import React, { useEffect, useState } from "react";
import { getData } from "./api/PostApi";

const App = () => {
  const [data, setData] = useState([]);

  const getPostData = async () => {
    const res = await getData();
    // console.log(res.data);
    setData(res.data);
    console.log(data);
  };

  useEffect(() => {
    getPostData();
  });

  if(data.length == 0) return "Loading.....";

  return (
    <div className="container">
      <h2 className="text-center">Fetch data using axios </h2>
      <div className="row mt-3">
        {data &&
          data.map((item, index) => {
            return (
              <div className="col-md-4 border" key={index}>
                <h4> {item.title} </h4>
                <p> {item.body} </p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
