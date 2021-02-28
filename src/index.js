
exports.min = function min (array) {
  return array ? Math.min.apply(array) : 0;
}

exports.max = function max (array) {
  return array ? Math.max.apply(array) : 0;
}

exports.avg = function avg (array) {
  return array ? array.reduce((accumulator, sum) => accumulator + sum)/array.length : 0;
}
