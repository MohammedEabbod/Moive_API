import { fetchApiData } from "./fetchApiData.js";


export async function populerTV(){
    
    const {results} = await fetchApiData('tv/popular');
    console.log(results);

    results.forEach(function(tvshow){
        let htmlcode = 
        `
        <div class="card">
          <a href="tv-details.html?id=${tvshow.id}">
            <img
              src="https://image.tmdb.org/t/p/w500${tvshow.poster_path}"
              class="card-img-top"
              alt="${tvshow.name}"
            />
          </a>
          <div class="card-body">
            <h5 class="card-title">${tvshow.name}</h5>
            <p class="card-text">
              <small class="text-muted">Aired: ${tvshow.first_air_date}</small>
            </p>
          </div>
        </div>
        `
        document.querySelector('#popular-shows').innerHTML += htmlcode;
    })


}