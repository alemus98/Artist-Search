var submit = document.querySelector("#search-btn");
var artistInput = document.querySelector("#input");
var resultTextEl = document.querySelector('#result-text');

function getParams() {
  var searchParamsArr = document.location.search;
  var query = searchParamsArr.split("=").pop();
  // console.log(query)
  artistSearch(query);
}

function printResults(resultObj) {
  var youtubeEl = document.querySelector("#youtube-video");
  var youtubeUrl = "https://youtube.com/embed/" + resultObj[Math.floor(Math.random()*resultObj.length)].id
  console.log(youtubeUrl);
  youtubeEl.setAttribute("src", youtubeUrl);
}

function artistSearch(query) {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "390fd4a3camsh7a1fb04f3cab693p13e1bejsnffb115ea3153",
      "X-RapidAPI-Host": "youtube-music1.p.rapidapi.com",
    },
  };
  // console.log(query)
  var ytUrl = "https://youtube-music1.p.rapidapi.com/v2/search?query=" + query;

  fetch(ytUrl, options)
    .then((response) => response.json())
    .then((response) => {
      printResults(response.result.videos)
    })
    .catch((err) => console.error(err));
};

getParams();
// add event listener to the search button

