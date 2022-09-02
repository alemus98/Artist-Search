// Functions to obtain search parameters
function getParams() {
  var searchParamsArr = document.location.search;
  var query = searchParamsArr.split("=").pop();
  // console.log(query)
  artistSearch(query);
  showSearch(query);
}

// Function to display Youtube video of artist searched
function printVideoResults(resultObj) {
  var randomIndex = Math.floor(Math.random()*resultObj.length);
  console.log(resultObj[randomIndex]);
  var youtubeEl = document.querySelector("#youtube-video");
  var youtubeUrl = "https://youtube.com/embed/" + resultObj[randomIndex].id
  console.log(youtubeUrl);
  youtubeEl.setAttribute("src", youtubeUrl);
}

// Function to create button to re-direct to ticketing site
function printShowResults(band) {
  var resultContentEl = document.querySelector("#ticketButton");
  var eventInfo = document.createElement('div');
  var ticketUrlEl = document.createElement('a');

  ticketUrlEl.setAttribute('href', band);
  ticketUrlEl.setAttribute('target', '_blank');
  ticketUrlEl.classList.add('btn', 'btn-lg', 'btn-dark', 'justify-content-center', 'fw-bold', 'text-danger', 'border', 'border-light');
  ticketUrlEl.textContent = "Get Tickets"
  console.log(band);
  eventInfo.append(ticketUrlEl);
  resultContentEl.append(eventInfo);

}

// API to fetch Youtube video of artist
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
      printVideoResults(response.result.videos)
    })
    .catch((err) => console.error(err));

    
};

// API to fetch Ticketmaster/affiliates ticketing info
function showSearch(query) {
  var url = "https://app.ticketmaster.com/discovery/v2/events.json?size=5&apikey=AV9mg9h1UJljjM1Ap3l1q17CLarnAboN&keyword=" + query;
  fetch(url)
  .then((response) => response.json())
  .then(data => {
    var eventUrl = "https://app.ticketmaster.com/discovery/v2/events/"+ data._embedded.events[0].id +"?size=5&sort=name,desc&apikey=AV9mg9h1UJljjM1Ap3l1q17CLarnAboN"
    console.log(data._embedded.events[0].id)
    fetch(eventUrl)
    .then((response2) => response2.json())
    .then(data2 => {
      console.log(data2);
      printShowResults(data2.url);
    })
  })
}

// Calling function
getParams();
