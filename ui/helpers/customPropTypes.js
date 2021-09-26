import { isInArray } from '../utils';

const columnWidth = (props, propName, componentName) => {
  if (
    props[propName] &&
    !isInArray(props[propName], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ) {
    return new Error(
      'Prop `' +
        propName +
        '` supplied to' +
        ' `' +
        componentName +
        '` should be a number between 1-12.'
    );
  }
};

export { columnWidth };