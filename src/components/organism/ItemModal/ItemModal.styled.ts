import styled from 'styled-components/native';
import {deviceHeight, deviceWidth} from '../../../helpers/dimentions';

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
