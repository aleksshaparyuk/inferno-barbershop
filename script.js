// 1. Словарь переводов
const translations = {
    ru: {
        nav_services: "Услуги",
        nav_masters: "Мастера",
        nav_contacts: "Контакты",
        hero_title: 'Твой стиль.<br>Твои <span class="text-red">правила</span>.',
        hero_text: "Премиальные стрижки и опасное бритье в атмосфере настоящего мужского клуба. Почувствуй огонь качества.",
        hero_btn: "Записаться сейчас",
        feedback_title: "Предложи идею",
        feedback_subtitle: "Нам важно твое мнение. Помоги нам стать лучше.",
        form_name: "Твое имя",
        form_message: "Твое предложение или идея...",
        form_submit: "Отправить",
        location_title: "Как нас найти",
        location_subtitle: "Мы в самом центре города. Заезжай на своей или такси.",
        // ✅ ПРАВИЛЬНО: новые ключи ВНУТРИ объекта ru
        services_title: "Наши услуги",
        services_subtitle: "Классика и современные тренды в одном месте",
        service_1_title: "Мужская стрижка",
        service_1_desc: "Подбор формы, мытье головы, укладка премиальной косметикой.",
        service_2_title: "Моделирование бороды",
        service_2_desc: "Оформление контуров опасной бритвой, распаривание, уход маслами.",
        service_3_title: 'Комплекс "Отец и Сын"',
        service_3_desc: "Две стрижки и укладка по специальной семейной цене."
    },
    en: {
        nav_services: "Services",
        nav_masters: "Masters",
        nav_contacts: "Contacts",
        hero_title: 'Your style.<br>Your <span class="text-red">rules</span>.',
        hero_text: "Premium haircuts and dangerous shaving in the atmosphere of a real men's club. Feel the fire of quality.",
        hero_btn: "Book now",
        feedback_title: "Suggest an idea",
        feedback_subtitle: "Your opinion matters. Help us get better.",
        form_name: "Your name",
        form_message: "Your suggestion or idea...",
        form_submit: "Send",
        location_title: "Find us",
        location_subtitle: "We are in the city center. Drive or take a taxi.",
        // ✅ ПРАВИЛЬНО: новые ключи ВНУТРИ объекта en
        services_title: "Our Services",
        services_subtitle: "Classics and modern trends in one place",
        service_1_title: "Men's Haircut",
        service_1_desc: "Shape selection, head washing, styling with premium cosmetics.",
        service_2_title: "Beard Styling",
        service_2_desc: "Straight razor contouring, steaming, oil care.",
        service_3_title: "Father & Son Combo",
        service_3_desc: "Two haircuts and styling at a special family price."
    }
};

// 2. Функция смены языка
function changeLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = translations[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        element.placeholder = translations[lang][key];
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// 3. Слушатели событий на кнопки RU и EN
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        changeLanguage(lang);
    });
});

// 4. Обработка формы обратной связи
const form = document.getElementById('feedbackForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Спасибо! Твое предложение принято. Мы свяжемся с тобой.');
    form.reset();
});