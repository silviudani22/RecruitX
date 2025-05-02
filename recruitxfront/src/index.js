import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import JobsPage from "./pages/JobsPage"
import NotFound from "./pages/NotFound"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,    
        errorElement: <NotFound />
    },

    {
        path: "jobs",
        element: <JobsPage />,
        errorElement: <NotFound />
    },

   /* {
        path: "*",
        element: <NotFound />,
    }, */
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
