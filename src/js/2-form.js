let formData = {
    email: "",
    message: ""
}

const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");
email.addEventListener("input", (event) => {
    formData.email = event.currentTarget.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});
message.addEventListener("input", (event) => {
    formData.message = event.currentTarget.value.trim();
    localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});

const form = document.querySelector(".feedback-form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    if (!form.elements.email.value || !form.elements.message.value)
        alert("All form fields must be filled in");
    else {
        console.log(formData);
        email.value = "";
        message.value = "";
        localStorage.clear();
    }
})

window.addEventListener("load", (event) => {
    const storage_data = JSON.parse(localStorage.getItem("feedback-form-state"))
    if (storage_data) {
        formData = storage_data;
        email.value = formData.email ?? "";
        message.value = formData.message ?? "";
    }
});