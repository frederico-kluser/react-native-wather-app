import styled from 'styled-components/native';
import {itemSize} from '../../../helpers/dimentions';
import {RED} from '../../../styles/colors';
import {BORDER_RADIUS, ITEM_MARGIN, SHADOW_EFFECT} from '../../../styles/theme';

interface ContainerInterface {
  favorite: boolean;
  marginRight: boolean;
}

interface WeatherInfoInterface {
  rightPosition?: boolean;
}

interface TemperatureInterface {
  favorite?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerInterface>`
  ${({marginRight}) => marginRight && `margin-right: ${ITEM_MARGIN}px;`}
  ${SHADOW_EFFECT}
  ${({favorite}) => favorite && `border: 2px solid ${RED};`})}
  border-radius: ${BORDER_RADIUS}px;
  box-sizing: border-box;
  height: ${itemSize}px;
  margin-bottom: ${ITEM_MARGIN}px;
  padding: 16px;
  width: ${itemSize}px;
`;

export const Temperature = styled.Text<TemperatureInterface>`
  ${({favorite}) => favorite && `color: ${RED};`})}
  font-size: 37px;
`;

export const City = styled.Text`
  font-size: 12px;
  font-weight: 500;
  margin-top: 8px;
`;

export const Country = styled.Text`
  font-size: 12px;
  margin-top: 6px;
`;

export const WeatherIcon = styled.Image`
  height: 64px;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 64px;
`;

export const WeatherInfo = styled.View<WeatherInfoInterface>`
  ${({rightPosition}) => (rightPosition ? 'right' : 'left')}: 16px;
  bottom: 16px;
  flex-direction: row;
  position: absolute;
`;

export const WeatherInfoIcon = styled.Image`
  height: 15px;
  width: 15px;
`;

export const WeatherInfoText = styled.Text`
  font-size: 12px;
  font-weight: bold;
`;

export default Container;
