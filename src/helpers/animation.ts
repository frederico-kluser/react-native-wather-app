/* eslint-disable react-hooks/rules-of-hooks */
import {useRef} from 'react';
import {Animated} from 'react-native';

const kluserMotion = (from: number, toValue: number, duration: number) => {
  const element = useRef(new Animated.Value(from)).current;
  const reverseElement = useRef(new Animated.Value(toValue || 0)).current;

  return {
    animation: element,
    start: () => {
      Animated.timing(element, {
        toValue,
        duration,
        useNativeDriver: false,
      }).start();
    },
    reverse: () => ({
      animation: reverseElement,
      start: () => {
        Animated.timing(reverseElement, {
          toValue: from,
          duration,
          useNativeDriver: false,
        }).start();
      },
    }),
  };
};

export default kluserMotion;
