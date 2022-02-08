import styled from 'styled-components/native';
import {GLOBAL_PADDING, ICON_SIZE} from '../../../styles/theme';

export const DeleteContainer = styled.TouchableOpacity`
  position: absolute;
  bottom: 11%;
  left: 0px;
  width: 100%;
`;

export const DeleteMessage = styled.Text`
  left: ${GLOBAL_PADDING}px;
  text-align: center;
`;

export const DeleteIcon = styled.Image`
  position: absolute;
  bottom: 20px;
  left: 50%;
`;

export const CloseContainer = styled.TouchableOpacity`
  right: ${GLOBAL_PADDING}px;
  position: absolute;
  top: ${GLOBAL_PADDING}px;
  z-index: 2;
`;

export const FavoriteContainer = styled.TouchableOpacity`
  left: ${GLOBAL_PADDING}px;
  position: absolute;
  top: ${GLOBAL_PADDING}px;
  z-index: 2;
`;

export const OnlyIcon = styled.Image`
  height: ${ICON_SIZE}px;
  width: ${ICON_SIZE}px;
`;
