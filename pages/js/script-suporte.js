const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const assuntoInput = document.querySelector("#problem");
const messageTextarea = document.querySelector("#message");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (nameInput.value === "") {
        alert("Por favor insira seu nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por favor coloque um email válido");
        return;
    }

    if (assuntoInput.value === ""){
        alert("Fale o problema")
        return;
    }

    if (messageTextarea.value === "") {
        alert("Insira uma mensagem por favor");
        return;
    }

    form.submit();
});

function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    return emailRegex.test(email);
}