/* eslint-disable  */
const randomColor = () => {
  let color = "";
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  color = "rgba(" + r + "," + g + "," + b + ",0.8)";
  return color;
};

const randomFontSize = () => {
  return Math.floor(Math.random() * (24 - 12 + 1) + 12);
};

const getQueryString = (name) => {
  var searchParams = new URLSearchParams(window.location.search);
 return  searchParams.get(name);

};

export { randomColor, randomFontSize, getQueryString };
