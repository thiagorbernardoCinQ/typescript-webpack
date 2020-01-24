/*
const apiKey = "33b98784c91a88fdf6bf36da722e8ece";
let movieId = 299536;
let apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
let httpRequestAsync = (method, url) => {
  return new Promise<string>(function(resolve, reject) {
    var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(xhr.responseText));
      }
    };
    xhr.send();
  });
};


httpRequestAsync("get", apiUrl).then(res => {
    let obj = JSON.parse(res);
    console.log(`
Title: ${obj.title}
Genre: ${obj.genres.map(ge => (ge.name))}
Made by: ${obj.production_companies.map(pr => (pr.name))}
In: ${obj.production_countries.map(pr => (pr.name))}
Has: ${obj.vote_average} votes
IMDB: ${obj.imdb_id}`
);
}).catch(error => console.log(error));

*/