import React, {useEffect} from 'react';
import getCityNames from '../../../api/cityNames';
import {closeIcon, searchIcon} from '../../../styles/icons';
import Container, {
  InputSearch,
  Option,
  OptionText,
  SearchButton,
  SearchIcon,
} from './Search.styled';

const Search = ({inputFilter, setInputFilter, options, setOptions}: any) => {
  const handleInput = () => {};

  useEffect(() => {
    if (inputFilter) {
      getCityNames(inputFilter).then(({predictions}: any) => {
        setOptions(predictions.map((item: any) => item));
      });
    } else {
      setOptions([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputFilter]);

  return (
    <Container>
      <InputSearch
        placeholder="Digite o nome da cidade"
        value={inputFilter}
        onChangeText={setInputFilter}
        onSubmitEditing={handleInput}
        quandity={options.length}
      />
      {options.map((city: any, index: number) => (
        <Option index={index} onPress={() => {}}>
          <OptionText>{city.description}</OptionText>
        </Option>
      ))}
      {!!inputFilter && (
        <SearchButton onPress={() => setInputFilter('')}>
          <SearchIcon source={closeIcon} />
        </SearchButton>
      )}
    </Container>
  );
};

export default Search;
