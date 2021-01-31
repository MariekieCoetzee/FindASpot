function groupResults(response) {
  const group = [];
  response.reduce((acc, obj, i) => {
    let key = obj["price"];
    if (typeof key !== "undefined") {
      if (!group[key]) {
        group[key] = [];
      }
      obj.key = obj.id;
      group[key].push(obj);
      return acc;
    } else {
      if (!group["--"]) {
        group["--"] = [];
      }
      obj.key = obj.id;
      group["--"].push(obj);
      return acc;
    }

    return acc;
  });
  return group;
 // return group.sort((a, b) => (a[0] < b[0] ? -1 : 1));
}
export { groupResults };
