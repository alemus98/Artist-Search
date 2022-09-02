// Declare the global variables
var submit = document.querySelector("#search-btn");

// JQuery UI autocomplete
$(function autoComp() {
  var artistNames = JSON.parse(localStorage.getItem("artistLogList"));
  $("#input").autocomplete({
    source: artistNames,
  });
});

// Function to log artist's searched into local storage and pull for autocomplete
function artistSearch() {
  var artistInput = document.querySelector("#input").value;

  var queryString = "./search.html?q=" + artistInput;

  if (!artistInput) {
    console.log("No artist logged.");
  } else {
    var recentSearches = {
      userInput: artistInput,
    };
    console.log(recentSearches);
  }
  var allSearches = localStorage.getItem("artistLogList");
  if (allSearches === null) {
    allSearches = [];
  } else {
    allSearches = JSON.parse(allSearches);
  }

  allSearches.push(artistInput);
  var artistLog = JSON.stringify(allSearches);
  localStorage.setItem("artistLogList", artistLog);

  location.assign(queryString);
}

// add event listener to the search button
submit.addEventListener("click", artistSearch);
