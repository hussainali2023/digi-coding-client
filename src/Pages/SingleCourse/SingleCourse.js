import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div>
      <h1>This is from Single course</h1>
    </div>
  );
};

export default SingleCourse;
