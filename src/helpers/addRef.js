import React, { createRef } from "react";

const TitleDescription = (title) => {
    switch (title) {
      case "$":
        return "Inexpensive";
      case "$$":
        return "Affordable";
      case "$$$":
        return "Expensive";
      case "$$$$":
        return "WOWZA!";
      default:
        return "No Price Category";
    }
  };
function addRef(data){
  const results = data.map(({ 0: keys, 1: items }, index) => {
    var a = {
      key: keys,
      description: TitleDescription(keys),
      items: items.sort((a, b) => { return parseFloat(b.distance) - parseFloat(a.distance) }),
      ref: createRef(),
    };
    return a;
  });

  return results;
};


export {addRef};