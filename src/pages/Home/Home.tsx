import React, {useEffect, useState} from 'react';
import Item from '../../components/atom/Item/Item';
import ItemModal from '../../components/organism/ItemModal/ItemModal';
import {Container} from './Home.styled';
import Search from '../../components/atom/Search/Search';
import {load, save} from '../../helpers/storage';

interface HomeInterface {
  scrollY: number;
  setScroll: Function;
}

const Home = ({scrollY, setScroll}: HomeInterface) => {
  const [selectedItem, setSelectedItem] = useState(-1);
  const [inputFilter, setInputFilter] = useState('');
  const [options, setOptions] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    load()
      .then((data: any) => {
        setCities(JSON.parse(data) || []);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    save(JSON.stringify(cities));
  }, [cities]);

  useEffect(() => {
    setScroll(selectedItem === -1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  return (
    <Container>
      <Search
        inputFilter={inputFilter}
        setInputFilter={setInputFilter}
        options={options}
        setOptions={setOptions}
        setCities={setCities}
      />
      <>
        {selectedItem >= 0 && (
          <ItemModal
            index={selectedItem}
            setSelectedItem={setSelectedItem}
            optionsQuantity={options.length}
            scrollY={scrollY}
            setCities={setCities}
            {...cities[selectedItem]}
          />
        )}
        {cities.map((city: any, index: number) => (
          <Item
            func={setSelectedItem}
            index={index}
            key={city.city + index}
            lastElement={index === cities.length - 1}
            {...city}
          />
        ))}
      </>
    </Container>
  );
};

export default Home;
