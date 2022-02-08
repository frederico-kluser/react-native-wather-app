import React from 'react';
import renderer from 'react-test-renderer';
import Item, {ItemInterface} from './Item';

const mockedProps: ItemInterface = {
  city: 'São Paulo',
  func: () => {},
  index: 0,
  country: 'Brazil',
  temperature: 10,
  status: 'day',
};

test('renders correctly', () => {
  const tree = renderer.create(<Item {...mockedProps} />).toJSON();
  expect(tree).toMatchSnapshot();
});
