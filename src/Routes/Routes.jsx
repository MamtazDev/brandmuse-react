import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home1/Home";
import MainLayout from "../Layouts/MainLayout";
import NotFound from "../Pages/404/NotFound";
import About from "../Pages/About";
import Service from "../Pages/Service";
import ServiceDetails from "../Pages/ServiceDetails";
import Portfolio from "../Pages/Portfolio";
import PortfolioDetails from "../Pages/PortfolioDetails";
import Pricing from "../Pages/Pricing";
import Contact from "../Pages/Contact";
import Faq from "../Pages/Faq";
import OurProcess from "../Pages/OurProcess";
import SignIn from "../Pages/SignIn";

export const router = createBrowserRouter([
    {
        path: '/login',
        element: <SignIn />,
    },
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
            {
                path: "/service-details/:id",
                element: <ServiceDetails />,
            },
            {
                path: "/portfolio",
                element: <Portfolio />,
            },
            {
                path: "/portfolio-details/:project",
                element: <PortfolioDetails />,
            },
            {
                path: "/pricing",
                element: <Pricing />,
            }, 
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/faq",
                element: <Faq />,
            },
            {
                path: "/ourProcess",
                element: <OurProcess />,
            },
            {
                path: "/404",
                element: <NotFound />,
            },

        ]
    }

]);