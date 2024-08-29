import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// imports
import { About, Cocktail, Landing, Error, NewsLetter, HomeLayout } from "./pages";
import { SinglePageError } from "./components";

// loaders
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleCocktailLoader } from "./pages/Cocktail";

// actions
import { action as newsletterAction } from "./pages/NewsLetter";


// react query
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
        loader: landingLoader(queryClient),
        element: <Landing />,
        errorElement: <SinglePageError />
      },
      {
        path: "cocktail/:id",
        loader: singleCocktailLoader(queryClient),
        element: <Cocktail />,
        errorElement: <SinglePageError />
      },
      {
        path: "newsletter",
        element: <NewsLetter />,
        action: newsletterAction,
        errorElement: <SinglePageError />
      },
      {
        path: "about",
        element: <About />,
        errorElement: <SinglePageError />
      }
    ]
  },

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