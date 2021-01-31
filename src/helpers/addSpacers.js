function addSpacers(data) {
    return data.forEach((item, i) => {
      item[1].unshift({ key: "empty-left" + i });
      item[1].push({ key: "empty-right" + i });
    });
  }
  export {addSpacers}