import styled from 'styled-components/native';
import {deviceWidth} from '../../helpers/dimentions';
import {GLOBAL_PADDING} from '../../styles/theme';

export const Container = styled.View`
  padding: ${GLOBAL_PADDING}px;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Logo = styled.Image`
  left: ${deviceWidth / 2 - 100 - GLOBAL_PADDING}px;
  position: relative;
  margin-top: 350px;
  height: 200;
  width: 200;
`;
