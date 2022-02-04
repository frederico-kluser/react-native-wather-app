import {Dimensions} from 'react-native';
import {PAGE_PADDING} from '../styles/theme';

export const deviceWidth = Dimensions.get('window').width;

export const deviceHeight = Dimensions.get('window').height;

export const itemSize = deviceWidth / 2 - PAGE_PADDING * 2;
