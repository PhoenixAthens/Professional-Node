function Circle(x, y, r) {
  function r_sq() {
    return Math.pow(r, 2);
  }
  function area() {
    return Math.PI * r_sq();
  }
  return {
    area: area,
  };
}
module.exports = Circle;
