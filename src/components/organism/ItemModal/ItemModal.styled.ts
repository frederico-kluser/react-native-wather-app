import styled from 'styled-components/native';
import {deviceHeight, deviceWidth} from '../../../helpers/dimentions';
import {GLOBAL_PADDING} from '../../../styles/theme';

type Overflow = 'hidden' | 'scroll' | 'visible';
type Position = 'absolute' | 'relative';

interface viewStyleObjInterface {
  overflow: Overflow;
  position: Position;
}

const viewStyleObj: viewStyleObjInterface = {
  overflow: 'hidden',
  position: 'absolute',
};

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
  top,
  width,
  zIndex: 1,
  ...viewStyleObj,
});

interface ButtonInterface {
  index: number;
}

export const CloseButton = styled.TouchableOpacity<ButtonInterface>`
  right: ${GLOBAL_PADDING}px;
  position: absolute;
  top: ${GLOBAL_PADDING}px;
  z-index: 2;
`;

export const CloseIcon = styled.Image`
  height: 32px;
  width: 32px;
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
  position: absolute;
  bottom: 15%;
  left: 16px;
  height: auto;
`;
