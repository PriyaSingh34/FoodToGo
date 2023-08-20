import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";


const Grocerry=lazy(()=>import("./components/Grocerry"));


const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path:"/restaurants/:resid",
        element:<RestaurantMenu/>,
      },
      {
        path:"/grocerry",
        element:<Suspense fallback={<Shimmer/>}><Grocerry/></Suspense>,
      },
      
    ],
    errorElement: <Error />,
  },
  
]);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(<RouterProvider router={appRouter} />);
