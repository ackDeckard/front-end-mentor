import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Thanks from "./components/Thanks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/thanks",
    element: <Thanks />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
