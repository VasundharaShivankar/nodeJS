import ReactDOM from "react-dom/client"
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "./views/Home/Home.js"
import About from "./views/About/About.js"
import Contact from "./views/Contact/Contact.js"
import "./style.css"

const root= ReactDOM.createRoot(document.getElementById("root"))

const router=createBrowserRouter([
    {
        path:"/",
        element:<Home/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])

root.render(<RouterProvider router={router}/>);
