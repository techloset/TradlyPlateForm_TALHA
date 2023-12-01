import React from 'react';
import {StyleSheet, Text} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IconSearch from 'react-native-vector-icons/Feather';
import IconUser from 'react-native-vector-icons/FontAwesome';
import IconStore from 'react-native-vector-icons/FontAwesome6';
import IconHome from 'react-native-vector-icons/Foundation';
import Iconclipboard from 'react-native-vector-icons/MaterialCommunityIcons';
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
                    <IconStore name={item.icon} size={20} color={iconColor} />
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
            tabBarLabel: ({focused}) => {
              const textColor = focused ? COLOR.bodygreen : COLOR.dimblack;
              return (
                <Text style={{color: textColor, fontSize: 12, fontWeight: 500}}>
                  {item.name}
                </Text>
              );
            },
          })}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNav;

const styles = StyleSheet.create({});
