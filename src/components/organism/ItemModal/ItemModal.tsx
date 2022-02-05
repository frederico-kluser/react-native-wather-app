import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import kluserMotion, {animationTime} from '../../../helpers/animation';
import {deviceHeight, deviceWidth, itemSize} from '../../../helpers/dimentions';
import {weatherIcons} from '../../../styles/icons';
import {PAGE_PADDING} from '../../../styles/theme';
import HorizontalCarousel from '../../molecule/HorizontalCarousel/HorizontalCarousel';
import VerticalList from '../../molecule/VerticalList/VerticalList';
import Button, {
  BG,
  Container,
  ContentContainer,
  TitleCity,
  TitleIcon,
  TitleTemperature,
  viewStyle,
} from './ItemModal.styled';

const ItemModal = ({
  index,
  city,
  status,
  setSelectedItem,
  scrollY,
  temperature,
}: any) => {
  const distanceFromTop = Math.ceil((index + 1) / 2);
  const sizeMultiplier = distanceFromTop - 1;
  const marginMultiplier = sizeMultiplier
    ? PAGE_PADDING * 2 * sizeMultiplier
    : 0;
  const topSize = itemSize * sizeMultiplier + marginMultiplier + PAGE_PADDING;

  const leftSize = index % 2 === 0 ? 16 : deviceWidth - (itemSize + 16);

  const [style, setStyle] = useState({
    borderRadius: kluserMotion(16, 0),
    top: kluserMotion(topSize, scrollY),
    left: kluserMotion(leftSize, 0),
    width: kluserMotion(itemSize, deviceWidth),
    height: kluserMotion(itemSize, deviceHeight),
  });

  useEffect(() => {
    style.borderRadius.start();
    style.top.start();
    style.left.start();
    style.width.start();
    style.height.start();
  }, [style]);

  return (
    <Animated.View
      style={viewStyle(
        style.left.animation,
        style.top.animation,
        style.width.animation,
        style.height.animation,
        style.borderRadius.animation,
      )}>
      <Button
        index={index}
        onPress={() => {
          setStyle({
            borderRadius: style.borderRadius.reverse(),
            top: style.top.reverse(),
            left: style.left.reverse(),
            width: style.width.reverse(),
            height: style.height.reverse(),
          });
          setTimeout(() => {
            setSelectedItem(-1);
          }, animationTime);
        }}
      />
      <Container>
        <TitleIcon source={weatherIcons[status]} />
        <TitleCity>{city}</TitleCity>
        <TitleTemperature>{temperature}°</TitleTemperature>
        <ContentContainer>
          <HorizontalCarousel />
          <VerticalList />
        </ContentContainer>
      </Container>
    </Animated.View>
  );
};

export default ItemModal;
