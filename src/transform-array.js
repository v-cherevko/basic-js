module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  if (arr.includes("--discard-next")) {
    if (arr.indexOf("--discard-next") + 1 !== undefined) {
      arr.splice(arr.indexOf("--discard-next"), 2);
    } else {
      arr.splice(arr.indexOf("--discard-next"), 1);
    }
  }
  if (arr.includes("--discard-prev")) {
    if (arr.indexOf("--discard-prev") - 1 !== undefined) {
      arr.splice(arr.indexOf("--discard-prev") - 1, 2);
    } else {
      arr.splice(arr.indexOf("--discard-prev"), 1);
    }
  }
  if (arr.includes("--double-next")) {
    if (arr.indexOf("--double-next") + 1 !== undefined) {
      arr.splice(
        arr.indexOf("--double-next"),
        1,
        arr.find(function(item) {
          arr.indexOf("--double-next") + 1 == arr.indexOf(item);
        })
      );
    } else {
      arr.splice(arr.indexOf("--double-next"), 1);
    }
  }
  if (arr.includes("--double-prev")) {
    if (arr.indexOf("--double-prev") - 1 !== undefined) {
      arr.splice(
        arr.indexOf("--double-prev"),
        1,
        arr.find(function(item) {
          arr.indexOf("--double-prev") - 1 == arr.indexOf(item);
        })
      );
    } else {
      arr.splice(arr.indexOf("--double-prev"), 1);
    }
  }
  return arr;
};
