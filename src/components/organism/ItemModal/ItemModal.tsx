import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import kluserMotion, {animationTime} from '../../../helpers/animation';
import {deviceHeight, deviceWidth, itemSize} from '../../../helpers/dimentions';
import {closeIcon2, IconProps, weatherIcons} from '../../../styles/icons';
import {INPUT_HEIGHT, ITEM_MARGIN, GLOBAL_PADDING} from '../../../styles/theme';
import HorizontalCarousel from '../../molecule/HorizontalCarousel/HorizontalCarousel';
import VerticalList from '../../molecule/VerticalList/VerticalList';
import {
  CloseButton,
  CloseIcon,
  Container,
  ContentContainer,
  TitleCity,
  TitleIcon,
  TitleTemperature,
  viewStyle,
} from './ItemModal.styled';

export interface ItemModalInterface {
  city: string;
  index: number;
  scrollY: number;
  setSelectedItem: Function;
  status: IconProps;
  temperature: number;
}

const ItemModal = ({
  index,
  city,
  optionsQuantity,
  status,
  setSelectedItem,
  scrollY,
  temperature,
}: ItemModalInterface) => {
  const distanceFromTop = Math.ceil((index + 1) / 2);
  const sizeMultiplier = distanceFromTop - 1;
  const marginMultiplier = sizeMultiplier
    ? GLOBAL_PADDING * 2 * sizeMultiplier
    : 0;
  const optionsTotalHeight = optionsQuantity * INPUT_HEIGHT;
  const inputHeight = INPUT_HEIGHT + ITEM_MARGIN;
  const topSize =
    itemSize * sizeMultiplier +
    marginMultiplier +
    GLOBAL_PADDING +
    inputHeight +
    optionsTotalHeight;

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
      <CloseButton
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
        }}>
        <CloseIcon source={closeIcon2} />
      </CloseButton>
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
