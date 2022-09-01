var submit = document.querySelector("#search-btn");
var artistInput = document.querySelector("#input");
var resultTextEl = document.querySelector('#result-text');




function getParams() {
  var searchParamsArr = document.location.search;
  var query = searchParamsArr.split("=").pop();
  // console.log(query)
  artistSearch(query);
  showSearch(query);
}

function printVideoResults(resultObj) {
  var randomIndex = Math.floor(Math.random()*resultObj.length);
  console.log(resultObj[randomIndex]);
  var youtubeEl = document.querySelector("#youtube-video");
  var youtubeUrl = "https://youtube.com/embed/" + resultObj[randomIndex].id
  console.log(youtubeUrl);
  youtubeEl.setAttribute("src", youtubeUrl);
}

function printShowResults(band) {
  var resultContentEl = document.querySelector("#result-content");
  var eventInfo = document.createElement('div');
  var ticketUrlEl = document.createElement('a');


  ticketUrlEl.setAttribute('href', band);
  ticketUrlEl.setAttribute('target', '_blank')
  ticketUrlEl.classList.add('btn', 'btn-block', 'btn-danger', 'justify-content-center') 
  // 'col-12', 'flex-column', 'd-flex', 'justify-content-center')
  // eventInfo.classList.add('row', 'justify-content-center', 'text-decoration-none', 'text-center',);
  ticketUrlEl.textContent = "Get Tickets"
  // eventInfo.setAttribute('resultContentEl', ticketUrl);
  console.log(band);
  eventInfo.append(ticketUrlEl);
  resultContentEl.append(eventInfo);

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
      printVideoResults(response.result.videos)
    })
    .catch((err) => console.error(err));

    
};
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

getParams();
// add event listener to the search button

