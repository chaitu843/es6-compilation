var fetch = require("node-fetch");

const apiKey = '239a46eb92e555f8c2bca24a2637555a';
let searchQuery = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`,
    movieDetailsByIdQuery = ``;

let getMovieRatingByName = (name) => {
    fetch(`${searchQuery}${name}`)
    .then(resp => resp.json())
    .then(resp => {
        console.log(resp.results[0].vote_average)
        // fetch(`${movieDetailsByIdQuery}/${resp.results[0].id}`)
        // .then(resp => resp.json())
        // .then(resp => console.log(resp))
    })
}
