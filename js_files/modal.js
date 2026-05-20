export function displayModal(){
let modal_show = document.querySelector("#modal_show");
let modal_container = document.querySelector("#modal_container");
let close_modal_btn = document.querySelector("#close_modal_btn");

modal_show.addEventListener("click", ()=> {
    modal_container.classList.add("open")
});

close_modal_btn.addEventListener("click", ()=>{
    modal_container.classList.remove("open")
});
}
