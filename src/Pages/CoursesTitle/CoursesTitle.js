import React from "react";
import { Link } from "react-router-dom";

const CoursesTitle = ({ course }) => {
  const { id, title } = course;
  return (
    <div>
      <Link to={`/course/${id}`}>
        <li className="list-none md:text-xl text-md mb-4 md:mb-6 bg-sky-200 px-1 rounded-md">
          {title}
        </li>
      </Link>
    </div>
  );
};

export default CoursesTitle;
