import React from 'react';
import renderer from 'react-test-renderer';
import {CloseButton, DeleteButton, FavoriteButton} from './IconButton';

test('renders correctly delete button', () => {
  const tree = renderer.create(<DeleteButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly close button', () => {
  const tree = renderer.create(<CloseButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders correctly favorite button', () => {
  const tree = renderer.create(<FavoriteButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
