
import { fetchApiData } from "./fetchApiData.js";

export async function MovieDetails(){
    const movieId = window.location.search.split('=')[1];

    const movie = await fetchApiData(`movie/${movieId}`);
    console.log(movie);
    const htmlcode = 
        `<div class="details-top">
        <div class="overlay" style="background-image:url('https://image.tmdb.org/t/p/w500${movie.backdrop_path}')";></div>
              <div>
                <img
                  src='https://image.tmdb.org/t/p/w500${movie.poster_path}'
                  class="card-img-top"
                  alt="${movie.title}"
                />
              </div>
              <div>
                <h2>${movie.title}</h2>
                <p>
                  <i class="fas fa-star text-primary"></i>
                 ${movie.vote_average.toFixed(1)}/ 10
                </p>
                <p class="text-muted">Release Date: ${movie.release_date}</p>
                <p>
                  ${movie.overview}
                </p>
                <h5>Genres</h5>
                <ul class="list-group">
                  ${movie.genres.map(function(genre){
                    return`<li>${genre.name}</li>`;
                  }).join('')}
                </ul>
                <a href="${movie.homepage}" target="_blank" class="btn">Visit Movie Homepage</a>
              </div>
            </div>
            <div class="details-bottom">
              <h2>Movie Info</h2>
              <ul>
                <li><span class="text-secondary">Budget:</span>$${movie.budget}</li>
                <li><span class="text-secondary">Revenue:</span> $${movie.revenue}</li>
                <li><span class="text-secondary">Runtime:</span> ${movie.runtime} minutes</li>
                <li><span class="text-secondary">Status:</span> ${movie.status}</li>
              </ul>
              <h4>Production Companies</h4>
              <div class="list-group">${movie.production_companies.map(function(country){
                    return `<span class="badge badge-primary">${country.name}</span>`;
                }).join('')
            }</div>
            </div>
            `;
document.querySelector('#movie-details').innerHTML = htmlcode
}