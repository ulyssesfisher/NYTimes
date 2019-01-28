
const runSearch = function (e) {
  e.preventDefault();
  const queryURL = buildQueryurl()

  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function (response) {
    console.log(response);
    console.log(response.response.docs[0])

  });
}

const buildQueryurl = function () {

  const searchTerm = $("#key").val();
  const queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchTerm}&api-key=eGnmjSvIYOAh3O1I3Q6VEd4tTLHsbL8Q`;

  console.log(searchTerm);


  return queryURL;

}





$("#submit").on("click", runSearch)