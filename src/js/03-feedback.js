import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const FFS_KEY = "feedback-form-state";
const { email, message } = form.elements;

form.addEventListener("input", throttle(event => {
    event.preventDefault();
    
    let serializedData = {
        "email" : email.value,
        "message" : message.value
    };
    localStorage.setItem(FFS_KEY,JSON.stringify(serializedData));
}, 500));

form.addEventListener("submit", event => {
    event.preventDefault();
    let stored = localStorage.getItem(FFS_KEY);
    if (stored != null) {
        console.log(stored);
    }
    form.reset();
    localStorage.clear();
});

addEventListener("load", event => {
    try {
        let stored = localStorage.getItem(FFS_KEY);
        let storedDTO = JSON.parse(stored);
        email.value = storedDTO.email ?? "";
        message.value = storedDTO.message ?? "";
    } catch (error) {
        form.reset();
    } 
});