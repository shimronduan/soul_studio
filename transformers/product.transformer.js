const transform = (data) => {
  return {
    id: data._id,
    name: data.name,
  };
};

const transformList = (list) => {
  return list.map((cat) => {
    return transform(cat);
  });
};

module.exports = {
  transform,
  transformList,
};
