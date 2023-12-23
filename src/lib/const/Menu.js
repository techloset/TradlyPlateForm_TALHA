import SCREENS from './Screen';

const Menu = [
  {
    title: 'Beverages',
    source: require('../../assets/images/Beverage.png'),
    screen:SCREENS.Beverages
  },
  {
    title: 'Bread and Bakary',
    source: require('../../assets/images/bakary.png'),
    screen:SCREENS.BakeryBread
  },
  {
    title: 'Vegitables',
    source: require('../../assets/images/vegitables.png'),
    screen:SCREENS.Vegetables
  },
  {
    title: 'Fruit',
    source: require('../../assets/images/Fruit.png'),
    screen:SCREENS.Fruits
  },
  {
    title: 'Eggs',
    source: require('../../assets/images/Eggs.png'),
    screen:SCREENS.Eggg
  },
  {
    title: 'FrozenVeg',
    source: require('../../assets/images/FrozenVeg.png'),
    screen:SCREENS.FrozenVeg
  },
  {
    title: 'HomeCare',
    source: require('../../assets/images/HomeCare.png'),
    screen:SCREENS.HomeCaree
  },
  {
    title: 'Pet Care',
    source: require('../../assets/images/petCare.png'),
    screen:SCREENS.PetCare
  },
];

export default Menu;
