import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import DiscoveryDetails from './DiscoveryDetails';
import CityDetails from './CityDetails';
import ExperienceDetails from './ExperienceDetails';
const DiscoveryStack = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen
        name="DiscoveryDetails"
        component={DiscoveryDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CityDetails"
        component={CityDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ExperienceDetails"
        component={ExperienceDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default DiscoveryStack;
