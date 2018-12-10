// @flow
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withOptions } from '@storybook/addon-options';
import decorator from './decorator';

addDecorator(decorator);
addDecorator(withInfo({ inline: true }));
addDecorator(
  withOptions({
    name: 'react-dnd-dropzone',
    url: 'https://github.com/evenchange4/react-dnd-dropzone',
    sortStoriesByKind: true,
  }),
);

// $FlowFixMe
const context = require.context('../src/', true, /\.example\.js$/);
function loadStories() {
  context.keys().forEach(context);
}

configure(loadStories, module);
