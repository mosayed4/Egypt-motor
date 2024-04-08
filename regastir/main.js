let emailInput = document.getElementById("email");

let inputs = document.querySelectorAll("form input");

let passwordInput = document.getElementById("password");

let buttonLogin = document.querySelectorAll(".login");

let buttonNext = document.querySelectorAll(".next");

let nextMobile = document.querySelectorAll(".next.mobile");

let confirmMobile = document.querySelector(".btns-mobile .confirm");

let confirmButton = document.querySelectorAll(".confirm");

let buttonBack = document.querySelectorAll(".btn-back");

let btnsMobile = document.querySelector(".btns-mobile");

let spanError = document.querySelectorAll("form .holder .error");

let containers = document.querySelectorAll(".steps-container");

let allLis = document.querySelectorAll("li");

let planCards = document.querySelectorAll(".piece .box .card");

let planPayments = document.querySelectorAll(".monthly-payments");

let totalCost = document.querySelectorAll(".finishing-up .cost");

let changePlan = document.querySelector(".change");

let regName = /^[^*|\":<>[\]{}`\\()';@&$]+$/gi;

let regEmail = /\w+@\w+.com/gi;

let regPhone = /^[0-9]*$/gi;

let regPassword = /\w*$/gi;

let step = 1;

function checkInputsValues() {
  let done = [];
  inputs.forEach((input, index) => {
    if (input.value === "") {
      input.style.borderColor = "hsl(354, 84%, 57%)";
      spanError[index].style.opacity = "0.7";
      spanError[index].pointerEvents = "auto";
    } else {
      input.style.borderColor = "";
      spanError[index].style.opacity = "0";
      spanError[index].pointerEvents = "none";
      done.push(true);
    }
  });
  return done.length === inputs.length;
}

function checkValidation() {
  isvalid = [];
  if (emailInput.value.match(regEmail) === null) {
    emailInput.style.borderColor = "hsl(354, 84%, 57%)";
    spanError[0].style.opacity = "0.7";
    spanError[0].style.pointerEvents = "auto";
    spanError[0].textContent = "Not Valid";
  } else {
    // nameInput.style.borderColor = "";
    spanError[0].style.opacity = "0";
    spanError[0].style.pointerEvents = "none";
    spanError[0].textContent = "";
    isvalid.push(true);
  }
  if (passwordInput.value.match(regPassword) === null) {
    passwordInput.style.borderColor = "hsl(354, 84%, 57%)";
    spanError[1].style.opacity = "0.7";
    spanError[1].style.pointerEvents = "auto";
    spanError[1].textContent = "Not Valid";
  } else {
    passwordInput.style.borderColor = "";
    spanError[1].style.opacity = "0";
    spanError[1].style.pointerEvents = "none";
    spanError[1].textContent = "";
    isvalid.push(true);
  }
  return isvalid.length === inputs.length;
}

function showNextContainer() {
  containers.forEach((container, index) => {
    container.style.display = "none";
    if (index === step - 1) {
      containers[index].style.display = "block";
      buttonBack.forEach((button) => {
        button.style.display = "block";
      });
      allLis.forEach((li) => {
        li.classList.remove("active");
      });
      allLis[index].classList.add("active");
    }
    if (step === 3) {
      buttonNext.forEach((button) => {
        button.style.display = "none";
      });
      confirmMobile.style.display = "block";
    }
    if (index === step - 1) {
      buttonLogin.forEach((button) => {
        button.style.display = "block";
      });
    } else {
      buttonLogin.forEach((button) => {
        button.style.display = "none";
      });
    }
    if (step === 2) {
      nextMobile.forEach((button) => {
        button.style.display = "block";
      });
    }
  });
}

function showBackContainer() {
  containers.forEach((container, index) => {
    container.style.display = "none";
    if (index === step - 1) {
      containers[index].style.display = "block";
      if (step === 1) {
        buttonBack.forEach((button) => {
          button.style.display = "none";
        });
        buttonLogin.forEach((button) => {
          button.style.display = "block";
        });
      }
      allLis.forEach((li) => {
        li.classList.remove("active");
      });
      allLis[index].classList.add("active");
    }
    buttonNext.forEach((button) => {
      button.style.display = "block";
    });
    confirmMobile.style.display = "none";
    if (step === 1) {
      nextMobile.forEach((button) => {
        button.style.display = "none";
      });
    } else {
      nextMobile.forEach((button) => {
        button.style.display = "block";
      });
    }
  });
}

buttonLogin.forEach((button) => {
  button.onclick = () => {
    if (checkInputsValues() === false) return;
    if (checkValidation() === false) return;
    step += 1;
    showNextContainer();
  };
});

buttonNext.forEach((button) => {
  button.onclick = () => {
    if (checkInputsValues() === false) return;
    if (checkValidation() === false) return;
    step += 1;
    showNextContainer();
  };
});

buttonBack.forEach((button) => {
  button.onclick = function () {
    step -= 1;
    showBackContainer();
  };
});

// card Click
planCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});

// confirm button
confirmButton.forEach((button) => {
  button.onclick = function () {
    containers.forEach((container) => {
      container.style.display = "none";
    });
    containers[3].style.display = "block";
    confirmMobile.style.display = "none";
  };
});
