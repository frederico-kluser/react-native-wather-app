import React, {useState, useEffect} from 'react';
import {Animated} from 'react-native';
import kluserMotion from '../../../helpers/animation';
import Title from '../../atom/Title/Title';
import Container, {viewStyle} from './ItemModal.styled';

const ItemModal = ({index, name, setSelectedItem, scrollY}: any) => {
  const topSize = 100 * index + 16 * (index + 1);
  const animationTime = 750;

  const [style, setStyle] = useState({
    top: kluserMotion(topSize, scrollY, animationTime),
    left: kluserMotion(16, 0, animationTime),
  });

  useEffect(() => {
    style.top.start();
    style.left.start();
  }, [style]);

  return (
    <Animated.View style={viewStyle(style.left.animation, style.top.animation)}>
      <Container
        index={index}
        onPress={() => {
          setStyle({
            top: style.top.reverse(),
            left: style.left.reverse(),
          });
          setTimeout(() => {
            setSelectedItem(-1);
          }, animationTime);
        }}>
        <Title text={name} />
      </Container>
    </Animated.View>
  );
};

export default ItemModal;
