
const apiKey = "33b98784c91a88fdf6bf36da722e8ece";
let apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
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

console.log("----------NOW ON SCREEN---------")
httpRequestAsync("get", apiUrl).then(res => {
    let obj = JSON.parse(res);
    console.log(`${obj.results.map(x => (`
Is adult: ${x.adult}
Release in: ${x.release_date}
Original Title: ${x.original_title}
Popularity: ${x.popularity}\n`))}
`);
console.log("----------NOW ON SCREEN---------")
}).catch(error => console.log(error));

