import styled from 'styled-components/native';
import {itemSize} from '../../../helpers/dimentions';

interface ContainerInterface {
  marginRight: boolean;
}

interface WeatherInfoInterface {
  rightPosition?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerInterface>`
  ${({marginRight}) => marginRight && 'margin-right: 32px;'}
  background-color: #fff;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  box-sizing: border-box;
  height: ${itemSize}px;
  margin-bottom: 32px;
  padding: 16px;
  width: ${itemSize}px;
`;

export const Temperature = styled.Text`
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
