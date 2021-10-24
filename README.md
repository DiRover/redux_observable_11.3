[![Build status](https://ci.appveyor.com/api/projects/status/8ful6ynxp7im0os5?svg=true)](https://ci.appveyor.com/project/DiRover/redux-observable-11-2)

[See here GH-PAGE](https://dirover.github.io/redux_observable_11.2/)



Список и детали
===

Напишите проект, использующий React Router и Redux Observable, который удовлетворяет следующим условиям:

1. На главной странице показывается список услуг (редактирование не нужно, достаточно просто ссылок) - данные загружаются методом GET на http://localhost:7070/api/services
1. При переходе по ссылке (/:id/details), загружаются детали услуги - GET на http://locahost:7070/api/services/:id

При загрузке должен отображаться индикатор загрузки (что на странице списка, что на странице деталей):

![](./assets/spinner.png)

При ошибке - показываться сообщение об ошибке и кнопка "Повторить запрос", при нажатии на которой осуществляется попытка снова выполнить запрос (с индикатором загрузки и т.д.):

![](./assets/retry.png)

Готовый бэкенд расположен в каталоге `backend`.
