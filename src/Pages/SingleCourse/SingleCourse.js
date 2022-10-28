import jsPDF from "jspdf";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleCourse = () => {
  const course = useLoaderData();
  console.log(course);
  const { title, courseUrl, description, topics, subtitle, duration } = course;

  const pdfGenerate = () => {
    let doc = new jsPDF("landscape", "px", "a4", "false");
    doc.addImage(courseUrl, 56, 50, 500, 400);
    doc.addPage();
    doc.text(280, 15, title);
    doc.text(20, 40, topics);

    doc.save("digi-coding.pdf");
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-900 dark:text-gray-100">
        <div className="flex space-x-4 justify-center">
          <p className=" text-xl text-center">{title}</p>
        </div>
        <div>
          <img
            src={courseUrl}
            alt=""
            className="object-cover w-full mb-4 h:44 md:h-56 dark:bg-gray-500"
          />

          <p className=" mt-6">
            <span className=" text-xl font-semibold">
              Course Description :{" "}
            </span>{" "}
            {description}
          </p>

          <p className="text-sm dark:text-gray-400"></p>
        </div>
        <p className="text-xl">What You will learn from This Course:</p>
        <p>
          {topics.map((topic) => (
            <li>{topic}</li>
          ))}
        </p>
        <p>
          <span className=" font-semibold text-xl">Course Duration:</span>{" "}
          {duration}
        </p>
        <div className="flex justify-evenly">
          <Link>
            <button
              onClick={pdfGenerate}
              className="px-4 py-2 bg-orange-500 rounded-md"
            >
              Download Details
            </button>
          </Link>
          <Link to={"/premium"}>
            <button className="px-4 py-2 bg-orange-500 rounded-md">
              Premium Access
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
