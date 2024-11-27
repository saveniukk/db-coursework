(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{508:function(t,v,_){"use strict";_.r(v);var r=_(13),D=Object(r.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"запити-зацікавлених-осіб"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#запити-зацікавлених-осіб"}},[t._v("#")]),t._v(" Запити зацікавлених осіб")]),t._v(" "),v("h2",{attrs:{id:"вступ"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#вступ"}},[t._v("#")]),t._v(" Вступ")]),t._v(" "),v("p",[t._v("У цьому документі розглядаються запити зацікавлених осіб. Вони відображають реальні потреби та очікування користувачів від роботи системи аналізу медіа-контенту. Такими особами можуть бути комерційні компанії, маркетингові агентства, громадські і політичні об’єднання та інші.")]),t._v(" "),v("h3",{attrs:{id:"мета"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#мета"}},[t._v("#")]),t._v(" Мета")]),t._v(" "),v("p",[t._v("Метою цього документа є визначення та узагальнення запитів зацікавлених осіб щодо функціональних можливостей та вимог до системи. Документ спрямований на уточнення очікувань користувачів, для яких вона буде розроблятися, а також на окреслення підходів і методів, які будуть використані для вирішення поставлених завдань з аналізу контенту. Це допоможе забезпечити відповідність кінцевого продукту потребам усіх сторін та досягти високої ефективності системи.")]),t._v(" "),v("h3",{attrs:{id:"контекст"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#контекст"}},[t._v("#")]),t._v(" Контекст")]),t._v(" "),v("p",[t._v("Цей документ описує різноманітні сценарії взаємодії між користувачем та системою, передумови, результати та можливі виняткові ситуації для кожного з них. Кожен сценарій має власну назву та набір кроків, що детально описують послідовність дій, які виконуються під час його реалізації. Завдяки цьому документу стає зрозуміло, як система аналізу медіа-контенту взаємодіятиме з користувачами та вирішуватиме різні завдання, пов'язані з аналізом контенту.")]),t._v(" "),v("h3",{attrs:{id:"основні-визначення-та-скорочення"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#основні-визначення-та-скорочення"}},[t._v("#")]),t._v(" Основні визначення та скорочення")]),t._v(" "),v("p",[v("strong",[t._v("Система")]),t._v(" "),v("a",{attrs:{href:"#link1"}},[t._v("[1]")]),t._v(" — множина взаємопов'язаних елементів, що утворюють єдине ціле, взаємодіють із середовищем та між собою, і мають якусь мету.")]),t._v(" "),v("p",[v("strong",[t._v("Користувач")]),t._v(" "),v("a",{attrs:{href:"#link2"}},[t._v("[2]")]),t._v(" — людина, котра використовує комп'ютер або мережеву службу.")]),t._v(" "),v("p",[v("strong",[t._v("Зацікавлені особи")]),t._v(" "),v("a",{attrs:{href:"#link3"}},[t._v("[3]")]),t._v(" — фізичні та юридичні особи, які мають інтерес до системи, забезпечують можливості для системи та є джерелом вимог до неї.")]),t._v(" "),v("p",[v("strong",[t._v("Обліковий запис")]),t._v(" "),v("a",{attrs:{href:"#link4"}},[t._v("[4]")]),t._v(" — сукупність наданої інформації про користувача, засобів та прав користувача відносно багатокористувацької системи.")]),t._v(" "),v("p",[v("strong",[t._v("Модератор")]),t._v(" "),v("a",{attrs:{href:"#link5"}},[t._v("[5]")]),t._v(" — людина, що відповідає за дотримання встановлених норм поводження на інтернет-ресурсах, частіше форумах.")]),t._v(" "),v("p",[t._v("Інші визначення "),v("RouterLink",{attrs:{to:"/requirements/state-of-the-art.html#основні-визначення"}},[t._v("Аналіз предметної області - Основні визначення")])],1),t._v(" "),v("h3",{attrs:{id:"посилання"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#посилання"}},[t._v("#")]),t._v(" Посилання")]),t._v(" "),v("ol",[v("li",[v("a",{attrs:{name:"link1",href:"https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0"}},[t._v("Система")])]),t._v(" "),v("li",[v("a",{attrs:{name:"link2",href:"https://uk.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%B8%D1%81%D1%82%D1%83%D0%B2%D0%B0%D1%87_(%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)"}},[t._v("Користувач")])]),t._v(" "),v("li",[v("a",{attrs:{name:"link3",href:"https://uk.wikipedia.org/wiki/%D0%97%D0%B0%D1%86%D1%96%D0%BA%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D1%96_%D1%81%D1%82%D0%BE%D1%80%D0%BE%D0%BD%D0%B8"}},[t._v("Зацікавлені особи")])]),t._v(" "),v("li",[v("a",{attrs:{name:"link4",href:"https://uk.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BB%D1%96%D0%BA%D0%BE%D0%B2%D0%B8%D0%B9_%D0%B7%D0%B0%D0%BF%D0%B8%D1%81"}},[t._v("Обліковий запис")])]),t._v(" "),v("li",[v("a",{attrs:{name:"link5",href:"https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80_(IT)"}},[t._v("Модератор")])])]),t._v(" "),v("h2",{attrs:{id:"короткии-зміст"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#короткии-зміст"}},[t._v("#")]),t._v(" Короткий зміст")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%D1%85%D0%B0%D1%80%D0%B0%D0%BA%D1%82%D0%B5%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%BA%D0%B0-%D0%B4%D1%96%D0%BB%D0%BE%D0%B2%D0%B8%D1%85-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%96%D0%B2"}},[t._v("Характеристика ділових процесів")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%D0%BA%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%B8%D0%B9-%D0%BE%D0%B3%D0%BB%D1%8F%D0%B4-%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D1%83"}},[t._v("Короткий огляд продукту")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%D1%84%D1%83%D0%BD%D0%BA%D1%86%D1%96%D0%BE%D0%BD%D0%B0%D0%BB%D1%8C%D0%BD%D1%96%D1%81%D1%82%D1%8C"}},[t._v("Функціональність")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%D0%BF%D1%80%D0%B0%D0%BA%D1%82%D0%B8%D1%87%D0%BD%D1%96%D1%81%D1%82%D1%8C"}},[t._v("Практичність")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%D0%BD%D0%B0%D0%B4%D1%96%D0%B9%D0%BD%D1%96%D1%81%D1%82%D1%8C"}},[t._v("Надійність")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%D0%BF%D1%80%D0%BE%D0%B4%D1%83%D0%BA%D1%82%D0%B8%D0%B2%D0%BD%D1%96%D1%81%D1%82%D1%8C"}},[t._v("Продуктивність")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%D0%B5%D0%BA%D1%81%D0%BF%D0%BB%D1%83%D0%B0%D1%82%D0%B0%D1%86%D1%96%D0%B9%D0%BD%D0%B0-%D0%BF%D1%80%D0%B8%D0%B4%D0%B0%D1%82%D0%BD%D1%96%D1%81%D1%82%D1%8C"}},[t._v("Експлутаційна придатність")])])]),t._v(" "),v("h2",{attrs:{id:"характеристика-ділових-процесів"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#характеристика-ділових-процесів"}},[t._v("#")]),t._v(" Характеристика ділових процесів")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("ID")])]),t._v(" "),v("th",[t._v("UserRegistration")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("НАЗВА")])]),t._v(" "),v("td",[t._v("Реєстрація користувача в системі")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("УЧАСНИКИ")])]),t._v(" "),v("td",[t._v("Користувач")])]),t._v(" "),v("tr",[v("td",[t._v("ПЕРЕДУМОВИ")]),t._v(" "),v("td",[t._v("1. Користувач не зареєстрований у системі.")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("2. Користувач увійшов за допомогою уснуючого облікового запису.")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("РЕЗУЛЬТАТ")])]),t._v(" "),v("td",[t._v("Створення облікового запису")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ВИКЛЮЧНІ СИТУАЦІЇ")])]),t._v(" "),v("td",[t._v("- 1. AlreadyRegistered — користувач вже зареєстрований  2. MissingData — відсутні необхідні реєстраційні дані  3. InvalidData — некоректні дані")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ОСНОВНИЙ СЦЕНАРІЙ")])]),t._v(" "),v("td",[t._v("1. Користувач відкриває сторінку реєстрації")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("2. Вводить особисті дані (ім'я, прізвище, email, пароль)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("3.  Система перевіряє введені дані")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("4. Створюється новий обліковий запис")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("5. Користувач отримує підтвердження про успішну реєстрацію")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("ID")]),t._v(" "),v("th",[t._v("UserAuthorization")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("НАЗВА")])]),t._v(" "),v("td",[t._v("Авторизація користувача")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("УЧАСНИКИ")])]),t._v(" "),v("td",[t._v("Користувач")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ПЕРЕДУМОВИ")])]),t._v(" "),v("td",[t._v("Користувач вже зареєстрований у системі")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("РЕЗУЛЬТАТ")])]),t._v(" "),v("td",[t._v("Створення облікового запису")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ВИКЛЮЧНІ СИТУАЦІЇ")])]),t._v(" "),v("td",[t._v("1. InvalidCredentials — введено некоректні дані")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("2. NotRegistered — користувач не зареєстрований")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("3. TooManyAttempts — забагато спроб входу")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ОСНОВНИЙ СЦЕНАРІЙ")])]),t._v(" "),v("td",[t._v("1. Користувач відкриває сторінку входу")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("2. Вводить дані для авторизації")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("3. Система перевіряє обліковий запис")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("4. Перевіряються дані авторизації")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("5. Користувач отримує доступ до свого облікового запису")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("ID")])]),t._v(" "),v("th",[t._v("CommentModeration")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("НАЗВА")])]),t._v(" "),v("td",[t._v("Модерація коментарів у соціальній мережі")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("УЧАСНИКИ")])]),t._v(" "),v("td",[t._v("Модератор, Користувач")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ПЕРЕДУМОВИ")])]),t._v(" "),v("td",[t._v("Користувач залишив коментар, модератор має права на модерацію")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("РЕЗУЛЬТАТ")])]),t._v(" "),v("td",[t._v("Коментар опубліковано або видалено залежно від рішення модератора")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ВИКЛЮЧНІ СИТУАЦІЇ")])]),t._v(" "),v("td",[t._v("1. Користувач залишив недопустимий коментар")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("2 Коментар вже видалено")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ОСНОВНИЙ СЦЕНАРІЙ")])]),t._v(" "),v("td",[t._v("1. Модератор переглядає нові коментарі в системі")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("2.  Система перевіряє наявність недопустимого контенту")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("3. Модератор вибирає коментар для перегляду")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("4. Система надає опції для публікації або видалення коментаря")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("5. Модератор приймає рішення про публікацію або видалення")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("6.Система повідомляє користувача про результат (коментар опубліковано або видалено)")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("ID")])]),t._v(" "),v("th",[t._v("NewsPublication")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("НАЗВА")])]),t._v(" "),v("td",[t._v("Публікація новинного контенту на веб-сайті")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("УЧАСНИКИ")])]),t._v(" "),v("td",[t._v("Журналіст, Редактор")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ПЕРЕДУМОВИ")])]),t._v(" "),v("td",[t._v("Журналіст підготував новину, редактор має права на публікацію")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("РЕЗУЛЬТАТ")])]),t._v(" "),v("td",[t._v("Новина опублікована на веб-сайті")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ВИКЛЮЧНІ СИТУАЦІЇ")])]),t._v(" "),v("td",[t._v("- Журналіст не надав достатньо інформації  - Редактор не має прав на публікацію")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ОСНОВНИЙ СЦЕНАРІЙ")])]),t._v(" "),v("td",[t._v("1. Журналіст готує та надсилає новину для публікації")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("2. Система перевіряє наявність всіх необхідних елементів (заголовок, текст, зображення)")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("3. Редактор отримує новину для перегляду")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("4. Редактор вносить правки або підтверджує публікацію")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("5. Система публікує новину на веб-сайті")])]),t._v(" "),v("tr",[v("td"),t._v(" "),v("td",[t._v("6. Система повідомляє редактора та журналіста про успішну публікацію новини.")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("ID")])]),t._v(" "),v("th",[t._v("MediaFind")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("НАЗВА")])]),t._v(" "),v("td",[t._v("Пошук медіа-контенту користувачем")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("УЧАСНИКИ")])]),t._v(" "),v("td",[t._v("Користувач, адміністратор системи")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ПЕРЕДУМОВИ")])]),t._v(" "),v("td",[t._v("1. Користувач має доступ до інформаційної системи."),v("br"),t._v("2. Користувач зареєстрований в системі."),v("br"),t._v("3. База даних медіа-контенту актуальна і містить інформацію.")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("РЕЗУЛЬТАТ")])]),t._v(" "),v("td",[t._v("Користувач отримує релевантні результати медіа-контенту згідно з його запитом.")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ВИКЛЮЧНІ СИТУАЦІЇ")])]),t._v(" "),v("td",[t._v("1. NoAccessException — користувач не може здійснити пошук через проблеми з підключенням, або проблеми на стороні сервера."),v("br"),t._v("2. ContentNotFoundException — запит користувача не дав жодних результатів. Користувач отримує повідомлення про те, що контент не знайдено."),v("br"),t._v("3. InsufficientPermissionException — користувач намагається отримати доступ до контенту, який потребує спеціальних прав, яких не має користувач.")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ОСНОВНИЙ СЦЕНАРІЙ")])]),t._v(" "),v("td",[t._v("1. Користувач відкриває інформаційну систему."),v("br"),t._v("2. Вводить ключові слова для пошуку медіа-контенту у відповідне поле."),v("br"),t._v("3. Система обробляє запит і здійснює пошук в базі даних."),v("br"),t._v("4. Система повертає список релевантних даних."),v("br"),t._v("5. Користувач переглядає результати."),v("br"),t._v("6. Користувач завершує сесію, або продовжує пошук.")])])])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[v("strong",[t._v("ID")])]),t._v(" "),v("th",[t._v("MediaCreate")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("НАЗВА")])]),t._v(" "),v("td",[t._v("Створення медіа-контенту користувачем")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("УЧАСНИКИ")])]),t._v(" "),v("td",[t._v("Користувач, адміністратор системи")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ПЕРЕДУМОВИ")])]),t._v(" "),v("td",[t._v("1. Користувач має доступ до інформаційної системи."),v("br"),t._v("2. Користувач зареєстрований в системі."),v("br"),t._v("3. Інформаційна система готова до отримання нового контенту (інтерфейс, ресурси, тощо)")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("РЕЗУЛЬТАТ")])]),t._v(" "),v("td",[t._v("Новий медіа-контент успішно створено та збережено в системі. Користувач отримує підтвердження про успішне створення контенту та можливість перегляду та редагування.")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ВИКЛЮЧНІ СИТУАЦІЇ")])]),t._v(" "),v("td",[t._v("1. InsufficientPermissionsException — користувач намагається створити контент без необхідних прав доступу."),v("br"),t._v("2. FileUploadException - помилка при завантаженні медіа-файлу (наприклад, недопустимий формат, або перевищено ліміт розміру."),v("br"),t._v("3. ServiceUnavailableException — інформаційна система тимчасово недоступна, через технічні роботи або збої.")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("ОСНОВНИЙ СЦЕНАРІЙ")])]),t._v(" "),v("td",[t._v("1. Користувач відкриває інформаційну систему."),v("br"),t._v('2. Користувач вибирає спеціальну опцію "Створити медіа-контент".'),v("br"),t._v("3.Інформаційна система відображає форму для введення деталей медіа-контенту, та завантаження медіа-файлу."),v("br"),t._v('4. Користувач заповнює необхідні поля, завантажує медіа-файл та натискає кнопку "зберегти".'),v("br"),t._v("5. Інформаціна система перевіряє дані. Якщо дані коректні, система зберігає контент і повертає повідомлення про успішне стаорення. Якщо дані некоректні, система повідомляє помилки та пропонує їх виправити."),v("br"),t._v("6. Користувач може переглядати новий контент у своєму профілі, або продовжувати створення нового контенту.")])])])]),t._v(" "),v("h2",{attrs:{id:"короткии-огляд-продукту"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#короткии-огляд-продукту"}},[t._v("#")]),t._v(" Короткий огляд продукту")]),t._v(" "),v("p",[t._v("Наша система аналізу медіа-контенту - це програмна платформа, яка забезпечує автоматизований збір, обробку та глибокий аналіз медіа-матеріалів з різних джерел, таких як новинні сайти, соціальні мережі, блоги, відеоплатформи та інші онлайн-ресурси.\nОсновне завдання системи - допомогти користувачам моніторити великий обсяг медіа-даних, виявляти тренди та надавати аналітичну інформацію для прийняття рішень.")]),t._v(" "),v("h3",{attrs:{id:"основні-категоріі-користувачів"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#основні-категоріі-користувачів"}},[t._v("#")]),t._v(" Основні категорії користувачів:")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Аналітики:")]),t._v("\nвикористовують систему для дослідження тенденцій у медіа, виявлення патернів та аналізу контенту.")]),t._v(" "),v("li",[v("strong",[t._v("Маркетологи:")]),t._v("\nзастосовують результати аналізу для оцінки медіа-стратегії та її впливу на аудиторію")]),t._v(" "),v("li",[v("strong",[t._v("Журналісти:")]),t._v("\nможуть використовувати систему для моніторингу важливих новинних джерел та аналізу тональності")]),t._v(" "),v("li",[v("strong",[t._v("Медіа-менеджери:")]),t._v("\nвикористовують систему для контролю контенту та вивчення його ефективності")])]),t._v(" "),v("h2",{attrs:{id:"функціональність"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#функціональність"}},[t._v("#")]),t._v(" Функціональність")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Збір контенту з різних джерел:")]),t._v("\nІнтеграція з соціальними мережами, новинними сайтами, блогами та іншими онлайн-платформами.\nАвтоматичний парсинг текстового, відео- та аудіо-контенту.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Аналіз тексту:")]),t._v("\nВизначення тональності (позитивна, негативна, нейтральна).\nВиявлення ключових слів, тем та трендів у контенті.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Формування звітів:")]),t._v("\nГенерація аналітичних звітів, які надають глибоку аналітичну інформацію для прийняття рішень")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Пошук та фільтрація:")]),t._v("\nРозширений пошук за датою, темою, джерелом та категоріями.\nФільтрація контенту за тональністю, ключовими словами, популярністю.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Автентифікація та управління акаунтами:")]),t._v("\nСистема управління користувачами з можливістю реєстрації, входу та виходу.\nУправління паролями, включаючи відновлення доступу через e-mail.\nРолі користувачів (адміністратор, аналітик, оглядач) з налаштовуваними правами доступу.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Адміністративні функції:")]),t._v("\nПанель управління для адміністраторів з можливістю моніторингу активності користувачів.\nУправління користувацькими ролями та доступом до окремих модулів системи.\nНалаштування системи сповіщень та автоматичних дій при виявленні проблем.")])])]),t._v(" "),v("h2",{attrs:{id:"практичність"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#практичність"}},[t._v("#")]),t._v(" Практичність")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Інтуїтивний інтерфейс:")]),t._v("\nПростий та зручний у використанні інтерфейс, адаптований до різних пристроїв (мобільний, десктопний).\nШвидке налаштування та запуск системи без необхідності в глибоких технічних знаннях.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Навчальні матеріали:")]),t._v("\nПокрокові інструкції та документація, що спрощує корситування користувачів.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Динамічні візуалізації:")]),t._v("\nВідображення результатів у зручному та зрозумілому користувачу форматі")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Мультикористувацький режим:")]),t._v("\nПідтримка різних рівнів доступу для користувачів з різними ролями та їх зручна реалізація.")])])]),t._v(" "),v("h2",{attrs:{id:"надіиність"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#надіиність"}},[t._v("#")]),t._v(" Надійність")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Захист даних:")]),t._v("\nВикористання шифрування для збереження конфіденційності користувацьких даних.\nРегулярне створення резервних копій для запобігання втраті даних.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Стійкість і відновлення після збоїв:")]),t._v("\nАвтоматичне відновлення системи у разі збою чи втрати зв'язку.\nМожливість швидкого повернення до останньої стабільної версії.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Цілодобова робота і стабільність:")]),t._v("\nЗабезпечення стабільної роботи системи 24/7 з мінімальними простоями для технічного обслуговування.")])])]),t._v(" "),v("h2",{attrs:{id:"продуктивність"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#продуктивність"}},[t._v("#")]),t._v(" Продуктивність")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Висока швидкість обробки:")]),t._v("\nОбробка великого обсягу медіа-даних у режимі реального часу.\nМінімальний час затримки при зборі та аналізі контенту.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Масштабованість:")]),t._v("\nМожливість адаптації системи до збільшення кількості користувачів та обсягів даних без втрати продуктивності.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Оптимізація використання ресурсів:")]),t._v("\nЕфективне використання серверних ресурсів для забезпечення високої продуктивності при мінімальних витратах на обладнання.")])])]),t._v(" "),v("h2",{attrs:{id:"експлуатаціина-придатність"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#експлуатаціина-придатність"}},[t._v("#")]),t._v(" Експлуатаційна придатність")]),t._v(" "),v("p",[t._v("Експлуатаційна придатність системи аналізу медіа контенту охоплює ключові аспекти, які забезпечують зручність та ефективність використання:")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("Зрозуміла документація:")]),t._v(" Документація системи є структурованою і легкою для сприйняття. Вона містить детальні описи всіх функцій, інструкції з використання, а також практичні рекомендації, що допомагають користувачам швидко адаптуватися до системи.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Зворотнії зв'язок:")]),t._v(" Механізм, який дозволяє користувачам швидко повідомляти про проблеми та баги. Це забезпечує оперативне вирішення питань, що підвищує рівень задоволеності користувачів.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Автоматизовані процеси оновлення:")]),t._v(" Система підтримує автоматизовані процеси оновлення та відновлення, що гарантує безперервну та стабільну роботу навіть у випадку непередбачених збоїв. Це важливо для забезпечення доступності системи в будь-який час.")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("Безпека та конфіденційність:")]),t._v(" Система забезпечує високий рівень безпеки та конфіденційності даних, що є важливим аспектом, особливо в галузях, де обробка чутливої інформації є критично важливою.")])])])])}),[],!1,null,null,null);v.default=D.exports}}]);