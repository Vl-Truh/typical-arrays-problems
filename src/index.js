
exports.min = function min (array) {
  if( array === undefined || array.length < 1) return 0;
  return Math.min.apply(array);
}

exports.max = function max (array) {
  if( array === undefined || array.length < 1) return 0;
  return Math.max.apply(array);
}

exports.avg = function avg (array) {
  if( array === undefined || array.length < 1) return 0;
  return array.reduce((accumulator, sum) => accumulator + sum)/array.length;
}
