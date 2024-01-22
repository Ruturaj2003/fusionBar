import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <h2>Home Page</h2> },
    {
      path: '/about',
      element: <h2>About Page</h2>,
    },
  ]);
  return <RouterProvider router={router} />;
};
export default App;
