module.exports = function createDreamTeam(members) {
  if (!members || Array.isArray(members) == false) {
    return false;
  }
  let result = members
    .filter((name) => typeof name == "string")
    .map((name) => name.replace(/^\s+/, "")[0].toUpperCase());
  return result.sort().join("");
};
