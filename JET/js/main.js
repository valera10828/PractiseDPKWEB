// Инициализация GSAP
gsap.registerPlugin(ScrollTrigger);

// Загрузчик
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    
    gsap.to(loader, {
        opacity: 0,
        duration: 0.8,
        onComplete: () => {
            loader.style.display = 'none';
            
            // Анимация появления элементов на главном экране
            gsap.to('.hero-content .reveal-text', {
                opacity: 1,
                y: 0,
                stagger: 0.2,
                duration: 0.8,
                ease: 'power3.out'
            });
        }
    });
});

// Изменение стилей шапки при прокрутке
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Мобильное меню
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Анимация бургер-меню
    const lines = burgerMenu.querySelectorAll('.line');
    if (navLinks.classList.contains('active')) {
        gsap.to(lines[0], { rotate: 45, y: 8, duration: 0.3 });
        gsap.to(lines[1], { opacity: 0, duration: 0.3 });
        gsap.to(lines[2], { rotate: -45, y: -8, duration: 0.3 });
    } else {
        gsap.to(lines[0], { rotate: 0, y: 0, duration: 0.3 });
        gsap.to(lines[1], { opacity: 1, duration: 0.3 });
        gsap.to(lines[2], { rotate: 0, y: 0, duration: 0.3 });
    }
});

// Плавная прокрутка
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
            // Закрываем мобильное меню при клике на ссылку
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const lines = burgerMenu.querySelectorAll('.line');
                gsap.to(lines[0], { rotate: 0, y: 0, duration: 0.3 });
                gsap.to(lines[1], { opacity: 1, duration: 0.3 });
                gsap.to(lines[2], { rotate: 0, y: 0, duration: 0.3 });
            }
        }
    });
});

// Параллакс эффект для фона
window.addEventListener('scroll', () => {
    const parallaxBgs = document.querySelectorAll('.parallax-bg');
    
    parallaxBgs.forEach(bg => {
        const scrollPosition = window.pageYOffset;
        const parentElement = bg.parentElement;
        const parentTop = parentElement.offsetTop;
        const speed = 0.5;
        
        if (scrollPosition > parentTop - window.innerHeight && scrollPosition < parentTop + parentElement.offsetHeight) {
            const yPos = (scrollPosition - parentTop) * speed;
            gsap.set(bg, { y: yPos });
        }
    });
});

// Анимация появления элементов при скролле
const animateElements = () => {
    // Текстовые элементы
    gsap.utils.toArray('.reveal-text').forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            onEnter: () => element.classList.add('active'),
            once: true
        });
    });
    
    // Изображения
    gsap.utils.toArray('.reveal-image').forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            onEnter: () => element.classList.add('active'),
            once: true
        });
    });
    
    // Карточки
    gsap.utils.toArray('.reveal-card').forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top 85%',
            onEnter: () => element.classList.add('active'),
            once: true
        });
    });
    
    // Форма
    gsap.utils.toArray('.reveal-form').forEach(element => {
        ScrollTrigger.create({
            trigger: element,
            start: 'top 80%',
            onEnter: () => element.classList.add('active'),
            once: true
        });
    });
};

animateElements();

// Анимация счетчиков
const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        
        ScrollTrigger.create({
            trigger: counter,
            start: 'top 80%',
            onEnter: () => {
                let count = 0;
                const updateCounter = () => {
                    const increment = target / 50;
                    if (count < target) {
                        count += increment;
                        counter.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.textContent = target;
                    }
                };
                updateCounter();
            },
            once: true
        });
    });
};

animateCounters();

// Фильтрация проектов
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Удаляем активный класс со всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Добавляем активный класс текущей кнопке
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        projectItems.forEach(item => {
            if (filterValue === 'all' || item.classList.contains(filterValue)) {
                gsap.to(item, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: 'power2.out',
                    clearProps: 'all'
                });
            } else {
                gsap.to(item, {
                    opacity: 0.3,
                    scale: 0.9,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            }
        });
    });
});

// Слайдер отзывов
const testimonialItems = document.querySelectorAll('.testimonial-item');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentIndex = 0;

const updateTestimonials = (index) => {
    // Скрываем все элементы
    testimonialItems.forEach(item => {
        item.classList.remove('active');
    });
    
    // Показываем текущий элемент
    testimonialItems[index].classList.add('active');
    
    // Обновляем точки
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

// Обработчики событий для навигации
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    updateTestimonials(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
    updateTestimonials(currentIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        updateTestimonials(currentIndex);
    });
});

// Автоматическое переключение слайдов
let testimonialInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    updateTestimonials(currentIndex);
}, 5000);

// Сброс интервала при ручном переключении
const resetInterval = () => {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonialItems.length;
        updateTestimonials(currentIndex);
    }, 5000);
};

nextBtn.addEventListener('click', resetInterval);
prevBtn.addEventListener('click', resetInterval);
dots.forEach(dot => dot.addEventListener('click', resetInterval));

// Кнопка "Наверх"
const backToTopButton = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Валидация формы
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Имитация отправки формы
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        submitButton.textContent = 'Отправка...';
        submitButton.disabled = true;
        
        setTimeout(() => {
            // Имитация успешной отправки
            alert('Ваше сообщение успешно отправлено! Мы свяжемся с вами в ближайшее время.');
            
            // Сброс формы
            contactForm.reset();
            
            // Возвращаем кнопку в исходное состояние
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }, 1500);
    });
}

// Дополнительные GSAP анимации
// Анимация героя
gsap.from('.hero-content h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.from('.hero-content p', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.from('.hero-content .btn', {
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 1.1,
    ease: 'power3.out'
});

// Анимация логотипа и навигации
gsap.from('.logo', {
    opacity: 0,
    x: -30,
    duration: 1,
    delay: 0.3,
    ease: 'power3.out'
});

gsap.from('.nav-links li', {
    opacity: 0,
    y: -20,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.5,
    ease: 'power3.out'
});

// Анимация скролл-индикатора
gsap.to('.scroll-indicator', {
    opacity: 1,
    y: 0,
    duration: 1,
    delay: 1.5,
    ease: 'power3.out'
});
