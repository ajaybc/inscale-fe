import React from 'react';
import renderer from 'react-test-renderer';

import TitleBar from './index.jsx';

it('Titlebar renders correctly when title and summary are provided', () => {
  const tree = renderer
    .create(<TitleBar title="Test Title" summary="Test Summary"/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});