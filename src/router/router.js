import Prices from '../pages/Prices';

export const privateRoutes = [
  {
    path: '/',
    element: <div>Dashboard</div>,
  },
  {
    path: '/dashboard',
    element: <div>Dashboard</div>,
  },
  {
    path: '/wallet',
    element: <div>Wallet</div>,
  },
  {
    path: '/prices',
    element: <Prices />,
  },
  {
    path: '/portfolios',
    element: <div>Portfolios</div>,
  },
  {
    path: '/accounts',
    element: <div>Accounts</div>,
  },
  {
    path: '/cards',
    element: <div>Cards</div>,
  },
  {
    path: '/settings',
    element: <div>Settings</div>,
  },
];

export const publicRoutes = [
  {
    path: '/login',
    element: <div>login</div>,
  },
];
