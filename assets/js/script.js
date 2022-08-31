// Declare the global variables
var submit = document.querySelector("#search-btn");


function artistSearch() {
  var artistInput = document.querySelector("#input").value;
  

  var queryString = "./search.html?q=" + artistInput;
  
  location.assign(queryString);
}

// add event listener to the search button
submit.addEventListener("click", artistSearch);
// need to link the apis to the search button and input screen
// track artist searched into local storage
