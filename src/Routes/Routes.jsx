import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home1/Home";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/404/NotFound";
import About from "../Pages/About";
import Service from "../Pages/Service/Service";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about-us",
                element: <About />,
            },
            {
                path: "/service",
                element: <Service />,
            },

        ]
    }


]);