import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import ErrorPage from "../Pages/ErroPage/ErrorPage";
import Faq from "../Pages/Faq/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Premium from "../Pages/Premium/Premium";
import Register from "../Pages/Register/Register";
import SingleCourse from "../Pages/SingleCourse/SingleCourse";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: async () => {
          return fetch("https://digi-coding-server.vercel.app/courses");
        },
      },
      {
        path: "/course/:id",
        element: <SingleCourse></SingleCourse>,
        loader: async ({ params }) => {
          return fetch(
            `https://digi-coding-server.vercel.app/course/${params.id}`
          );
        },
      },
      {
        path: "/premium",
        element: (
          <PrivateRoute>
            <Premium></Premium>
          </PrivateRoute>
        ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
]);
