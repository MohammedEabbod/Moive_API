
import {global} from "./globel.js"

export function HifhlightNav(){
    
    const links = document.querySelectorAll(".nav-link");
    

    links.forEach(function(link){
        if(link.getAttribute('href') === global.currentpage){
            link.classList.add('active');
        }
    })
}