import { displayModal } from "./js_files/modal.js";
import { introductionLoader } from "./js_files/intro_loader.js";
import { formValidation } from "./js_files/form_validation.js";

function portfolioFunctionality(){
    displayModal();
    introductionLoader();
    formValidation();
};

portfolioFunctionality();