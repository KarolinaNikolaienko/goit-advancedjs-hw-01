let formData = {
    email: "",
    message: ""
}

const email = document.querySelector("input[name='email']");
const message = document.querySelector("textarea[name='message']");
email.addEventListener("input", (event) => {
    formData.email = event.currentTarget.value.trim();
});
message.addEventListener("input", (event) => {
    formData.message = event.currentTarget.value.trim();
});

const submit_btn = querySelector("button");
submit_btn.addEventListener("submit", (event) => {
    event.preventDefault();
})