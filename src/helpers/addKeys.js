function addKeys(data) {
    return Object.entries(data).map((a, i) => {
      a.key = i.toString();
      //a.ref = React.createRef();
      return a;
    });
  }
  export {addKeys}