// @flow
import * as Modules from '../index';

it('should export Target Component', () => {
  expect(Modules).toHaveProperty('Target');
});

it('should export DropTarget HOC', () => {
  expect(Modules).toHaveProperty('DropTarget');
});

it('should export default Dropzone component', () => {
  expect(Modules).toHaveProperty('default');
});
