// @flow
import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dropzone, { DropTarget, Target } from '.';

storiesOf('Dropzone', module)
  .add(
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
        source: false,
        propTables: [Dropzone],
      },
    },
  )
  .add(
    'Custom context',
    () => {
      const HTML5DropContext: React.StatelessFunctionalComponent<Object> = DragDropContext(
        HTML5Backend,
      )(({ children }) => <div>{children}</div>);
      const DropzoneWithoutContext = DropTarget(Target);

      return (
        <HTML5DropContext>
          <DropzoneWithoutContext
            onDrop={files => action('onDrop')(files)}
            render={({ canDrop, isOver }) => (
              <div style={{ border: '1px dashed black', height: 200 }}>
                (Without built-in <code>HTML5Backend</code> context)
                <br />
                <br />
                Drop file here!
                <pre>{JSON.stringify({ canDrop, isOver }, null, 2)}</pre>
              </div>
            )}
          />
        </HTML5DropContext>
      );
    },
    {
      info: {
        text: `API: https://github.com/evenchange4/react-dnd-dropzone#api`,
        inline: true,
        source: false,
        propTables: [DropTarget, Target],
      },
    },
  );
