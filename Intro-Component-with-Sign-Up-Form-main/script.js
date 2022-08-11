const submit = document.getElementById("submit");

let emailFormat = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
let name = ["First Name cannot be empty", "Last Name cannot be empty", "Looks like this is not an email", "Password cannot be empty"];

submit.addEventListener("click", () => {
    const input = document.querySelectorAll("input");
    const text = document.querySelectorAll(".text");

    for(let i = 0; i < input.length; i++) {
        for(let i = 0; i < text.length; i++) {
           if(input[i].value === "") {
            input[i].classList.add("error");
            text[i].innerHTML = name[i];
        } else {
            input[i].classList.remove("error");
            text[i].innerHTML = "";
        } 
    }

    if(input[2].value.match(emailFormat)) {
        input[2].classList.remove("error");
    } else {
        input[2].classList.add("error");
        text[2].innerHTML = name[2];
    }
} 
});
