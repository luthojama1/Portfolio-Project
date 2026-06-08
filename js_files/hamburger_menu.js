const mobile_menu = document.querySelector("#mobile_menu");
const close_btn = document.querySelector("#close_btn");
const nav_menu = document.querySelector("#nav_menu");

export function sideBarMenu(){
    
    mobile_menu.addEventListener("click", ()=>{
        nav_menu.style.display = "block";
        nav_menu.style.transition = "all 0.3s ease";
    })

    close_btn.addEventListener("click", e =>{
        e.preventDefault();

        nav_menu.style.display = "none";
    })
}