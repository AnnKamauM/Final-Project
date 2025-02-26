function buyer() {
  let firstName = prompt("What is your name?");
  let email = prompt("Please enter your email address");
  let age = prompt("How old are you?");

  if (age <= 16) {
    alert(
      `Sorry ${firstName}, You need to be 18 to buy our chocolates.We'll be in touch via ${email}💝`
    );
  } else {
    alert(
      `Thank you ${firstName},Enjoy your order.We'll be in touch via ${email}🍫`
    );
  }
}

let buyButton = document.querySelector("button");
buyButton.addEventListener("click", buyer);
