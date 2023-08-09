const form = document.getElementById("add-contact-form");
const contactPhones = [];

let contacts = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();
  addContact();
  updateContactBook();
});

function addContact() {
  const inputContactName = document.getElementById("contact-name");
  const inputContactPhone = document.getElementById("contact-phone");

  if (contactPhones.includes(inputContactPhone.value)) {
    alert(`O Número: ${inputContactPhone.value} já foi inserido`);
  } else {
    contactPhones.push(inputContactPhone.value);

    let contact = "<tr>";
    contact += `<td>${inputContactName.value}</td>`;
    contact += `<td>${inputContactPhone.value}</td>`;
    contact += "</tr>";

    contacts += contact;

    inputContactName.value = "";
    inputContactPhone.value = "";
  }
}

function updateContactBook() {
  const ContactBook = document.querySelector("tbody");
  ContactBook.innerHTML = contacts;
}
