import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home1/Home";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/404/NotFound";

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
        ]
    },
]);