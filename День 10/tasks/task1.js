function initRegisterForm() {
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const fullName = document.getElementById('fullName').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
      
      if (password !== confirmPassword) {
        alert('Пароли не совпадают!');
        return;
      }
      
      alert('Регистрация успешно выполнена!');
      registerForm.reset();
    });
  }
}

export { initRegisterForm };
