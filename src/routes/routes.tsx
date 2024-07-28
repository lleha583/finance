import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Analys from "../pages/analys/Analys";
import Settings from "../pages/settings/settings";


export const router = createBrowserRouter([
    {
        path: "/",
        element:  <App />,
        children: ([
            {
                path: "",
                element: <Home />
            },
            {
                path: "/analys",
                element: <Analys />
            },
            {
                path: "/settings",
                element: <Settings />
            }
        ])
    }
])