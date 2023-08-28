let myButton = document.getElementsByClassName("theButton")[0];
console.log(myButton);
let quote = document.querySelector(".quoteContent blockquote");
let auther = document.querySelector(".quoteContent span");
let data;
myButton.onclick = function () {
  fetch("https://api.quotable.io/random")
    .then((result) => {
      return result.json();
    })
    .then((theData) => {
      console.log(theData["author"]);
      quote.innerHTML = theData.content;
      auther.innerHTML = theData["author"];
    });
};
