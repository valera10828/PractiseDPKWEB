const correctAnswers = {
  q1: 'b', // HTML - язык разметки
  q2: 'a', // CSS для оформления веб-страниц
  q3: 'b', // JavaScript - клиентский язык программирования
  q4: 'a', // DOM - Document Object Model
  q5: 'a', // <a> используется для ссылок
  q6: 'a', // push() добавляет элемент в конец
  q7: 'b', // . селектор класса
  q8: 'a', // querySelector для поиска элементов в DOM
  q9: 'a', // SQL - язык структурированных запросов
  q10: 'a', // API - программный интерфейс приложения
  q11: 'c', // Integer не существует в JavaScript
  q12: 'a', // Git - система контроля версий
  q13: 'b', // GET используется для получения данных
  q14: 'a', // responsive design - адаптивный дизайн
  q15: 'b', // localStorage - хранение в браузере
  q16: 'b', // REST API - архитектурный стиль
  q17: 'b', // SQL инъекция - техника атаки
  q18: 'b', // Python для машинного обучения
  q19: 'a', // CORS - Cross-Origin Resource Sharing
  q20: 'a', // PWA - Progressive Web Application
};

function initTestForm() {
  const checkTestBtn = document.getElementById('checkTestBtn');
  if (checkTestBtn) {
    checkTestBtn.addEventListener('click', checkTestResults);
  }
}

function checkTestResults() {
  const testForm = document.getElementById('testForm');
  const testResult = document.getElementById('testResult');
  
  if (!testForm || !testResult) {
    console.error('Элементы формы теста не найдены');
    return;
  }
  
  let score = 0;
  let totalQuestions = Object.keys(correctAnswers).length;
  let answers = {};

  for (let i = 1; i <= totalQuestions; i++) {
    const questionName = `q${i}`;
    const selectedOption = testForm.querySelector(`input[name="${questionName}"]:checked`);
    
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      answers[questionName] = userAnswer;
      
      if (userAnswer === correctAnswers[questionName]) {
        score++;
      }
    } else {
      answers[questionName] = 'Не отвечено';
    }
  }

  const percentage = (score / totalQuestions) * 100;
  
  // Определяем оценку
  let grade;
  if (percentage >= 90) {
    grade = 'Отлично';
  } else if (percentage >= 75) {
    grade = 'Хорошо';
  } else if (percentage >= 60) {
    grade = 'Удовлетворительно';
  } else {
    grade = 'Неудовлетворительно';
  }

  console.log('Результаты теста:');
  console.log(`Правильных ответов: ${score} из ${totalQuestions}`);
  console.log(`Процент правильных ответов: ${percentage.toFixed(2)}%`);
  console.log(`Оценка: ${grade}`);
  console.log('Ответы пользователя:', answers);

  testResult.innerHTML = `
    <h3>Результаты тестирования:</h3>
    <p>Правильных ответов: ${score} из ${totalQuestions}</p>
    <p>Процент правильных ответов: ${percentage.toFixed(2)}%</p>
    <p>Оценка: ${grade}</p>
  `;
  testResult.style.display = 'block';
}

export { initTestForm, checkTestResults as checkTest };
