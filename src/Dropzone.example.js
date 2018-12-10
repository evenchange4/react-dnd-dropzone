// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Dropzone from '.';

storiesOf('Dropzone', module).add(
  'Basic',
  () => (
    <Dropzone
      onDrop={files => action('onDrop')(files)}
      render={({ canDrop, isOver }) => (
        <div style={{ border: '1px dashed black', height: 200 }}>
          Drop file here!
          <pre>{JSON.stringify({ canDrop, isOver }, null, 2)}</pre>
        </div>
      )}
    />
  ),
  {
    info: {
      text: `API: https://github.com/evenchange4/react-dnd-dropzone#api`,
      inline: true,
    },
  },
);
