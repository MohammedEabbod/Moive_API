
import { fetchApiData } from "./fetchApiData.js";

export async function popularMovies(){

    const {results} = await fetchApiData('movie/popular');
    

    results.forEach(function(movie){

        const htmlcode = 
    `
    <div class="card">
          <a href="movie-details.html?id=${movie.id}">
            <img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        </div>
    `
    document.querySelector('#popular-movies').insertAdjacentHTML('afterbegin',htmlcode);
    })
}