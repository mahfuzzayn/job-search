import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, json, RouterProvider } from "react-router-dom";
import "./index.css";
import Main from "./components/Layout/Main";
import Home from "./components/Home/Home";
import Statistics from "./components/Statistics/Statistics";
import Blog from "./components/Blog/Blog";
import AppliedJobs from "./components/AppliedJobs/AppliedJobs";
import JobDetails from "./components/JobDetails/JobDetails";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const loadHomeData = async () => {
    const [jobCategories, featuredJobs] = await Promise.all([
        fetch("../job-categories.json").then((res) => res.json()),
        fetch("../featured-jobs.json").then((res) => res.json()),
    ]);
    return { jobCategories, featuredJobs };
};

const loadJobDetails = async (params) => {
    const res = await fetch("../featured-jobs.json");
    const jobs = await res.json();
    return jobs.find((j) => j.job_id === params.jobId);
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: loadHomeData,
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>,
            },
            {
                path: "/applied-jobs",
                element: <AppliedJobs></AppliedJobs>,
                loader: () => fetch("../featured-jobs.json"),
            },
            {
                path: "/blog",
                element: <Blog></Blog>,
            },
            {
                path: "job/:jobId",
                element: <JobDetails></JobDetails>,
                loader: ({ params }) => loadJobDetails(params),
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
