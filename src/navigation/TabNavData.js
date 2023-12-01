import Browser from '../screens/Browser';
import Home from '../screens/Home';
import OrderHistroy from '../screens/OrderHistroy';
import Profile from '../screens/Profile';
import Store from '../screens/Store';

export const TabNavData = [
  {
    name: 'Home',
    component: Home,
    icon: 'home',
  },
  {
    name: 'Browser',
    component: Browser,
    icon: 'search',
  },
  {
    name: 'Store',
    component: Store,
    icon: 'store',
  },
  {
    name: 'OrderHistroy',
    component: OrderHistroy,
    icon: 'clipboard-text',
  },
  {
    name: 'Profile',
    component: Profile,
    icon: 'user',
  },
];
