import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const FFS_KEY = "feedback-form-state";
const { email, message } = form.elements;

form.addEventListener("input", throttle(event => {
    event.preventDefault();
    
    var serializedData = {
        "email" : email.value,
        "message" : message.value
    };
    localStorage.setItem(FFS_KEY,JSON.stringify(serializedData));
}, 500));

form.addEventListener("submit", event => {
    localStorage.clear();
});

addEventListener("load", event => {
    try {
        let stored = localStorage.getItem(FFS_KEY);
        let { email : saveMail, message : saveMess } = JSON.parse(stored);
        email.value = saveMail;
        message.value = saveMess;
    } catch (error) {
        form.reset();
    } 
});