import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";


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


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5
    }
  }
});


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader(queryClient),
        errorElement: <ErrorElement />
      },
      {
        path: "products",
        element: <Products />,
        loader: productsLoader(queryClient),
        errorElement: <ErrorElement />
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader(queryClient),
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
        action: checkoutAction(store, queryClient),
        errorElement: <ErrorElement />
      },
      {
        path: "orders",
        element: <Orders />,
        loader: ordersLoader(store, queryClient),
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
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;