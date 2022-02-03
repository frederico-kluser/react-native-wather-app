import React from 'react';
import {Button} from 'react-native';
import Container from './Home.styled';

const Home = ({children, navigation}: any) => (
  <Container>
    <Button
      title="Go to City Page"
      onPress={() => navigation.navigate('City', {name: 'Jane'})}
    />
    {children}
  </Container>
);

export default Home;
