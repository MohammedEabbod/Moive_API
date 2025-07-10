import { fetchApiData } from "./fetchApiData.js";


export async function displaySlider(){
    const {results} = await fetchApiData('movie/now_playing');
    
    
    results.forEach(function(movie){
        const htmlcode = 
        `
        <div class="swiper-slide">
            <a href="movie-details.html?id=${movie.id}">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
            </a>
            <h4 class="swiper-rating">
              <i class="fas fa-star text-secondary"></i> ${movie.vote_average.toFixed(1)} / 10
            </h4>
          </div>
        `;

        document.querySelector(".swiper-wrapper").insertAdjacentHTML('afterbegin',htmlcode);
        initSwipper();
    })
}


function initSwipper(){
    const swiper = new Swiper('.swiper',{
        slidesPerView: 1,
        spaceBetween:30,
        freeMode:true,
        loop:true,
        autoplay:{
            delay:4000,
        },
        breakpoints:{
            500:{
                slidesPerView:2
            },
            700:{
                slidesPerView:3
            },
            1000:{
                slidesPerView:5
            }
        }
    })
}