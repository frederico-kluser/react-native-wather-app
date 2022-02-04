import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import kluserMotion from '../../../helpers/animation';
import {deviceHeight, deviceWidth} from '../../../helpers/dimentions';
import {PAGE_PADDING} from '../../../styles/theme';
import Title from '../../atom/Title/Title';
import Container, {viewStyle} from './ItemModal.styled';

const ItemModal = ({index, name, setSelectedItem, scrollY}: any) => {
  const topSize = 100 * index + 16 * (index + 1);
  const animationTime = 500;

  const [style, setStyle] = useState({
    top: kluserMotion(topSize, scrollY),
    left: kluserMotion(16, 0),
    width: kluserMotion(deviceWidth - PAGE_PADDING * 2, deviceWidth),
    height: kluserMotion(100, deviceHeight),
  });

  useEffect(() => {
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
      )}>
      <Container
        index={index}
        onPress={() => {
          setStyle({
            top: style.top.reverse(),
            left: style.left.reverse(),
            width: style.width.reverse(),
            height: style.height.reverse(),
          });
          setTimeout(() => {
            setSelectedItem(-1);
          }, animationTime + 50);
        }}>
        <Title text={name} />
      </Container>
    </Animated.View>
  );
};

export default ItemModal;
