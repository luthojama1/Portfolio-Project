const seeMoreBtn = document.querySelector("#seeMoreBtn");
const projectCards = document.querySelectorAll(".grid_container");

const cardsToShow = 3;
let visibleCards = cardsToShow;

export function showCards() {
    projectCards.forEach((card, index) => {
        card.classList.toggle("hidden", index >= visibleCards);
    });

    seeMoreBtn.textContent =
        visibleCards >= projectCards.length
            ? "See Less"
            : "See More";
}

showCards();

seeMoreBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (visibleCards >= projectCards.length) {
        visibleCards = cardsToShow;
    } else {
        visibleCards += cardsToShow;
    }

    showCards();
});