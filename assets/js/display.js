var submit = document.querySelector("#search-btn");
var artistInput = document.querySelector("#input");


function getParams() {
  var searchParamsArr = document.location.search;
  var query = searchParamsArr[0].split("=").pop();
  artistSearch(query);
}

function artistSearch() {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "390fd4a3camsh7a1fb04f3cab693p13e1bejsnffb115ea3153",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
    },
  };

  fetch("https://youtube-music1.p.rapidapi.com/v2/search?query=", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
}
artistSearch();
getParams();
// add event listener to the search button

