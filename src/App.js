import React from "react";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
