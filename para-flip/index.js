let paraFlip = (str) => {

  let arr = Array.from(str);
  let iOpen = arr.indexOf("(");
  let iClose = arr.indexOf(")");

  let arrSub = arr.splice(iOpen, iClose - iOpen + 1);

  arrSub.pop();
  arrSub.shift();
  arrSub.reverse();
  arr.splice(iOpen, 0, ...arrSub);

  return arr.indexOf("(") !== -1 ? paraFlip(arr.join("")) : arr.join("");

}