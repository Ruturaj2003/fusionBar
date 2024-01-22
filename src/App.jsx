import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { About, Home, Landing, Error, NewsLetter, Cocktail } from './pages';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home></Home> },
    {
      path: '/about',
      element: <About></About>,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
