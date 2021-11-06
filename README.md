[![Build status](https://ci.appveyor.com/api/projects/status/8ful6ynxp7im0os5?svg=true)](https://ci.appveyor.com/project/DiRover/redux-observable-11-2)

[See here GH-PAGE](https://dirover.github.io/redux_observable_11.2/)



Лента новостей
===

Вам необходимо реализовать некий аналог подгрузки новостей Вк.

При загрузке страницы грузятся первые 5 новостей (на картинке только две, чтобы уместилось):

![](./assets/load-more.png)

При нажатии на кнопку "К предыдущим записям", происходит дозагрузка ещё 5:

![](./assets/loading.png)

При возникновении ошибок пользователь не уведомляется, а происходят повторные попытки дозагрузки каждые 3 секунды.

При исчерпании новостей (сервер вернёт пустой массив, либо количество элементов в массиве будет меньше 5), снизу под карточками не отображаются ни кнопки, ни индикатор загрузки:

![](./assets/finish.png)

Для первоначальной загрузки новостей используйте следующий запрос:
GET http://localhost:7070/api/news

Для загрузки новостей начиная с определённой (X - id последней загруженной новости) используйте следующий запрос:
GET http://localhost:7070/api/news?lastSeenId=X

Серверная часть расположена в каталоге `backend`.

Убедитесь, что вы правильно парсите реальные данные и максимално точно отображаете вид карточек.

Как минимум, должны отображаться:
1. Время в формате день, месяц и часы:минуты
1. Текст
1. Количество лайков
1. Количество комментариев
1. Количество репостов
1. Количество просмотров

Если научитесь отображать ещё и картинки со ссылками - будет вообще супер!

Server API
https://unionserver.herokuapp.com/api/ra/news
https://unionserver.herokuapp.com/api/ra/news?lastSeenId=${lastSeenId}
