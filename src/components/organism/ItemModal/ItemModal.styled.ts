import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background-color: lightgray;
  height: 100px;
  left: 0px;
  padding: 16px;
  position: relative;
  top: 0px;
  width: 100%;
`;

export const viewStyle = (left: any, top: any, width: any, height: any) => ({
  backgroundColor: 'red',
  borderRadius: left,
  height,
  left,
  overflow: 'hidden',
  position: 'absolute',
  top,
  width,
  zIndex: 1,
});

export default Container;
