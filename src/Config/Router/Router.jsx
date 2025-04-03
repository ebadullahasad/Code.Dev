import { createBrowserRouter } from "react-router-dom";
import Layout from "../../Layout";
import Home from "../../Screens/Home";
import Work from "../../Screens/Work";
import Career from "../../Screens/Career";
import ServiceDetail from "../../Screens/ServiceDetail";
import BlogDetail from "../../Screens/BlogDetails";
import Service from "../../Screens/Service";
import AboutUs from "../../Screens/AboutUs";
import ContactUs from "../../Screens/ContactUs"
import PrivacyPolicy from "../../Screens/PrivacyPolicy";
import TermsandConditions from "../../Screens/TermsandConditions";
import Blogs from "../../Screens/Blogs"
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "work",
        element: <Work />,
      },
      {
        path: "career",
        element: <Career />,
      },
      {
        path: "servicedetail",
        element: <ServiceDetail />,
      },
      {
        path: "blogdetail",
        element: <BlogDetail />,
      },
      {
        path: "blog",
        element: <Blogs />,
      },

      // { path: "*", element: <NotFound /> },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "services",
        element: <Service />,
      },
      {
        path: "contact",
        element: <ContactUs/>,
      },
      {
        path: "privacypolicy",
        element: <PrivacyPolicy />,
      },
      {
        path: "termsandcondition",
        element: <TermsandConditions />,
      },
    ],
  },

  // { path: "*", element: <NotFound /> },
]);
