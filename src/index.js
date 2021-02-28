
exports.min = function min (array) {
  return Math.min.apply(array);
}

exports.max = function max (array) {
  return Math.max.apply(array);
}

exports.avg = function avg (array) {
  return array.reduce((accumulator, sum) => accumulator + sum)/array.length;
}
