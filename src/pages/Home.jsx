import { Link, Outlet, useNavigation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  const navigation = useNavigation();
  const isPageLoadin = navigation.state === 'loading';

  return (
    <>
      <Navbar></Navbar>
      <section className="page">
        {isPageLoadin ? <div className="loading"></div> : <Outlet></Outlet>}
      </section>
    </>
  );
};
export default Home;
