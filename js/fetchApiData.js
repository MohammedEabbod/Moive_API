import { global } from "./globel.js"

export async function fetchApiData(endpoint){
    const API_KEY = global.api.apikey;
    const API_URL = global.api.apiurl;

    showspinner();

    const res = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`);
    const data = await res.json();

    hidespinner();

    return data;
}
export async function searchApiData() {
    const API_KEY = global.api.apikey;
    const API_URL = global.api.apiurl;

    showspinner();

    const res = await fetch(`${API_URL}search/${global.search.type}?api_key=${API_KEY}&language=en-US&query=${global.search.term}&page=${global.search.page}`);
    const data = await res.json();

    hidespinner();

    return data;
}


function showspinner(){
    document.querySelector('.spinner').classList.add('show')
}
function hidespinner(){
    document.querySelector('.spinner').classList.remove('show')
}