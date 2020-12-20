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
  var result = {};
  for (var pair of searchParams.entries()) {
    result[pair[0]] = pair[1];
  }
  return result;
};

const judgeReactBottom = (event) => {
  console.log(event)
  const clientHeight = event.target.clientHeight;
  const scrollHeight = event.target.scrollHeight;
  const scrollTop = event.target.scrollTop;
  debugger;
  const isBottom = clientHeight + scrollTop === scrollHeight;
  console.log("isBottom", isBottom);
  return isBottom;
};

export { randomColor, randomFontSize, getQueryString, judgeReactBottom };
