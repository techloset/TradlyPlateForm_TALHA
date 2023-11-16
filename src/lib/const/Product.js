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
    price : '$25',
    lastPrice: "50% off",
    button: {
      label: 'Delivered',
      // onPress: () => console.log('Button clicked for Coca Cola'),
      onPress: (navigation) => navigation.navigate('OrderPlaced'),
    },
  },
  {
    title: 'Coca Cola',
    source: require('../../assets/images/colaCart.png'),
    price : '$25',
    lastPrice: "50% off",
    button: {
      label: 'Order placed',
     
    },
  },
  {
    title: 'Coca Cola',
    source: require('../../assets/images/colaCart.png'),
    price : '$25',
    lastPrice: "50% off",
    button: {
      label: 'Payment confirmed',
    },
  },
  {
    title: 'Coca Cola',
    source: require('../../assets/images/colaCart.png'),
    price : '$25',
    lastPrice: "50% off",
    button: {
      label: 'Processed',
    },
  },
];