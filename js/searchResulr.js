import { global } from "./globel.js"
import { searchApiData } from "./fetchApiData.js"
import { pagination } from "./paginations.js";
export async function search(){
    const query =window.location.search;
    const urlParam = new URLSearchParams(query);
    

    global.search.term = urlParam.get('search-term')
    global.search.type = urlParam.get('type')

    if(global.search.term !== '' && global.search.term !==null){
        const {results, page, total_pages, totla_results} = await searchApiData();
        global.search.page = page;
        global.search.totalPages = total_pages;
        global.search.totalresults = totla_results;
        console.log(results);
        
        
        displaySearchResults(results);

        
    }else{
        alert("NO RESULT FOUND");
    }
}


export function displaySearchResults(res){
    document.querySelector('#search-results').innerHTML = '';
    res.forEach(function(movies){
            const htmlcode = 
            `
             <div class="card">
                    <a href="${global.search.type}-details.html?id=${movies.id}">
                    <img src="https://image.tmdb.org/t/p/w500${movies.poster_path}" class="card-img-top" 
                    alt="${global.search.type === 'movie' ? movies.original_title : movies.name}" />
                    </a>
                <div class="card-body">
                    <h5 class="card-title">${global.search.type === 'movie' ? movies.original_title : movies.name}</h5>
                    <p class="card-text">
                    <small class="text-muted">Release: ${global.search.type === 'movie' ? movies.release_date : movies.first_air_date}</small>
                    </p>
                </div>
            </div>
            `;

            
            document.querySelector('#search-results').insertAdjacentHTML('afterbegin',htmlcode);
            
    });
    pagination();
    
}
