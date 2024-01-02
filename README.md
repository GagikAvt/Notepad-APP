# Notepad-APP

# Простой онлайн-блокнот

Это простое веб-приложение для создания, редактирования и удаления текстовых заметок. Приложение состоит из фронтенда, написанного на HTML, CSS и JavaScript, а также бэкенда, реализованного с использованием Node.js и Express.js.

## Как использовать

### Установка зависимостей

Перейдите в корневую директорию проекта и выполните команду:
npm install

#### Запуск сервера
Перейдите в директорию server и выполните:
node server.js

Сервер будет доступен по адресу http://localhost:3000

###### Запуск фронтенда
В корневой директории проекта выполните:
http-server public

Фронтенд будет доступен по адресу http://localhost:8080

# API Эндпоинты

GET /api/notes: Получение списка заметок.
POST /api/notes: Добавление новой заметки.
DELETE /api/notes/:id: Удаление заметки по идентификатору.

# Структура проекта

notepad-app/
|-- public/
|   |-- index.html
|   |-- style.css
|   |-- main.js
|-- server/
|   |-- server.js
|-- data/
|   |-- notes.json
|-- package.json
|-- package-lock.json
|-- README.md

# Технологии
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js
Хранение данных: JSON файл

# Зависимости
Express.js: Фреймворк для Node.js.
http-server: Простой веб-сервер для статических файлов.

# Автор
Gagik Avtandilyan