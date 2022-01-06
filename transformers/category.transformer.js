const transform = (data) => {
  if (data.children) {
    return [];
  } else {
    return {
      id: data._id,
      name: data.name,
      children: transformList(data.children),
    };
  }
};

const transformList = (list) => {
  return list.map((cat) => {
    transform(cat);
  });
};

module.exports = {
  transform,
  transformList,
};
