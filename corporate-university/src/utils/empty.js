import _ from 'lodash';

function readFormat(value) {
  return _.isEmpty(value) || value === 'N/A' ? '-' : value;
}

export { readFormat };
