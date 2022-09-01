// Declare the global variables
var submit = document.querySelector("#search-btn");

function artistSearch() {
  var artistInput = document.querySelector("#input").value;
  
  var queryString = "./search.html?q=" + artistInput;

  if (!artistInput) {
    console.log("No artist logged.")
  } else {
    var recentSearches = {
      userInput: artistInput
    }
    console.log(recentSearches);
  }
  var allSearches = localStorage.getItem('artistLogList');
  if (allSearches === null) {
    allSearches = [];
  } else {
    allSearches = JSON.parse(allSearches);
  }

  allSearches.push(artistInput);
  var artistLog = JSON.stringify(allSearches);
  localStorage.setItem('artistLogList', artistLog);
  
  location.assign(queryString);
}

// add event listener to the search button
submit.addEventListener("click", artistSearch);
// need to link the apis to the search button and input screen
// track artist searched into local storage
