// 6d75b20bc0626cb9560438969d9ee4bc api key


import {global}   from "./globel.js";
import {displaySlider} from "./slider.js"
import {popularMovies} from "./dispalypopuler.js"
import {populerTV} from "./TVshowPop.js"
import {MovieDetails} from "./MovieDetails.js"
import {ShowDetails} from "./showDetails.js"
import {search} from "./searchResulr.js"
import {HifhlightNav} from "./highlightnav.js";
function Init(){
   switch(global.currentpage){ 
        case '/':
        case '/index.html':
            displaySlider();
            popularMovies();
        break;
        case '/shows.html':
            populerTV();
        break;
        case '/movie-details.html':
            MovieDetails();
        break;
        case '/tv-details.html':
            ShowDetails();
        break;
        case '/search.html':
           search();
        break;
        
   }
  HifhlightNav();
}


document.addEventListener("DOMContentLoaded", Init);