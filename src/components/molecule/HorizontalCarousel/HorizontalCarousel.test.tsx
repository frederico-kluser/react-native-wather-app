import React from 'react';
import renderer from 'react-test-renderer';
import HorizontalCarousel from './HorizontalCarousel';

test('renders correctly', () => {
  const tree = renderer.create(<HorizontalCarousel />).toJSON();
  expect(tree).toMatchSnapshot();
});
