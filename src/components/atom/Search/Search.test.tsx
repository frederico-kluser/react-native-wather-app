import React from 'react';
import renderer from 'react-test-renderer';
import Search from './Search';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<Search options={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
