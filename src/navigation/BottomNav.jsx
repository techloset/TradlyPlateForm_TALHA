import React from 'react';
import {StyleSheet} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Browser from '../screens/Browser';
import Home from '../screens/Home';
import OrderHistroy from '../screens/OrderHistroy';
import Profile from '../screens/Profile';
import Store from '../screens/Store';
import IconHome from 'react-native-vector-icons/Foundation';
import IconSearch from 'react-native-vector-icons/Feather';
import IconStore from 'react-native-vector-icons/FontAwesome6';
import Iconclipboard from 'react-native-vector-icons/MaterialCommunityIcons';
import IconUser from 'react-native-vector-icons/FontAwesome';
import {COLOR} from '../styles/GlobalStyles';
import {TabNavData} from './TabNavData';

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {TabNavData.map((item, index) => (
        <Tab.Screen
          key={index}
          name={item.name}
          component={item.component}
          options={({route}) => ({
            tabBarIcon: ({focused}) => {
              const iconColor = focused ? COLOR.bodygreen : COLOR.dimblack;
              let iconComponent;
              switch (item.name) {
                case 'Home':
                  iconComponent = (
                    <IconHome name={item.icon} size={25} color={iconColor} />
                  );
                  break;
                case 'Browser':
                  iconComponent = (
                    <IconSearch name={item.icon} size={25} color={iconColor} />
                  );
                  break;
                case 'Store':
                  iconComponent = (
                    <IconStore name={item.icon} size={25} color={iconColor} />
                  );
                  break;
                case 'OrderHistroy':
                  iconComponent = (
                    <Iconclipboard
                      name={item.icon}
                      size={25}
                      color={iconColor}
                    />
                  );
                  break;
                case 'Profile':
                  iconComponent = (
                    <IconUser name={item.icon} size={25} color={iconColor} />
                  );
                  break;
                default:
                  iconComponent = null;
              }
              return iconComponent;
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});

{
  /* <Tab.Screen name="Home" component={Home} />
<Tab.Screen name="Browser" component={Browser} />
<Tab.Screen name="Store" component={Store} />
<Tab.Screen name="OrderHistroy" component={OrderHistroy} />
<Tab.Screen name="Profile" component={Profile} /> */
}
