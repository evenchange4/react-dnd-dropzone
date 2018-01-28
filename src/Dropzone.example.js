// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Dropzone from '.';

storiesOf('Dropzone', module).add(
  'Basic',
  withInfo({
    text: 'default',
    inline: true,
  })(() => (
    <Dropzone
      onDrop={files => action('onDrop')(files)}
      render={({ canDrop, isOver }) => (
        <div style={{ border: '1px dashed black', height: 200 }}>
          Drop file here!
          <pre>{JSON.stringify({ canDrop, isOver }, null, 2)}</pre>
        </div>
      )}
    />
  )),
);
