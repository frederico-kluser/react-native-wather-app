import React from 'react';
import LargeItem from '../../atom/LargeItem/LargeItem';
import Container from './VerticalList.styled';

const VerticalList = ({nextDays}: any) => (
  <Container>
    {!!nextDays &&
      nextDays.map(
        ({dt, temp, weather}: any, index: number) =>
          index < 7 && (
            <LargeItem
              key={dt}
              text={dt}
              min={temp.min}
              max={temp.max}
              icon={weather[0].description}
            />
          ),
      )}
  </Container>
);

export default VerticalList;
