import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Home, Landing, Error, NewsLetter, Cocktail } from './pages';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
      children: [
        {
          // Kind of Making it a home Page
          //Replace it with path
          index: true,
          // This Path is Realtive to the Parent
          // path: 'landing',
          element: <Landing></Landing>,
        },
        {
          path: 'cocktail',
          element: <Cocktail></Cocktail>,
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
