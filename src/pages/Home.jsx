import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};
export default Home;
