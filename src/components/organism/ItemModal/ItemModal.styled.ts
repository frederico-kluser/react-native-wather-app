import styled from 'styled-components/native';
import {deviceHeight, deviceWidth} from '../../../helpers/dimentions';

export const BG = styled.Image`
  position: absolute;
  width: ${deviceWidth}px;
  left: 0px;
  top: -230px;
`;

export const viewStyle = (
  left: any,
  top: any,
  width: any,
  height: any,
  borderRadius: any,
) => ({
  backgroundColor: '#fff',
  borderRadius,
  height,
  left,
  overflow: 'hidden',
  position: 'absolute',
  top,
  width,
  zIndex: 1,
});

const Button = styled.TouchableOpacity`
  background-color: #000;
  height: 20px;
  left: 0px;
  position: absolute;
  top: 0px;
  width: 20px;
  z-index: 2;
`;

export const Container = styled.View`
  padding: 16px;
  padding-top: 64px;
  width: ${deviceWidth}px;
  height: ${deviceHeight}px;
`;

export const TitleCity = styled.Text`
  font-size: 30px;
  color: black;
`;

export const TitleTemperature = styled.Text`
  font-size: 96px;
  color: black;
`;

export const TitleIcon = styled.Image`
  height: 256px;
  position: absolute;
  right: -64px;
  top: 0px;
  width: 256px;
`;

export const ContentContainer = styled.View`
  top: 47px;
`;

export default Button;
