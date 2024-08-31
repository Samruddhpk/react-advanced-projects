import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";


// imports
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Orders, Products, Register, SingleProduct } from "./pages";
import { ErrorElement } from "./components";


// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";
import { loader as checkoutLoader } from "./pages/Checkout";
import { loader as ordersLoader } from "./pages/Orders";

// actions
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as checkoutAction } from "./components/CheckoutForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
        errorElement: <ErrorElement />
      },
      {
        path: "cart",
        element: <Cart />,
        errorElement: <ErrorElement />
      },
      {
        path: "about",
        element: <About />,
        errorElement: <ErrorElement />
      },
      {
        path: "checkout",
        element: <Checkout />,
        loader: checkoutLoader(store),
        action: checkoutAction(store),
        errorElement: <ErrorElement />
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store),
        errorElement: <ErrorElement />
      },
    ]
  },

  // auth routes
  {
    path: "/login",
    element: <Login />,
    action: loginAction(store),
    errorElement: <Error />
  },
  {
    path: "/register",
    element: <Register />,
    action: registerAction,
    errorElement: <Error />
  }

]);


const App = () => {
  return (
    <RouterProvider router={router} />
  );
};
export default App;