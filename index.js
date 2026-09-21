import { displayModal } from "./js_files/modal.js";
import { introductionLoader } from "./js_files/intro_loader.js";
import { formValidation } from "./js_files/form_validation.js";
import { sideBarMenu } from "./js_files/hamburger_menu.js";

function portfolioFunctionality(){
    displayModal();
    formValidation();
    sideBarMenu();
};

portfolioFunctionality();