// @flow
import * as React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'recompose';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Target from './Target';
import DropTarget from './DropTarget';

export type Props = {
  onDrop: (files: Array<File>, monitor: any) => void | Promise<void>,
  render: ({ canDrop: boolean, isOver: boolean }) => React.Element<any>,
  accepts?: Array<string>,
};

const Dropzone: React.StatelessFunctionalComponent<Props> = compose(
  DragDropContext(HTML5Backend),
  DropTarget,
)(Target);

Dropzone.displayName = 'ReactDndDropzone';
Dropzone.propTypes = {
  onDrop: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,
  accepts: PropTypes.arrayOf(PropTypes.string),
};

export default Dropzone;
