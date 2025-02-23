const GetApiData = async () => {
  try {
    const response = await fetch(
      "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
    );
    const data = response.json();
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export default GetApiData;

// api
//https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1
