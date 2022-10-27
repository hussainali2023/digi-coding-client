import { keyboard } from "@testing-library/user-event/dist/keyboard";
import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourses from "../AllCourses/AllCourses";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-6 mx-2">
      <div className="col-span-5 md:col-span-3 sticky">
        {courses.map((course) => (
          <li>{course.title}</li>
        ))}
      </div>
      <div className="col-span-7 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <AllCourses key={course.id} course={course}></AllCourses>
        ))}
      </div>
    </div>
  );
};

export default Courses;
