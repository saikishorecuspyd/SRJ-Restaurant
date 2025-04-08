import AboutUs from "./components/AboutUs";
import Body from "./components/Body";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery =lazy(()=> import("./components/Grocery"))

const AppLayout=()=> {
  const [userName, setUserName] = useState()

  useEffect(()=>{
    const data = {
      name: "Sai Kishore"
    };
    setUserName(data.name)
  },[])

  return (
    <Provider store={appStore}>
       <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
         <div className="App">
         <Header />
         <Outlet />
        </div>
       </UserContext.Provider>
    </Provider>
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
