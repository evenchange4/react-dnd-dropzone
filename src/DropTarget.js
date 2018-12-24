// @flow
import { DropTarget } from 'react-dnd';
import { NativeTypes } from 'react-dnd-html5-backend';

export default DropTarget(
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
);
