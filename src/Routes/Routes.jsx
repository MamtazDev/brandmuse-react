import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home1/Home";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/404/NotFound";
import About from "../Pages/About/About";

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


        ]
    }


]);