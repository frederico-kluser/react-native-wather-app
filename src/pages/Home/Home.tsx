import React, {useEffect, useState} from 'react';
import Item from '../../components/molecule/Item/Item';
import ItemModal from '../../components/organism/ItemModal/ItemModal';
import {Container} from './Home.styled';

const Home = ({scrollY, setScroll}) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [cities, setCities] = useState([
    {
      name: 'New York',
      temperature: '8',
      maxTemperature: '10',
      minTemperature: '2',
      status: 'cloudy',
    },
    {
      name: 'São Paulo',
      temperature: '10',
      maxTemperature: '12',
      minTemperature: '2',
      status: 'rainy',
    },
    {
      name: 'Rio de Janeiro',
      temperature: '12',
      maxTemperature: '14',
      minTemperature: '2',
      status: 'sunny',
    },
    {
      name: 'New York',
      temperature: '8',
      maxTemperature: '10',
      minTemperature: '2',
      status: 'cloudy',
    },
    {
      name: 'Orlando',
      temperature: '10',
      maxTemperature: '12',
      minTemperature: '2',
      status: 'rainy',
    },
    {
      name: 'London',
      temperature: '12',
      maxTemperature: '14',
      minTemperature: '2',
      status: 'sunny',
    },
    {
      name: 'Tokyo',
      temperature: '8',
      maxTemperature: '10',
      minTemperature: '2',
      status: 'cloudy',
    },
    {
      name: 'Dubai',
      temperature: '10',
      maxTemperature: '12',
      minTemperature: '2',
      status: 'rainy',
    },
  ]);

  useEffect(() => {
    setScroll(selectedItem === -1);
  }, [selectedItem]);

  return (
    <Container>
      {selectedItem >= 0 && (
        <ItemModal
          index={selectedItem}
          name={cities[selectedItem].name}
          setSelectedItem={setSelectedItem}
          scrollY={scrollY}
        />
      )}
      {cities.map(({name}: any, index: number) => (
        <Item
          func={setSelectedItem}
          index={index}
          key={name + index}
          lastElement={index === cities.length - 1}
          name={name}
        />
      ))}
    </Container>
  );
};

export default Home;
