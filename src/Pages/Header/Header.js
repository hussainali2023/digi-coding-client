import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import DarkMode from "../DarkMode/DarkMode";
import { FaUserAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
const Header = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut().then().catch();
  };

  const handleShowProfile = () => {
    // swal()
    toast(`${user?.displayName}`);
  };

  return (
    <div>
      <nav className="w-full bg-white shadow">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              <Link to={"/"}>
                <h2 className="text-2xl font-bold">DIGI CODING</h2>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to={"/courses"}>Courses</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to={"/faq"}>Faq</Link>
                </li>
                <li className="text-gray-600 hover:text-blue-600">
                  <Link to={"/blog"}>Blog</Link>
                </li>
                <li className="flex align-middle">
                  <DarkMode></DarkMode>
                </li>
                <>
                  {user?.uid ? (
                    <>
                      {/* <small>{user?.displayName}</small> */}
                      <button
                        onClick={handleLogOut}
                        className=" px-4 py-1 bg-orange-300 hover:bg-orange-500 text-white rounded-sm font-semibold"
                      >
                        Log Out
                      </button>
                      {user?.photoURL ? (
                        <>
                          <img
                            onMouseOver={handleShowProfile}
                            src={user?.photoURL}
                            style={{ height: "40px" }}
                            className="rounded-full cursor-pointer"
                          />
                          <Toaster
                            position="top-right"
                            reverseOrder={false}
                            toastOptions={{ duration: 1000 }}
                          />
                        </>
                      ) : (
                        <FaUserAlt />
                      )}
                    </>
                  ) : (
                    <li>
                      <Link to={"/login"}>
                        <button className=" px-4 py-1 bg-orange-300 hover:bg-orange-500 text-white rounded-sm font-semibold">
                          Login
                        </button>
                      </Link>
                    </li>
                  )}
                </>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
