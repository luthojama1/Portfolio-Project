const form = document.querySelector("#form");
const nameInput = document.querySelector("#nameInput");
const emailInput = document.querySelector("#emailInput");
const subjectInput = document.querySelector("#subjectInput");
const textArea = document.querySelector("#textArea");
const errorMessage = document.querySelector("#errorMessage");

export function formValidation(){
    form.addEventListener("submit", e =>{
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const text = textArea.value.trim();

        if(name === "" || email === "" || subject === "" || text === ""){
            errorMessage.textContent = "Please fill in all required fields. 😮‍💨";
            
            return;
        }

        if (!email.includes("@")){
            errorMessage.textContent = "Please enter a valid email. 🚶🏽";

            return;
        }

        errorMessage.textContent = "Form sent successfully, Thank you 😉";

        form.reset();
    })
}