import merge from 'deepmerge';

const isInArray = (value, array) => {
  return array.indexOf(value) > -1;
};

const deepMerge = (originalObj, overriderObj) =>
  merge(originalObj, overriderObj);

const rem = value => {
  return `${value / 16}rem`;
};

const getRandomString = () => {
  return Math.random()
    .toString(36)
    .substring(7);
};

const isElementInViewport = (el, parentEl) => {
  var rect = el.getBoundingClientRect();

  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < ((parentEl ? parentEl : window).innerWidth || document.documentElement.clientWidth) &&
    rect.top < ((parentEl ? parentEl : window).innerHeight || document.documentElement.clientHeight)
  );
};

const getIntrinsicRatio = (width, height) => {
  return (height / width) * 100;
};

const range = (from, to, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }

  return range;
};

const hexToRgba = (hex, alpha) => {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split('');
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = '0x' + c.join('');
    return (
      'rgba(' +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') +
      ',' +
      alpha +
      ')'
    );
  }
  throw new Error('Bad Hex');
};

const getObjectValues = obj => {
  const res = [];
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      res.push(obj[i]);
    }
  }
  return res;
};

export {
  isInArray,
  deepMerge,
  rem,
  getRandomString,
  isElementInViewport,
  getIntrinsicRatio,
  range,
  hexToRgba,
  getObjectValues
};
