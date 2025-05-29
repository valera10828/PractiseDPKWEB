export function initPracticeDays(practiceDaysData) {
  const practiceDaysContainer = document.querySelector(
    "#section4 .practice-days"
  );
  if (!practiceDaysContainer) {
    console.error("Элемент .practice-days не найден в #section4");
    return;
  }

  practiceDaysData.forEach((dayData) => {
    const dayButton = document.createElement("button");
    dayButton.classList.add("day-btn");
    dayButton.textContent = dayData.day;

    const tasksDiv = document.createElement("div");
    tasksDiv.classList.add("day-tasks");
    tasksDiv.innerHTML = `<p>${dayData.tasks}</p>`;

    dayButton.addEventListener("click", () => {
      tasksDiv.style.display =
        tasksDiv.style.display === "none" || tasksDiv.style.display === ""
          ? "block"
          : "none";
    });

    practiceDaysContainer.appendChild(dayButton);
    practiceDaysContainer.appendChild(tasksDiv);
  });
}
