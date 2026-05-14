import { Outlet } from 'react-router-dom';
import { Navbar } from './components/ui/Navbar';

export const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />;
    </>
  );
};
