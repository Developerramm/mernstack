import React, { useEffect } from "react";
import { getData } from "./api/PostApi";

const App = () => {

  const [data,setData] = useEffect();

  const getPostData = async()=>{
    const res = await getData();
    console.log(res.data)
    // setData(res.data);
  }

  useEffect(()=>{
    getPostData();
  },[])


  return (
    <div className="container">
      <h1 className="text-center">Crud operation here  </h1>
    </div>
  );
};

export default App;
