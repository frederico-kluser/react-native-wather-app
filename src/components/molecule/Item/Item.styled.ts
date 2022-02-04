import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
  background-color: #fff;
  border: 2px solid #000;
  border-radius: 16px;
  height: 100px;
  padding: 16px;
  position: relative;
  width: 100%;
  margin-bottom: ${({lastElement}) => (lastElement ? '0px' : '16px')};
`;

export default Container;
