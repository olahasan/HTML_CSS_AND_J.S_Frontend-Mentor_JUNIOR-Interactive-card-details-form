document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("need");
  const card = document.querySelector(".card");
  const messages = {
    personp: document.getElementById("personp"),
    numberp: document.getElementById("numberp"),
    onep: document.getElementById("onep"),
    twop: document.getElementById("twop"),
  };

  form.addEventListener("keyup", handleKeyUp);
  form.addEventListener("submit", handleSubmit);

  function handleKeyUp(e) {
    const target = e.target;

    if (target.matches("#Cardholder")) {
      updateField("cna", target.value);
      hideMessage("personp");
    } else if (target.matches("#Numbercard")) {
      updateField("cn", target.value);
      hideMessage("numberp");
    } else if (target.matches("#month")) {
      updateField("cy", target.value);
      hideMessage("onep");
    } else if (target.matches("#CVC")) {
      updateField("thelast", target.value);
      hideMessage("twop");
    }
  }

  document.getElementById("month").onchange = function () {
    cy.value = this.value;
    cy.style.color = "white";
    onep.classList.add("hidden");
  };

  function handleSubmit(e) {
    e.preventDefault();
    let valid = true;

    if (document.getElementById("Cardholder").value === "") {
      valid = false;
      showMessage("personp");
    }
    if (document.getElementById("Numbercard").value === "") {
      valid = false;
      showMessage("numberp");
    }
    if (document.getElementById("month").value === "") {
      valid = false;
      showMessage("onep");
    }
    if (document.getElementById("CVC").value === "") {
      valid = false;
      showMessage("twop");
    }

    if (valid) {
      form.style.display = "none";
      card.classList.remove("hidden");
      card.addEventListener("click", handleCardClick);
    }
  }

  function handleCardClick(e) {
    if (e.target.tagName.toLowerCase() === "button") {
      location.reload();
    }
  }

  function updateField(fieldId, value) {
    const field = document.getElementById(fieldId);
    console.log(field);
    if (field) {
      field.value = value;
      field.style.color = "white";
    }
  }

  function showMessage(messageId) {
    messages[messageId].classList.remove("hidden");
  }

  function hideMessage(messageId) {
    messages[messageId].classList.add("hidden");
  }
});
