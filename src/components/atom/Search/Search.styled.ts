import styled from 'styled-components/native';
import {
  BORDER_RADIUS,
  INPUT_HEIGHT,
  ITEM_MARGIN,
  GLOBAL_PADDING,
  SHADOW_EFFECT,
} from '../../../styles/theme';

export const Container = styled.View`
  ${SHADOW_EFFECT}
  border-radius: ${BORDER_RADIUS}px;
  margin-bottom: ${ITEM_MARGIN}px;
  width: 100%;
  padding-left: ${GLOBAL_PADDING}px;
  padding-right: ${INPUT_HEIGHT}px;
`;

export const InputSearch = styled.TextInput`
  height: ${INPUT_HEIGHT}px;
  width: 100%;
`;

export const Option = styled.TouchableOpacity`
  left: ${GLOBAL_PADDING}px;
  position: relative;
  overflow: hidden;
`;

export const OptionText = styled.Text`
  height: ${INPUT_HEIGHT}px;
  line-height: ${INPUT_HEIGHT}px;
`;

export const SearchButton = styled.TouchableOpacity`
  position: absolute;
  right: -${GLOBAL_PADDING}px;
  top: -${GLOBAL_PADDING}px;
`;

const iconSpace = 8;
export const SearchIcon = styled.Image`
  position: absolute;
  right: ${GLOBAL_PADDING + iconSpace / 2}px;
  top: ${GLOBAL_PADDING + iconSpace / 2}px;
  width: ${INPUT_HEIGHT - iconSpace}px;
  height: ${INPUT_HEIGHT - iconSpace}px;
`;

export default Container;
