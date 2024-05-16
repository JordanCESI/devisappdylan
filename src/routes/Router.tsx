import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import NewClient from "../pages/newClients";
import Mesure from "../pages/mesures";
import AddPignon from "../pages/pignon";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {path: "/devisappdylan/", element: <Home/>},
            {path: "/devisappdylan/newclient", element: <NewClient/>},
            {path: "/devisappdylan/mesure", element: <Mesure/>},
            {path: "/devisappdylan/addpignon", element: <AddPignon/>},

        ]
    }
])