import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import BookingDetails from './BookingDetails';
const BookingStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BookingDetails"
        component={BookingDetails}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default BookingStack;
