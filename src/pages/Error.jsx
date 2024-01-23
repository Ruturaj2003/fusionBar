import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg';
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="Page Not Found" />

          <h3>
            Oops! The page you are looking for might be in another castle.
          </h3>
          <br />
          <h2>
            <Link to="/">Go Back Home :D</Link>
          </h2>
        </div>
      </Wrapper>
    );
  }
  return (
    <div>
      <h2>
        Error 503: The server is doing yoga. It'll be back in a zen state
        shortly
      </h2>
    </div>
  );
};
export default Error;
