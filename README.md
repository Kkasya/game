Task 6. Gem-puzzle для [RS School](https://rs.school)
![Gem-puzzle](https://raw.githubusercontent.com/kkasya/game/master/src/images/game.jpg)
[Приложение Gem-puzzle](http://htmlpreview.github.io/?https://github.com/Kkasya/game/blob/main/index.html)
### Классическая игра [пятнашки](https://ru.wikipedia.org/wiki/Игра_в_15)
---
1. **Правила игры**

Игра представляет собой набор одинаковых квадратных костяшек с нанесёнными числами, заключённых в квадратную коробку. Длина стороны коробки в четыре раза больше длины стороны костяшек для набора из 15 элементов, соответственно в коробке остаётся незаполненным одно квадратное поле. Цель игры — перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений

2. **Основные функциональные требования:**

**Базовые (обязательные):**

- дизайн на свое усмотрение, но должен быть адаптивный (декстоп, планшет, мобильный), при переходе между версиями все должно отображаться корректно, должен присутствовать весь функционал, ничего не должно пропадать, уезжать за пределы экрана. Допустимо изменить внешний вид для мобильной версии (например, спрятать кнопки в бургер-меню если они есть)
- изначально body в файле index.html должен быть пустой, все необходимые элементы генерируются с использованием JS
- размер поля по умолчанию 4х4
- состояние игрового поля генерируется случайным образом забивается числами при запуске новой игры цифры перемешиваются (следует учитывать, что не все перемешивания случайным образом будут иметь решение)
- при клике по фишке, стоящей рядом с пустой клеткой, фишка перемещается на место пустой клетки
- игру можно начать заново без перезагрузки страницы (для этого должна быть предусмотрена возможность,например по нажатию на кнопку или сочетанием клавиш клавиатуры)
- реализовать отображение продолжительности игры в минутах и секундах "##:##" и количество ходов
- реализовать возможности сохранения игры (например, с помощью localStorage), чтобы при перезагрузке страницы иметь возможность продолжить с того же места где остановился
- повышенной сложности (для получения дополнительных баллов):
    - реализовать возможность выбора размера поля: от 3х3 до 8х8
    - реализовать анимацию перемещение пятнашек на поле
    - при решении игры надо выводить сообщение «Ура! Вы решили головоломку за #:## и N ходов»
    - есть возможность включать/выключать звуковое сопровождение передвижение фишек (звук на ваш выбор)
    - лучших 10 результатов сохраняется в таблицу рекордов и их можно каким-либо образом посмотреть (например, по нажатию кнопки)

**Экстра (сложные):**
- вместо цифр на фишках отображаются части картинки и необходимо собрать картинку правильно, передвигая фишки.
- добавить возможность анимированного завершения игры - в случае, если вы не знаете как дальше решать пазл, то по нажатию на кнопку фишки автоматически сложаться в нужном порядке и это будет происходить анимированно, то есть плавно с возможностью набледения за перемещениями фишек
- подключен и используется eslint (eslint-config-airbnb-base), webpack
- приложение разбито на отдельные модули, используются фишки es6 и выше
