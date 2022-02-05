import React from 'react';
import renderer from 'react-test-renderer';
import VerticalList from './VerticalList';

test('renders correctly', () => {
  const tree = renderer.create(<VerticalList />).toJSON();
  expect(tree).toMatchSnapshot();
});
