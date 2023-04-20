function samasyabhayo() {
    let samasya = document.getElementById("error-img");
    let email = document.getElementById("email-put");
    if (email.value == "" || email == null) {
        samasya.style.visibility = "visible";
        email.style.borderColor = "red";
    }
    else {
        samasya.style.visibility = "hidden";
        email.style.borderColor = "black";
    }
}