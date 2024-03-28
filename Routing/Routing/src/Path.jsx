import App from "./App";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { ErrorPage } from "./Pages/Error";
import { Home } from "./Pages/Home";

export const Path  = [
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/home",
                element: <Home/>,
            },
            {
                path: "/about",
                element: <About/>,
            },
            {
                path: "/contact",
                element: <Contact/>,
            }
        ]
    }
]