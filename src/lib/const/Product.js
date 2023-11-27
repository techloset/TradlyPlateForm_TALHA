export const Product = [
  {
    title: 'Coca Cola',
    source: require('../../assets/images/cola.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Brocolli',
    source: require('../../assets/images/brocolli.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Apple',
    source: require('../../assets/images/apple.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Orange',
    source: require('../../assets/images/orange.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Moisturiser',
    source: require('../../assets/images/moisturiser.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];

export const PopularProduct = [
  {
    title: 'Fish',
    source: require('../../assets/images/fish.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$15',
    //   lastPrice:"$35"
  },
  {
    title: 'Shampoo',
    source: require('../../assets/images/shampoo.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Coca Cola',
    source: require('../../assets/images/cola.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Orange',
    source: require('../../assets/images/orange.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];

export const Store = [
  {
    title: 'Tradly Store',
    source: require('../../assets/images/tradlyStore.png'),
    avatar: require('../../assets/images/Ticon.png'),
  },
  {
    title: 'Grocery Store',
    source: require('../../assets/images/groceryStore.png'),
    avatar: require('../../assets/images/Aicon.png'),
  },
  {
    title: 'Tradly Store',
    source: require('../../assets/images/tradlyStore.png'),
    avatar: require('../../assets/images/Ticon.png'),
  },
];

export const ProductDetails = [
  {
    currentStatus: 'Condition',
    result: 'Organic',
  },
  {
    currentStatus: 'Price Type',
    result: 'Fixed',
  },
  {
    currentStatus: 'Category',
    result: 'Beverages',
  },
  {
    currentStatus: 'Location',
    result: 'Kualalumpur, Malaysia',
  },
];

export const PriceDetailsCard = [
  {
    title: 'Price (1 item)',
    price: '$25',
  },
  {
    title: 'Delivery Fee',
    price: 'Info',
  },
  {
    title: 'Total Amount',
    price: '$25',
  },
];
export const TextInputLoop = [
  {
    Name: 'Name',
    placeHolder: 'Name',
  },
  {
    Name: 'Phone',
    placeHolder: 'Phone',
  },
  {
    Name: 'Street Adress',
    placeHolder: 'Street Adress',
  },
  {
    Name: 'City',
    placeHolder: 'City',
  },
  {
    Name: 'state',
    placeHolder: 'State',
  },
  {
    Name: 'ZipCode',
    placeHolder: 'ZipCode',
  },
];

export const CreateStoreInput = [
  {
    placeHolder: 'Store Name',
  },
  {
    placeHolder: 'Store Web Address',
  },
  {
    placeHolder: 'Store Description',
  },
  {
    placeHolder: 'Store Type',
  },
  {
    placeHolder: 'Address',
  },
  {
    placeHolder: 'City',
  },
  {
    placeHolder: 'State',
  },
  {
    placeHolder: 'Country',
  },
  {
    placeHolder: 'Courier Name',
  },
  {
    placeHolder: 'TagLine',
  },
];
export const AddProductInput = [
  {
    placeHolder: 'Product Name',
  },
  {
    placeHolder: 'Catogery Product',
  },
  {
    placeHolder: 'Price',
  },
  {
    placeHolder: 'Offer Price',
  },
  {
    placeHolder: 'Location Details',
  },
  {
    placeHolder: 'Product Description',
  },
  {
    placeHolder: 'Condition',
  },
  {
    placeHolder: 'Price Type',
  },
  {
    placeHolder: 'Additional Details',
  },
  {
    placeHolder: 'TagLine',
  },
];

export const OrderHistroyList = [
  {
    title: 'Coca Cola',
    source: require('../../assets/images/colaCart.png'),
    price: '$25',
    lastPrice: '50% off',
    button: {
      label: 'Delivered',
      // onPress: () => console.log('Button clicked for Coca Cola'),
      onPress: navigation => navigation.navigate('OrderPlaced'),
    },
  },
  {
    title: 'Coca Cola',
    source: require('../../assets/images/colaCart.png'),
    price: '$25',
    lastPrice: '50% off',
    button: {
      label: 'Order placed',
    },
  },
  {
    title: 'Coca Cola',
    source: require('../../assets/images/colaCart.png'),
    price: '$25',
    lastPrice: '50% off',
    button: {
      label: 'Payment confirmed',
    },
  },
  {
    title: 'Coca Cola',
    source: require('../../assets/images/colaCart.png'),
    price: '$25',
    lastPrice: '50% off',
    button: {
      label: 'Processed',
    },
  },
];

export const TrackOrder = [
  {
    title: 'Order Placed',
    date: '05/08/2019',
    subtitle: 'Order#123455 from Fashion Point',
    time: '11:10 AM',
  },
  {
    title: 'Payment Confirmed',
    date: '05/08/2019',
    subtitle: 'Payment Confirmed Status',
    time: '11:10 AM',
  },
  {
    title: 'Processed',
    date: '05/08/2019',
    subtitle: 'Processed Status',
    time: '11:10 AM',
  },
  {
    title: 'Delivered',
    date: '05/08/2019',
    subtitle: 'Delivered Status',
    time: '11:10 AM',
  },
];

export const ProfileOptions = [
  {
    title: 'Edit Profile',
  },
  {
    title: 'Language & Currency',
  },
  {
    title: 'Feedback',
  },
  {
    title: 'Refer a Friend',
  },
  {
    title: 'Refer a Friend',
  },
  {
    title: 'Logout',
  },
];

export const Beverage = [
  {
    title: 'Strawberry Punch',
    source: require('../../assets/images/stawberyPunch.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Lemonade',
    source: require('../../assets/images/lemonade.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Chocolate',
    source: require('../../assets/images/chocolate.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Whisky',
    source: require('../../assets/images/wiskey.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Chocolate Bakery',
    source: require('../../assets/images/bakery.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Fruit Punch',
    source: require('../../assets/images/fruitPunch.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];

export const Bakery = [
  {
    title: 'Bread Chocolate',
    source: require('../../assets/images/bread1.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Circle Bakery',
    source: require('../../assets/images/bread2.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Cookies',
    source: require('../../assets/images/bread3.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Long Bread',
    source: require('../../assets/images/bread4.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Donut',
    source: require('../../assets/images/bread5.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Bread',
    source: require('../../assets/images/bread6.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];

export const Vege = [
  {
    title: 'Carrot',
    source: require('../../assets/images/veg1.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Cabbage',
    source: require('../../assets/images/veg2.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Tomato',
    source: require('../../assets/images/veg3.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Garlic',
    source: require('../../assets/images/veg4.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Tomato',
    source: require('../../assets/images/veg5.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Corn',
    source: require('../../assets/images/veg6.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];

export const Fruit = [
  {
    title: 'Avocado',
    source: require('../../assets/images/fruit1.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Banana',
    source: require('../../assets/images/fruit2.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Orange',
    source: require('../../assets/images/fruit3.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Papaya',
    source: require('../../assets/images/fruit4.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Pineapple',
    source: require('../../assets/images/fruit5.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Watermelon',
    source: require('../../assets/images/fruit6.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];

export const Eggs = [
  {
    title: 'Brown egg',
    source: require('../../assets/images/egg1.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Fresh Egg',
    source: require('../../assets/images/egg2.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Bundle Egg',
    source: require('../../assets/images/egg3.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Blue Egg',
    source: require('../../assets/images/egg4.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Bird Egg',
    source: require('../../assets/images/egg5.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Egg',
    source: require('../../assets/images/egg6.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];

export const FrozenVegs = [
  {
    title: 'Ice Cream',
    source: require('../../assets/images/frozen1.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Manggo Ice',
    source: require('../../assets/images/frozen2.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Strawberry Ice',
    source: require('../../assets/images/frozen3.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Matcha',
    source: require('../../assets/images/frozen4.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Grape Ice Cream',
    source: require('../../assets/images/frozen5.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Frozen Bottle',
    source: require('../../assets/images/frozen6.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];
export const HomeCare = [
  {
    title: 'Moisturizer',
    source: require('../../assets/images/care1.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Vitamin Bundle',
    source: require('../../assets/images/care2.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Shower Gel',
    source: require('../../assets/images/care3.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Facial Wash',
    source: require('../../assets/images/care4.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Onne Beauty',
    source: require('../../assets/images/care5.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
  {
    title: 'Fur Moisturozer',
    source: require('../../assets/images/care6.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];
export const Pet = [
  {
    title: 'Pet Snack',
    source: require('../../assets/images/Pet1.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
    lastPrice: '$35',
  },
  {
    title: 'Potion Pet',
    source: require('../../assets/images/Pet2.png'),
    avatar: require('../../assets/images/Tavatar.png'),
    subtitle: 'Tradly',
    price: '$25',
  },
];
