import { createBrowserRouter } from "react-router-dom";
//import App from "../App";

import CountriesPage from "../pages/CountriesPage";
import ErrorP from "../pages/ErrorP";
import Home from "../pages/Home";

export const approuter = createBrowserRouter([
    {
        path:"/",
        element:<Home/>,
        errorElement:<ErrorP/>
        
        
    },
    {
        path:"/atlas/countries",
        element:<CountriesPage/>,
        errorElement:<ErrorP/>
        
    },
    {
        path:"*",  // all unmatched routes
        element:<ErrorP/>
    }
])