import { displayModal } from "./js_files/modal.js";
import { formValidation } from "./js_files/form_validation.js";
import { sideBarMenu } from "./js_files/hamburger_menu.js";
import { showCards } from "./js_files/see_more_feature.js";


function portfolioFunctionality(){
    displayModal();
    formValidation();
    sideBarMenu();
    showCards();
};

portfolioFunctionality();