import React from "react";

const Courses = () => {
  return (
    <div className="grid grid-cols-12 gap-2 md:gap-6 mx-2">
      <div className="col-span-5 md:col-span-3 border border-4">lefe side</div>

      <div className="col-span-7 md:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className=" max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
          <img
            src="https://source.unsplash.com/random/300x300/?2"
            alt=""
            className="object-cover object-center w-full rounded-t-md md:h-64 h-32  dark:bg-gray-500"
          />
          <div className="flex flex-col justify-between md:p-6 md:space-y-8">
            <div className="space-y-2">
              <h2 className="md:text-3xl font-semibold tracking-wide">
                Donec lectus leo
              </h2>
              <p className="dark:text-gray-100">
                Curabitur luctus erat nunc, sed ullamcorper erat vestibulum
                eget.
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-400 dark:text-gray-900"
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
