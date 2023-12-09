# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)

node index.js --action="list"

https://ibb.co/567s3TH

<img src="https://i.ibb.co/0cwYLqb/list.png" alt="list" border="0" />

# Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.

node index.js --action="getByID" --id 05olLMgyVQdWRwgKfg5J6

https://ibb.co/m518bbs

<img src="https://i.ibb.co/ZztmGGs/getById.png" alt="getById" border="0" />

# Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту

node index.js --action="add" --name Alvaro --email capibara@gmail.com --phone 969-69-69

https://ibb.co/jg7PmGR

<img src="https://i.ibb.co/zGKTpbJ/add.png" alt="add" border="0" />

# Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.

node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH

https://ibb.co/jg7PmGR

<img src="https://i.ibb.co/zGKTpbJ/add.png" alt="add" border="0" />
