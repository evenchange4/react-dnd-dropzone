// @flow
import * as React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

export type Props = {
  // Note: from react-dnd hoc
  canDrop: boolean,
  isOver: boolean,
  connectDropTarget: Function,
  // Note: render props
  render: ({ canDrop: boolean, isOver: boolean }) => React.Element<any>,
};

export const Target = ({
  canDrop,
  isOver,
  connectDropTarget,
  render,
}: Props) => (
  <DragDropContextProvider backend={HTML5Backend}>
    {connectDropTarget(<div>{render({ canDrop, isOver })}</div>)}
  </DragDropContextProvider>
);

export default Target;
