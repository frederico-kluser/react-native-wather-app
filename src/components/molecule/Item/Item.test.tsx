import React from 'react';
import renderer from 'react-test-renderer';
import Item from './Item';

test('renders correctly', () => {
  const tree = renderer.create(<Item />).toJSON();
  expect(tree).toMatchSnapshot();
});
