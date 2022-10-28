import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">
        <div className="ml-4">
          <img
            className="rounded-md"
            src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          />
        </div>
        <div className=" mx-4 p-2 text-xl">
          <p>
            The best online coding courses offer a convenient, flexible way to
            learn in-demand skills, whether you plan to work in programming or
            just want an additional string in your bow and to understand the
            process. A wide variety of online coding schools of programs of
            study that you can make work around your own timetable, meaning that
            you can study coding around work or other commitments. This makes
            them more convenient than studying in person, and they're usually
            more economical too.
          </p>
          <br />
          <p className="mt-6">
            On top of that, the sheer number and range of online coding courses
            mean you're almost guaranteed to find a course that teaches the
            language you want to learn at an appropriate level and with a
            workload that suits you. To help you find one, we've selected our
            own pick of the best online courses that we've found.
          </p>

          <div className="mt-6">
            <Link to={"/courses"}>
              <button className=" px-5 py-2 text-lg bg-orange-500 rounded-md text-white font-medium">
                Check Out Courses
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
