# Продажи через Reels за 7 дней — Лендинг

Одностраничный лендинг для продажи образовательного продукта по созданию вирусных Reels в Instagram.

## 🚀 Live Demo
🔗 [https://julia-filipenko.vercel.app](https://julia-filipenko.vercel.app) _(развернуть на Vercel после подключения)_

## 📦 Что внутри
- **Продукт за $25**: Карта форматов Reels, 10 промтов для ChatGPT, тест на архетипы, трекер на 30 дней
- **Дополнительные офферы**: Кэмп, консультации 1:1, сценарии, личное ведение, запуск под ключ
- **Интеграции**: 
  - Оплата через Telegram-бот [@virus_reels_bot](https://t.me/virus_reels_bot)
  - Бронирование звонков через [Calendly](https://calendly.com/juliakoshka98/30min)
  - Ссылки на Instagram [@julia.filipenko1](https://www.instagram.com/julia.filipenko1)

## 🛠 Технологии
- Чистый HTML, CSS, JavaScript (без фреймворков)
- Адаптивная верстка (mobile-first)
- Светлая тема с градиентами (розовый/красный)
- Оптимизация для Vercel

## 📁 Структура проекта
```
.
├── index.html              # Основная страница
├── src/
│   ├── styles/
│   │   └── main.css        # Стили
│   └── js/
│       └── main.js         # Логика (smooth scroll, payment handlers)
├── public/
│   ├── 2025-10-28 21.08.13.jpg  # Фото спикера
│   └── assets/
│       └── icons/
│           └── favicon.svg  # Иконка сайта
├── vercel.json             # Конфигурация Vercel
├── package.json            # npm-зависимости (Vite для разработки)
└── README.md
```

## 🖥 Локальная разработка

### Вариант 1: Простое открытие
Просто откройте `index.html` в браузере (двойной клик).

### Вариант 2: С dev-сервером (рекомендуется)
```bash
npm install
npm run dev
```
Откройте `http://localhost:5173`

### Продакшен-сборка (опционально)
```bash
npm run build
npm run preview
```

## 🚢 Деплой на Vercel

### Автоматический деплой из GitHub
1. Зайдите на [vercel.com](https://vercel.com)
2. Подключите GitHub-репозиторий `vetalione/julia_filipenko`
3. Vercel автоматически определит настройки из `vercel.json`
4. Нажмите **Deploy**

### Ручной деплой через CLI
```bash
npm i -g vercel
vercel --prod
```

После деплоя:
- Скопируйте URL и обновите README
- Настройте custom domain (если нужно)
- Проверьте мобильную версию

## 📱 Особенности мобильной версии
- Скрытая навигация на экранах <900px
- Плавающая CTA-кнопка на всю ширину
- Уменьшенные шрифты и отступы
- Вертикальная раскладка секций
- Фото спикера 160px вместо 200px

## 🔗 Внешние ссылки
- Telegram-бот оплаты: [@virus_reels_bot](https://t.me/virus_reels_bot)
- Бронирование звонков: [Calendly](https://calendly.com/juliakoshka98/30min)
- Instagram автора: [@julia.filipenko1](https://www.instagram.com/julia.filipenko1)

## 📝 Следующие шаги
- [ ] Добавить страницы: `privacy.html`, `offer.html`, `contacts.html`
- [ ] Настроить аналитику (GTM/GA4/Meta Pixel)
- [ ] Подключить реальную оплату через Telegram-бот
- [ ] Добавить email-рассылку после покупки
- [ ] A/B тестирование заголовков и CTA

## 👤 Автор
Юлия Филипенко — эксперт по Reels и продажам в Instagram

---
© 2025 Продажи через Reels. Все права защищены.
