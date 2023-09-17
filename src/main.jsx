/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Componant/Layout.jsx";
import Home from "./Componant/Home/Home.jsx";
import About from "./Componant/About/About.jsx";
import Contact from "./Componant/Contact/Contact.jsx";
import User from "./Componant/User/User.jsx";
// const router = createBrowserRouter([
//   {
//     path : '/',
//     element : <Layout></Layout>,
//     children :[
//       {
//         path: "",
//         element: <Home />
//       },
//       {
//         path:"/about",
//         element: <About />
//       },
//       {
//         path: "/contact",
//         element : <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="user/:userid" element={<User />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
