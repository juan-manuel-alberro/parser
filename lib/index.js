function parse(path) {
  return function navigate(obj) {
    let reduced = obj;
    if (typeof reduced === 'object' && typeof path === 'string') {
      const p = path.split('.');
      p.forEach((o) => {
        try {
          reduced = reduced[o];
        } catch (e) {
          // silence in here
        }
      });
    }
    return reduced;
  };
}

module.exports = {
  parser: parse
};
