import { createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import Step1 from './pages/Step1';
import Step2 from './pages/Step2';
import Step3 from './pages/Step3';
import Confirmation from './pages/Confirmation';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/registration',
    element: (
      <div className="container">
        <div className="form-wrapper">
          <Outlet />
        </div>
      </div>
    ),
    children: [
      {
        path: 'step-1',
        element: <Step1 />,
      },
      {
        path: 'step-2',
        element: <Step2 />,
      },
      {
        path: 'step-3',
        element: <Step3 />,
      },
      {
        path: 'confirmation',
        element: <Confirmation />,
      },
    ],
  },
]);

export default router;
