import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import Transitions from "../pages/transitions/Transitions";
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
                element: <Transitions />
            },
            {
                path: "/settings",
                element: <Settings />
            }
        ])
    }
])