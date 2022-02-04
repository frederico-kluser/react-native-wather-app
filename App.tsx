/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import Home from './src/pages/Home/Home';

const App = () => {
  const handleScroll = (event: any) => {
    setScrollY(event.nativeEvent.contentOffset.y);
  };
  const [scroll, setScroll] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView scrollEnabled={scroll} onScroll={handleScroll}>
        <Home scrollY={scrollY} setScroll={setScroll} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
