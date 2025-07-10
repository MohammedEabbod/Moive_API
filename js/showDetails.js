import { fetchApiData } from "./fetchApiData.js";

export async function ShowDetails(){
    const showID = window.location.search.split('=')[1];
    const showDetails = await fetchApiData(`tv/${showID}`);
    console.log(showDetails);

    const htmlcode = 
    `
    <div class="details-top">
          <div>
            <img
              src='https://image.tmdb.org/t/p/w500${showDetails.poster_path}'
              class="card-img-top"
              alt="${showDetails.name}"
            />
          </div>
          <div>
            <h2>${showDetails.name}</h2>
            <p>
              <i class="fas fa-star text-primary"></i>
              ${showDetails.vote_average.toFixed(1)} / 10
            </p>
            <p class="text-muted">Release Date: ${showDetails.last_air_date}</p>
            <p>
              ${showDetails.overview}
            </p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${showDetails.genres.map(function(gener){
                return `<li>${gener.name}</li>`;
              }).join('')}
            </ul>
            <a href="${showDetails.homepage}" target="_blank" class="btn">Visit Show Homepage</a>
          </div>
        </div>
        <div class="details-bottom">
          <h2>Show Info</h2>
          <ul>
            <li><span class="text-secondary">Number Of Episodes:</span> ${showDetails.number_of_episodes}</li>
            <li>
              <span class="text-secondary">Last Episode To Air:</span> ${showDetails.last_episode_to_air.name}
            </li>
            <li><span class="text-secondary">Status:</span> ${showDetails.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${showDetails.production_companies.map(function(company){
                return `<span class="badge badge-primary">${company.name}</span>`;
            
          })}</div>
        </div>
    
    
    `
    document.querySelector('#show-details').innerHTML = htmlcode;
}