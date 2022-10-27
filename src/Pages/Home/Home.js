import React from "react";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const countries = useLoaderData();
  console.log(countries);
  return (
    <div>
      <h1>This is Home section</h1>
    </div>
  );
};

export default Home;
