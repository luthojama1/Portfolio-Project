export function introductionLoader(){
    window.addEventListener("load", ()=>{
        let intro_animation_heading = document.querySelector("#intro_animation_heading");
        let intro_animation = document.querySelector("#intro_animation");

        setTimeout(()=>{
            intro_animation_heading.style.opacity = "1";
            intro_animation_heading.style.transform = "translateY(0)"
        }, 300)

        setTimeout(()=>{
            intro_animation.style.top = "-100%"
        }, 2000)
    })
}