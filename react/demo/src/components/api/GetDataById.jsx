import React from "react";

const GetDataById = async ({ params }) => {
  const id = params.id;
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?i=${id}&apikey=1c12799f`
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default GetDataById;
