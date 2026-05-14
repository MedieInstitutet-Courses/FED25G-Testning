import { createBrowserRouter } from 'react-router-dom';
import { App } from '../../App';
import { HomePage } from '../../pages/home/HomePage';
import { ContactPage } from '../../pages/contact/ContactPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  },
]);
