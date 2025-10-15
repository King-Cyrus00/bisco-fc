import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";


 
import Home from "./pages/home";
import About from "./pages/about";
import Team from "./pages/team";
import Gallery from "./pages/gallery";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import Under10Page from "./pages/under-10";
import Under13Page from "./pages/under-13";
import Under15Page from "./pages/under-15";
import Under17Page from "./pages/under-17";
import ManagementPage from "./pages/under-magt";




const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/team", element: <Team /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/contact", element: <Contact /> },
  { path: "/team/management", element: <ManagementPage /> },
  { path: "/team/under-10", element: <Under10Page /> },
  { path: "/team/under-13", element: <Under13Page /> },
  { path: "/team/under-15", element: <Under15Page /> },
  { path: "/team/under-17", element: <Under17Page /> },
  { path: "*", element: <NotFound /> },
]);



export default function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


