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

const App = () => {
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
        },
        ,
        {
          path: 'about',
          element: <About></About>,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
