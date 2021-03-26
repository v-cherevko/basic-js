module.exports = function countCats(matrix) {
  let count = 0;
  const target = /^\^\^$/;

  for (let i = 0; i < matrix.length; ++i) {
    for (let j = 0; j < matrix[i].length; ++j) {
      if (target.test(matrix[i][j])) {
        ++count;
      }
    }
  }
  return count;
};
