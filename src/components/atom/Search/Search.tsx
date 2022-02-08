import React, {useEffect} from 'react';
import getCityNames from '../../../api/cityNames';
import getCityWeatherInfo, {
  getCityWeatherNextDaysInfo,
} from '../../../api/cityWeatherInfo';
import convertKelvinToCelsius from '../../../helpers/conversor';
import {closeIcon} from '../../../styles/icons';
import Container, {
  InputSearch,
  Option,
  OptionText,
  SearchButton,
  SearchIcon,
} from './Search.styled';

const Search = ({
  cities,
  inputFilter,
  options,
  setCities,
  setInputFilter,
  setOptions,
}: any) => {
  const handleInput = async (index = 0) => {
    if (options.length) {
      const data: any = await getCityWeatherInfo(
        options[index].structured_formatting.main_text,
      );
      const data2 = await getCityWeatherNextDaysInfo(
        data.coord.lat,
        data.coord.lon,
      );

      const item = {
        city: data.name,
        country: data.sys.country,
        description: options[index].description,
        favorite: false,
        humidity: parseInt(data.main.humidity),
        maxTemperature: convertKelvinToCelsius(data.main.temp_max),
        minTemperature: convertKelvinToCelsius(data.main.temp_min),
        nextDays: data2.daily,
        status: data.weather[0].description,
        temperature: convertKelvinToCelsius(data.main.temp),
        wind: parseInt(data.wind.speed),
      };
      console.log(data, 'data');
      console.log(item, 'item');
      setCities((prevState: any[]) => {
        return [...prevState, item];
      });
    }
    setInputFilter('');
  };

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
        onSubmitEditing={() => handleInput()}
        quandity={options.length}
      />
      {options.map(({description}: any, index: number) => (
        <Option key={description} onPress={() => handleInput(index)}>
          <OptionText>{description}</OptionText>
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
