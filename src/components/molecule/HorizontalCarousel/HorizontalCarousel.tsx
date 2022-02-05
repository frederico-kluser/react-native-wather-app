import React from 'react';
import SmallItem from '../../atom/SmallItem/SmallItem';
import Container, {Content, Title} from './HorizontalCarousel.styled';

const HorizontalCarousel = ({}: any) => (
  <Container>
    <Title>Today</Title>
    <Content horizontal={true}>
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
      <SmallItem />
    </Content>
  </Container>
);

export default HorizontalCarousel;
