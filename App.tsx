/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './src/pages/Home/Home';
import City from './src/pages/City/City';

const Stack = createNativeStackNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Weather',
            }}
          />
          <Stack.Screen name="City" component={City} />
        </Stack.Navigator>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
