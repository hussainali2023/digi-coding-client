import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCourses from "../AllCourses/AllCourses";
import CoursesTitle from "../CoursesTitle/CoursesTitle";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-6 mx-2">
      <div className="col-span-5 md:col-span-3">
        {courses.map((course) => (
          <CoursesTitle key={course.id} course={course}></CoursesTitle>
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
