import React from 'react';
import renderer from 'react-test-renderer';

import Price from './index.jsx';

it('Price renders correctly when a value of 2000 is provided', () => {
  const tree = renderer
    .create(<Price>2000</Price>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('Price renders correctly when a very large value is provided', () => {
  const tree = renderer
    .create(<Price>99999999999</Price>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});