import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";

const Grocery =lazy(()=> import("./components/Grocery"))

const AppLayout=()=> {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

const appRouter = createBrowserRouter([
{
  path: "/",
  element: <AppLayout />,
  children:[
    {
      path: "/",
      element: <Body />
    },
    {
      path: "/aboutus",
      element:<AboutUs /> 
    },
    {
      path: "/contactus",
      element: <ContactUs />
    },
    {
      path: "/grocery",
      element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>
    },
    {
      path: "/city/hyderabad/:resId",
      element: <RestaurantMenu />
    },
  ],
  errorElement: <Error />
},
])

function App(){
  return <RouterProvider router={appRouter} />
}
export default App;
