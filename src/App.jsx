import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
  About,
  Home,
  Landing,
  Error,
  NewsLetter,
  Cocktail,
  SinglePageError,
} from './pages';
import { loader as landingLoader } from './pages/Landing';
import { loader as singleCocktailLoader } from './pages/Cocktail';
import { action as newsLetterAction } from './pages/NewsLetter';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 3,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    // below Error Page is AKA Global Error Page
    errorElement: <Error></Error>,
    children: [
      {
        // Kind of Making it a home Page
        //Replace it with path
        index: true,
        // This Path is Realtive to the Parent
        // path: 'landing',
        element: <Landing></Landing>,
        errorElement: <SinglePageError></SinglePageError>,
        loader: landingLoader,
      },
      {
        path: 'cocktail/:id',
        element: <Cocktail></Cocktail>,
        loader: singleCocktailLoader,
        errorElement: <SinglePageError></SinglePageError>,
      },

      {
        path: 'newsletter',
        element: <NewsLetter></NewsLetter>,
        action: newsLetterAction,
      },
      ,
      {
        path: 'about',
        element: <About></About>,
      },
    ],
  },
]);
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};
export default App;
