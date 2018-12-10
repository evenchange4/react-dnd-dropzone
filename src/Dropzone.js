// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import {
  DropTarget,
  DragDropContext,
  DragDropContextProvider,
} from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';

export const Target = ({
  canDrop,
  isOver,
  connectDropTarget,
  render,
}: {
  // Note: from react-dnd hoc
  canDrop: boolean,
  isOver: boolean,
  connectDropTarget: Function,
  // Note: render props
  render: ({ canDrop: boolean, isOver: boolean }) => React.Element<any>,
}) => (
  <DragDropContextProvider backend={HTML5Backend}>
    {connectDropTarget(<div>{render({ canDrop, isOver })}</div>)}
  </DragDropContextProvider>
);

export type Props = {
  onDrop: (files: Array<File>, monitor: any) => void,
  render: ({ canDrop: boolean, isOver: boolean }) => React.Element<any>,
  accepts?: Array<string>,
};

export const Dropzone: React.ComponentType<Props> = compose(
  DragDropContext(HTML5Backend),
  DropTarget(
    ({ accepts }) => accepts || [NativeTypes.FILE],
    {
      drop(props, monitor) {
        if (monitor) {
          const { files } = monitor.getItem();
          props.onDrop(files, monitor);
        }
      },
    },
    (connect, monitor) => ({
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  ),
)(Target);

/**
 * For react-storybook addon info
 */
Dropzone.displayName = 'ReactDndDropzone';
Dropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  accepts: PropTypes.arrayOf(PropTypes.string),
};

export default Dropzone;
