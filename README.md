Личный кабинет продавца на маркетплейсе по мотивам [тестового задания на стажировку «Авито»](https://gitverse.ru/avito.tech/tech-internship/content/main/Tech%20Internships%20/Frontend/Frontend-trainee-assignment-2024/frontend-trainee-assignment-autumn-2024.md). Позволяет управлять своими объявлениями и заказами.

## Стек

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![RTK Query](https://img.shields.io/badge/RTK%20Query-000000?style=for-the-badge&logo=redux&logoColor=white) ![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white) [![Feature-Sliced Design][shields-fsd-domain]](https://feature-sliced.design/) ![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white) ![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

[shields-fsd-domain]: https://img.shields.io/badge/Feature--Sliced-Design?style=for-the-badge&color=F2F2F2&labelColor=262224&logoWidth=10&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAaCAYAAAC3g3x9AAAACXBIWXMAAALFAAACxQGJ1n/vAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABISURBVHgB7dKxCQAgDETR0w2cws0cys2cwhEUBbsggikCuVekDHwSQFlYo7Q+8KnmtHdFWMdk2cl5wSsbxGSZw8dm8pX9ZHUTMBUgGU2F718AAAAASUVORK5CYII=

## Запуск

1. Добавьте файл .env в корень проекта и заполните по примеру .env.example.
2. `npm install`
3. `npm run server`
4. `npm run build`
5. `npm run start`

## Страница объявлений

- Отображается список всех объявлений продавца.
- Есть пагинация.
- Можно выбрать количество объявлений на странице (по умолчанию 10).
- Есть поиск по названию от трех сомволов.
- Есть сортировка по цене/лайкам/просмотрам.
- Можно перейти на страницу объявления по клику на карточку.
- На карточке объявления выводится информация о нем:
    - картинка,
    - название,
    - стоимость,
    - количество просмотров,
    - количество лайков;
- Есть модальное окно для создания новых объявлений

## Страница объявления

- Выводится подробная информация об объявлении.
- Можно редактировать и удалить объявление.

## Страница заказов

- Выводится список заказов.
- Есть пагинация.
- Есть сортировка по сумме заказа.
- При клике на кнопку «Показать все объявления» открывается модальное окно со списком объявлений в заказе. При клике на объявление можно перейти на его страницу.

## Панель навигации

- Вкладка «Объявления» — переход на страницу объявлений.
- Вкладка «Заказы» — переход на страницу заказов.
