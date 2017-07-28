let parenthesisReverse = (string) => {

  //Convert to arr, index of ( and )
  let input = Array.from(string);
  let openParenIndex = input.indexOf("(");
  let closeParenIndex = input.indexOf(")");

  //Pull subsection from input
  let parenSubArr = input.splice(openParenIndex, closeParenIndex - openParenIndex + 1);

  //Strip the parenthesis and flip
  parenSubArr.pop();
  parenSubArr.shift();
  parenSubArr.reverse();

  //Reinsert the modified subsection
  input.splice(openParenIndex, 0, ...parenSubArr);

  //     //
  let result = input.join("");
  let parenthesisRemaining = input.indexOf("(") !== -1;

  //Return the completed arr as a string, or recall the function if ('s remain
  return parenthesisRemaining ? parenthesisReverse(result) : result;

}