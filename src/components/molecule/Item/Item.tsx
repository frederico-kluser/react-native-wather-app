import React from 'react';
import Title from '../../atom/Title/Title';
import Container from './Item.styled';

const Item = ({index, name, func = () => {}, lastElement}: any) => (
  <Container lastElement={lastElement} onPress={() => func(index)}>
    <Title text={name} />
  </Container>
);

export default Item;
