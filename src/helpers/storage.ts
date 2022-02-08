import {AsyncStorage} from 'react-native';

export const save = async value => await AsyncStorage.setItem('weather', value);

export const load = async () => await AsyncStorage.getItem('weather');
