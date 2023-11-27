const Menu = [
  {
    title: 'Beverages',
    source: require('../../assets/images/Beverage.png'),
    onPress: navigation => navigation.navigate('Beverages'),
  },
  {
    title: 'Bread and Bakary',
    source: require('../../assets/images/bakary.png'),
    onPress: navigation => navigation.navigate('BakeryBread'),
  },
  {
    title: 'Vegitables',
    source: require('../../assets/images/vegitables.png'),
    onPress: navigation => navigation.navigate('Vegetables'),
  },
  {
    title: 'Fruit',
    source: require('../../assets/images/Fruit.png'),
    onPress: navigation => navigation.navigate('Fruits'),
  },
  {
    title: 'Eggs',
    source: require('../../assets/images/Eggs.png'),
    onPress: navigation => navigation.navigate('Eggg'),
  },
  {
    title: 'FrozenVeg',
    source: require('../../assets/images/FrozenVeg.png'),
    onPress: navigation => navigation.navigate('FrozenVeg'),
  },
  {
    title: 'HomeCare',
    source: require('../../assets/images/HomeCare.png'),
    onPress: navigation => navigation.navigate('HomeCaree'),
  },
  {
    title: 'Pet Care',
    source: require('../../assets/images/petCare.png'),
    onPress: navigation => navigation.navigate('PetCare'),
  },
];

export default Menu;
