import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import BookingStack from '../BookingsFlow';
import DiscoveryStack from '../DiscoverFlow';

Icons.loadFont();

const TabStack = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      initialRouteName="DiscoveryStack"
      screenOptions={{
        tabBarShowLabel: true,
      }}>
      <Tab.Screen
        name="Discovery"
        component={DiscoveryStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#ff8c00',
          tabBarInactiveTintColor: '#808080',
          tabBarShowLabel: true,
          tabBarIcon: tabInfo => (
            <Icons
              name="search"
              size={25}
              color={tabInfo.focused ? '#ff8c00' : '#808080'}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookings"
        component={BookingStack}
        options={{
          headerShown: false,
          tabBarActiveTintColor: '#ff8c00',
          tabBarInactiveTintColor: '#808080',
          tabBarShowLabel: true,
          tabBarIcon: tabInfo => (
            <Icons
              name="hand-o-up"
              size={25}
              color={tabInfo.focused ? '#ff8c00' : '#808080'}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
