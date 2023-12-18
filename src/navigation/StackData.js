import SCREENS from '../lib/const/Screen';
import AddProduct from '../screens/AddProduct';
import Beverages from '../screens/Beverages';
import CartSceen from '../screens/CartSceen';
import CheckOutFirst from '../screens/CheckOutFirst';
import CheckOutSecond from '../screens/CheckOutSecond';
import CreateStore from '../screens/CreateStore';
import MyStore from '../screens/MyStore';
import OnBoarding from '../screens/OnBoarding';
import OrderPlaced from '../screens/OrderPlaced';
import ProductDetail from '../screens/ProductDetail';
import TradlyStore from '../screens/TradlyStore';
import WhishList from '../screens/WhishList';
import LoginScreen from '../screens/auth/LoginScreen';
import Otp from '../screens/auth/Otp';
import OtpVerifications from '../screens/auth/OtpVerifications';
import SignUp from '../screens/auth/SignUp';
import BakeryBread from '../screens/productDetail/BakeryBread';
import Eggg from '../screens/productDetail/Eggg';
import FrozenVeg from '../screens/productDetail/FrozenVeg';
import Fruits from '../screens/productDetail/Fruits';
import HomeCaree from '../screens/productDetail/HomeCaree';
import PetCare from '../screens/productDetail/PetCare';
import Vegetables from '../screens/productDetail/Vegetables';
import BottomNav from './BottomNav';


const NAVIGATION = [
  {
    screenName: SCREENS.OnBoarding,
    component: OnBoarding,
  },
  {
    screenName: SCREENS.LoginScreen,
    component: LoginScreen,
  },
  {
    screenName: SCREENS.SignUp,
    component: SignUp,
  },
  {
    screenName: SCREENS.Otp,
    component: Otp,
  },
  {
    screenName: SCREENS.OtpVerifications,
    component: OtpVerifications,
  },
  {
    screenName: SCREENS.BottomNav,
    component: BottomNav,
  },
  {
    screenName: SCREENS.CartSceen,
    component: CartSceen,
  },
  {
    screenName: SCREENS.CreateStore,
    component: CreateStore,
  },
  {
    screenName: SCREENS.MyStore,
    component: MyStore,
  },
  {
    screenName: SCREENS.TradlyStore,
    component: TradlyStore,
  },
  {
    screenName: SCREENS.AddProduct,
    component: AddProduct,
  },
  {
    screenName: SCREENS.OrderPlaced,
    component: OrderPlaced,
  },
  {
    screenName: SCREENS.ProductDetail,
    component: ProductDetail,
  },
  {
    screenName: SCREENS.WhishList,
    component: WhishList,
  },
  {
    screenName: SCREENS.CheckOutFirst,
    component: CheckOutFirst,
  },
  {
    screenName: SCREENS.CheckOutSecond,
    component: CheckOutSecond,
  },
  {
    screenName: SCREENS.Beverages,
    component: Beverages,
  },
  {
    screenName: SCREENS.BakeryBread,
    component: BakeryBread,
  },
  {
    screenName: SCREENS.Vegetables,
    component: Vegetables,
  },
  {
    screenName: SCREENS.Fruits,
    component: Fruits,
  },
  {
    screenName: SCREENS.Eggg,
    component: Eggg,
  },
  {
    screenName: SCREENS.FrozenVeg,
    component: FrozenVeg,
  },
  {
    screenName: SCREENS.HomeCaree,
    component: HomeCaree,
  },
  {
    screenName: SCREENS.PetCare,
    component: PetCare,
  },
  
];


export default NAVIGATION;