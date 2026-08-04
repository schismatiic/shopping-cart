import App from "./App";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
];

export default routes;
