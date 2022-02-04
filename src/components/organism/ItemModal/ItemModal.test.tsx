import React from 'react';
import renderer from 'react-test-renderer';
import ItemModal from './ItemModal';

jest.useFakeTimers();

test('renders correctly', () => {
  const tree = renderer.create(<ItemModal />).toJSON();
  expect(tree).toMatchSnapshot();
});
