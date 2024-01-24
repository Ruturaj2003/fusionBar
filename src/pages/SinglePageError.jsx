import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const err = useRouteError();
  return (
    <h3>
      Error 418: I'm a teapot. Just kidding, our developers are brewing up a
      fix!
    </h3>
  );
};
export default SinglePageError;
