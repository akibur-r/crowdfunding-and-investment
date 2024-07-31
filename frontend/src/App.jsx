import "./layout.scss";
import "./utility.scss";
import Navbar from "./components/navbar/navbar";
import Signup from './components/auth/signup'

import ViewBusiness from "./components/view/business/viewBusiness";
import ViewCampaign from "./components/view/campaign/viewCampaign";
import Homepage from "./routes/home/homepage";
import Invest from "./components/transaction/invest";
import AlertTest from "./components/alert/alertTest";
import RequestSuccessAlert from "./components/alert/requestSuccessAlert";
import RequestFailedAlert from "./components/alert/requestFailedAlert";
import PublishedAlert from "./components/alert/publishedAlert";
import PaymentSuccessful from "./components/alert/paymentSuccessful";
import PaymentFailed from "./components/alert/paymentFailed";
import DashboardMaster from './routes/dashboard/dashboardMaster'
import Login from './components/auth/login'

import * as React from "react";
import { ReactDOM } from "react-dom/client";
import {createBrowserRouter, RouterProvider, Link, Outlet, Router, Route, Routes} from 'react-router-dom'
import Home from "./components/home/home";
import Landingpage from "./components/home/landingpage";
import Sidebar from "./routes/dashboard/sidebar";
import Dashboard from "./routes/dashboard/dashboard";
import Profile from "./routes/dashboard/profile";
import Campaigns from "./routes/dashboard/campaigns";
import Test from "./testComponents/test";


const router = createBrowserRouter([
  {
    path: "/",
    element: 
      <>
        <Navbar/>
        <Outlet/>
      </>,
    errorElement: <span>Not Found <br /> <Link to={"/"}>Go Home</Link></span>,
    children: [
      {
        path: "/",
        element: <Homepage/>
      },
      {
        path: "/start-a-campaign",
        element: <h1>Start a Campaign</h1>
      },
      {
        path: "/explore",
        children: [
          {
            path: "/explore",
            element: <h1>Explore</h1>
          },
          {
            path: "/explore/campaigns",
            children: [
              {
                path: "/explore/campaigns"
              },
              {
                path: "/explore/campaigns/:campaignId",
                element: <ViewCampaign/>
              }
            ]
          },
          {
            path: "/explore/businesses",
            children: [
              {
                path: "/explore/businesses"
              },
              {
                path: "/explore/businesses/:businessId",
                element: <ViewBusiness/>
              }
            ]
          }
        ]
      },
      {
        path: "/auth",
        children: [
          {
            path: "/auth/login",
            element: <Login/>
          },
          {
            path: "/auth/signup",
            element: <Signup/>
          }
        ]
      },
      {
        path: "/dashboard",
        element: 
        <div className='dashboardMaster'>
          <Sidebar/>
          <Outlet/>
        </div>,
        children: [
          {
            path: "/dashboard/overview",
            element: <Dashboard/>
          },
          {
            path: "/dashboard/profile",
            element: <Profile/>
          },
          {
            path: "/dashboard/campaigns",
            element: <Campaigns/>
          },
          {
            path: "/dashboard/businesses",
            element: <h1>Businesses</h1>
          }
        ]
      }
    ]
  }
  
]);

function App() {
  return (
    <div className="layout">
      {/* <div className="Navbar">
        <Navbar/>
      </div>
      <div className="content">
        <PaymentFailed/>
      </div> */}

      <RouterProvider router={router} />
      {/* <Test/> */}

    </div>
  )
}

export default App;
