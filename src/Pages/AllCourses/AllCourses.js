import React from "react";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllCourses = ({ course }) => {
  const { id, title, subtitle, courseUrl, ratings, reviews } = course;
  return (
    <Link
      to={`/course/${id}`}
      className=" rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100"
    >
      <img
        src={courseUrl}
        alt=""
        className="object-cover object-center w-full rounded-t-md md:h-44 h-24  dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between md:p-6 md:space-y-6">
        <div className="space-y-2">
          <h2 className="md:text-2xl font-semibold tracking-wide">{title}</h2>
          <p className="dark:text-gray-100">{subtitle}</p>
          <div className="flex justify-between">
            <div className="flex ">
              <span className="flex">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalfAlt />
              </span>
              <p className="ml-2">{ratings}</p>
            </div>
            <p>{reviews}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AllCourses;
