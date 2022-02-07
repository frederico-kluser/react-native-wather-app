import {Dimensions} from 'react-native';
import {GLOBAL_PADDING} from '../styles/theme';

export const deviceWidth = Dimensions.get('window').width;

export const deviceHeight = Dimensions.get('window').height;

export const itemSize = deviceWidth / 2 - GLOBAL_PADDING * 2;
