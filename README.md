# Учебный Проект: Full-Stack Приложение

Этот проект создан в учебных целях для демонстрации разработки full-stack приложения с использованием современных технологий.

## Технологии

Проект использует следующие технологии:

### Backend
- **Node.js** - JavaScript runtime для сервера
- **Express.js** - Фреймворк для создания REST API
- **Prisma** - ORM для работы с базой данных
- **PostgreSQL** - Реляционная база данных (через Prisma Adapter)
- **CORS** - Middleware для обработки CORS
- **Morgan** - Middleware для логирования HTTP запросов

### Frontend
- **Vue.js 3** - Прогрессивный JavaScript фреймворк
- **Vite** - Быстрый инструмент сборки и разработки
- **Vue DevTools** - Инструменты разработчика для Vue

## Структура проекта

```
site/
├── backend/          # Серверная часть
│   ├── app.js       # Главный файл приложения
│   ├── package.json # Зависимости backend
│   ├── prisma.config.ts # Конфигурация Prisma
│   └── prisma/      # База данных
│       ├── schema.prisma
│       └── migrations/
├── frontend/         # Клиентская часть
│   ├── src/
│   │   ├── App.vue  # Главный компонент Vue
│   │   ├── main.js  # Точка входа
│   │   └── assets/  # Стили и ресурсы
│   ├── package.json # Зависимости frontend
│   ├── vite.config.js # Конфигурация Vite
│   └── index.html   # HTML шаблон
└── README.md        # Этот файл
```

## Запуск проекта

### Предварительные требования
- Node.js (версия 20.19.0 или выше, или 22.12.0+)
- PostgreSQL база данных
- npm или yarn

### Настройка backend

1. Перейдите в папку backend:
   ```bash
   cd backend
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Настройте переменные окружения. Создайте файл `.env` в папке backend и добавьте:
   ```
   DATABASE_URL="postgresql://username:password@localhost:5432/database_name"
   ```

4. Запустите миграции Prisma (если база данных настроена):
   ```bash
   npx prisma migrate dev
   ```

5. Сгенерируйте Prisma Client:
   ```bash
   npx prisma generate
   ```

6. Запустите сервер:
   ```bash
   node app.js
   ```

   Сервер будет запущен на `http://localhost:3000` (или другом порту, указанном в app.js).

### Настройка frontend

1. Перейдите в папку frontend:
   ```bash
   cd frontend
   ```

2. Установите зависимости:
   ```bash
   npm install
   ```

3. Запустите приложение в режиме разработки:
   ```bash
   npm run dev
   ```

   Приложение будет доступно на `http://localhost:5173` (стандартный порт Vite).

## Использование

После запуска backend и frontend, откройте браузер и перейдите на адрес frontend (обычно `http://localhost:5173`). Приложение будет взаимодействовать с API backend для получения и отправки данных.

## Разработка

- Backend API доступен на порту 3000
- Frontend использует горячу перезагрузку через Vite
- Изменения в коде автоматически применяются

## Лицензия

Этот проект создан исключительно в учебных целях.