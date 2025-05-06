import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import App from "./App"
import JobsPage from "./pages/JobsPage"
import NotFound from "./pages/NotFound"
import AddJobPage from "./pages/AddJobPage"
import ApplyPage from "./pages/ApplyPage"

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import AddJobButton from "./Components/AddJobButton"

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

    {
        path: "add-job",
        element: <AddJobPage />,
    }, 

    {
        path: "/apply",
        element: <ApplyPage />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>,
)
