import React from 'react';
import {Text, Pressable} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../screens/Home';
import Card from '../screens/Card';

export default function Navigation() {
  const RootStack = createNativeStackNavigator();
  const RootStackScreen = () => (
    <RootStack.Navigator>
      <RootStack.Group>
        <RootStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </RootStack.Group>
      <RootStack.Group
        screenOptions={({navigation}) => ({
          presentation: 'modal',
          headerStyle: {backgroundColor: '#5941A9'},
          headerTintColor: '#fff',
          headerLeft: () => (
            <Pressable onPress={() => navigation.pop()}>
              <Icon name="ios-close" size={24} color="#fff" />
            </Pressable>
          ),
        })}>
        <RootStack.Screen name="Card" component={Card} />
      </RootStack.Group>
    </RootStack.Navigator>
  );

  return (
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  );
}
