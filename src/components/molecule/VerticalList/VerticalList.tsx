import React from 'react';
import LargeItem from '../../atom/LargeItem/LargeItem';
import Container from './VerticalList.styled';

const VerticalList = ({}: any) => {
  const items = [1, 2, 3, 4, 5, 6, 7];

  return (
    <Container>
      {items.map(item => (
        <LargeItem key={item} />
      ))}
    </Container>
  );
};

export default VerticalList;
