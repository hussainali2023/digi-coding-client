import React from "react";
import { Link } from "react-router-dom";

const CoursesTitle = ({ course }) => {
  const { id, title } = course;
  return (
    <div>
      <Link to={`/course/${id}`}>
        <li className="md:text-xl md:mb-6">{title}</li>
      </Link>
    </div>
  );
};

export default CoursesTitle;
