export function initDynamicForm() {
  const createFormBtn = document.getElementById("createFormBtn");
  const dynamicFormContainer = document.getElementById("dynamicFormContainer");

  if (createFormBtn && dynamicFormContainer) {
    createFormBtn.addEventListener("click", function () {

      dynamicFormContainer.innerHTML = "";


      const form = document.createElement("form");
      form.id = "studentRegisterForm";


      const nameLabel = document.createElement("label");
      nameLabel.textContent = "Имя:";
      const nameInput = document.createElement("input");
      nameInput.type = "text";
      nameInput.id = "studentName";
      nameInput.name = "studentName";
      nameInput.required = true;
      form.appendChild(nameLabel);
      form.appendChild(document.createElement("br"));
      form.appendChild(nameInput);
      form.appendChild(document.createElement("br"));


      const emailLabel = document.createElement("label");
      emailLabel.textContent = "Email:";
      const emailInput = document.createElement("input");
      emailInput.type = "email";
      emailInput.id = "studentEmail";
      emailInput.name = "studentEmail";
      emailInput.required = true;
      form.appendChild(emailLabel);
      form.appendChild(document.createElement("br"));
      form.appendChild(emailInput);
      form.appendChild(document.createElement("br"));


      const addressLabel = document.createElement("label");
      addressLabel.textContent = "Адрес:";
      const addressTextarea = document.createElement("textarea");
      addressTextarea.id = "studentAddress";
      addressTextarea.name = "studentAddress";
      form.appendChild(addressLabel);
      form.appendChild(document.createElement("br"));
      form.appendChild(addressTextarea);
      form.appendChild(document.createElement("br"));


      const submitButton = document.createElement("button");
      submitButton.type = "submit";
      submitButton.textContent = "Зарегистрировать";
      submitButton.classList.add("submit-btn");
      form.appendChild(submitButton);

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const studentName = document.getElementById("studentName").value;
        const studentEmail = document.getElementById("studentEmail").value;
        alert(`Студент ${studentName} (${studentEmail}) зарегистрирован!`);
        form.reset();
      });

      dynamicFormContainer.appendChild(form);
    });
  } else {
    console.error(
      "Кнопка createFormBtn или контейнер dynamicFormContainer не найдены."
    );
  }
}
