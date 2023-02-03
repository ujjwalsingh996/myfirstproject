function onsignup(event) {
    event.preventDefault();
    console.log("Hello World");
    console.log(event.target.firstname.value);
    console.log(event.target.email.value);
    console.log(event.target.phone.value);
    console.log(event.target.time.value);
    console.log(event.target.date.value);
}
