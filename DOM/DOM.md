DOM (Document Object Model) представляет собой HTML разметку в JavaScript. Каждый тег представлен в виде JavaScript объекта и позволяет управлять (добавлять / изменять / удалять) элементы на странице из наших скриптов

Из помощью JavaScript можно:

Находить элементы на странице с помощью document.querySelector, document.querySelectorAll. Есть и другие (document.getElementById, document.getElementByTagName, document.getElementByClassName и т.д.), но они устарели и ими лучше не пользоваться
Создавать элементы с помощью document.createElement
Вставлять элементы с помощью element.append, element.prepend, element.after, element.before и т.д
Считывать и задавать содержимое элементов с помощью element.textContent, element.innerText, element.innerHTML, element.outerHTML и т.д
Управлять атрибутами HTML элементов с помощью element.setAttribute и element.getAttribute
Управлять классами HTML элементов с помощью element.classList.add, element.classList.remove, element.classList.toggle, element.classList.contains и т.д.
И многое другое ...
Поиск элементов на странице
Чтобы найти элементы на странице есть много способов. В большинстве случаев нужно использовать 2 метода: element.querySelector() и element.querySelectorAll().

element.querySelector('css selector') - это метод DOM элемента. Перед точкой должен стоять DOM элемент, внутри которого будет происходить поиск. Чаще всего мы используем document.querySelector, чтобы искать по всему документу (да, document - это тоже DOM элемент).

При необходимости мы можем искать только внутри конкретного элемента DOM дерева (не во всем документе). Для этого нам сперва нужно найти этот элемент в документе const firstElem = document.querySelector('.main-content'), а потом внутри него найти тот, что вас интересует const secondElem = firstElem.querySelector('.info')

В методы element.querySelector, element.querySelectorAll нужно передать как аргумент строку с CSS селектором (таким же, как мы используем в CSS для стилизации элементов). Метод element.querySelectorAll найдет все элементы внутри element, которые попадают под указанный селектор и вернет их в виде специального списка. Этот список является псевдомассивом! (не обычным массивом). Чтобы работать с этим списком, как с массивом, его нужно преобразоать к массиву например с помощью Array.from(elemsList)

В свою очередь element.querySelector вернет лишь один первый попавшийся элемент, который подходит под CSS селектор в аргументе

Считывание содержания элементов
Содержимое DOM элементов можно прочитать как текст, проигнорировав все теги внутри. Или можно считать всю HTML разметку со всеми тегами и атрибутами

Для считывания содержимого DOM элемента в виде текста используются 2 свойства: element.innerText и element.textContent. Они работают похожим образом и возвращают весь текст (даже вложенных элементов).

    <!-- index.html -->
    <div class="greeting">I am     learning    <b>Front-End</b> </div>

    /* index.js */
    const greetingElem = document.querySelector('.greeting');
    greetingElem.textContent; // 'I am     learning    Front-End'
    greetingElem.innerText; // 'I am learning Front-End'

Как видите из примера выше, вывелся только текст. HTML теги проигнорировались. Разница между этими двумя способами в том, что textContent сохранил пробелы, что есть в HTML, а innerText отбросил лишние пробелы. На практике используйте тот, который лучше решает текущую задачу

Cодержимое DOM элементов так же можно считывать в виде строки, но с сохранением всех тегов и атрибутов. То есть по сути HTML разметка в виде строки. Для этого используются 2 свойства: element.innerHTML и element.outerHTML

    <!-- index.html -->
    <div class="greeting">I am learning <b>Front-End</b> </div>

    /* index.js */
    const greetingElem = document.querySelector('.greeting');
    greetingElem.innerHTML; // 'I am learning <b>Front-End</b>'
    greetingElem.outerHTML; // '<div class="greeting">I am learning <b>Front-End</b> </div>'

element.innerHTML возвращает HTML разметку врутри целевого элемента, а element.outerHTML вернет еще и сам элемент.

Все перечисленные выше элементы можно использовать и для установки содержимого элементов.innerText и textContent - для установки текстового содержимого элементов. innerHTML и outerHTML же создадут настоящие HTML элементы

innerHTML еще, например, используется для очистки содержимого элементов. Для этого просто установите содержимое для элемента как пустую строку element.innerHTML = '';

Создание DOM элементов
Из JavaScript можно создать DOM элемент и назначить ему все необходимые атрибуты. Для создания DOM элемента есть специальный метод document.createElement. Этот метод принимает один аргумент - строку (название тэга), которая говорит, какой именно элемент нужно создать. Например const buttonElem = document.createElement('button'); создаст DOM элемент - кнопка

Все эти методы, что описаны ниже, могут быть вызваны на созданном DOM элементе, так и на DOM элементе, найденном на странице с помощью document.querySelector

Из JavaScript можно задать элементу все необходимые атрибуты c помощью element.setAttribute('attribute-name', 'attribute-value')

    const imageElem = document.createElement('img');
    img.setAttribute('src', 'https://example.com/image.png');
    img.setAttribute('alt', 'Beautifull lake');

Так же можно считывать атрибуты с DOM элемента с помощью element.setAttribute('attribute-name'):
Для работы с атрибутом class есть специальные удобные методы

element.classList - вернет список всех классов у элемента в виде специального объекта - псевдо массива
element.classList.add('class-name') - добавит элементу класс с именем class-name
element.classList.remove('class-name') - удалит у элемента класс с именем class-name
element.classList.toggle('class-name') - удалит у элемента класс с именем class-name, если такой уже есть. Или добавит, если у элемента такого класса нету
element.classList.contains('class-name') - вернет true если у элемента есть класс class-name или false, если у элемента такого класса нету
Иногда есть необходимость в HTML хранить некоторые данные, которые потом нужны в скриптах. Для этого существуют специальные атрибуты - data-attributes. Дата атрибуты имеют вид data-user-id="123456" - идет префикс data-, а за ним название пользовательского атрибута. Такое название связано с тем, чтобы наши пользовательские атрибуты не конфликтовали со стандартными HTML атрибутами. Для работы с такими атрибутами у DOM элементов есть специальное свойство element.dataset, которое позволяет работать с data-атрибутами как с объектом. Устанавливая и изменяя свойства в element.dataset мы автоматически изменяем data-атрибуты у HTML элемента

    <!-- index.html -->
    <div data-user-id="12345" data-last-name="Johnson" class="user">Andrew</div>

    /* index.js */
    const userElem = document.querySelector('.user');
    console.log(userElem.dataset); // { userId: '12345', lastName: 'Johnson' }
    userElem.dataset.age = 21;
    userElem.dataset.lastName = 'White';

    <!-- index.html -->
    <div data-user-id="12345" data-last-name="White" data-age="17" class="user">Andrew</div>

Здесь интересный момент, заключается в именовании. Если название атрибута в HTML - маленькие буквы через дефиз, то свойства в element.dataset написаны в camelCase - убираем префикс data- и вместо дефисов каждое слово кроме первого начинаем с большой буквы

Вставка DOM элементов на страницу
Когда вы создали DOM элемент в JavaScript, то его можно вставить на страницу несколькими способами:

parentElement.append(element) - вставит DOM элемент element внутрь DOM элемента parentElement. Если в parentElement есть другие дочерние элементы, то append вставит новый элемент в конец (последним)
<!-- index.html before -->
<ul class="list">
<li>Old product</li>
</ul>

        /* index.js */
        const newProductElem = document.createElement('li');
        newProductElem.textContent = 'New Product';
        const listElem = document.querySelector('.list');
        listElem.append(newProductElem);

        <!-- index.html after -->
        <ul class="list">
          <li>Old product</li>
          <li>New product</li>
        </ul>


parentElement.prepend(element) - вставит DOM элемент element внутрь DOM элемента parentElement. Если в parentElement есть другие дочерние элементы, то prepend вставит новый элемент в начало (первым в списке дочерних элементов)
<!-- index.html before -->
<ul class="list">
<li>Old product</li>
</ul>

        /* index.js */
        const newProductElem = document.createElement('li');
        newProductElem.textContent = 'New Product';
        const listElem = document.querySelector('.list');
        listElem.prepend(newProductElem);


        <!-- index.html after -->
        <ul class="list">
          <li>New product</li>
          <li>Old product</li>
        </ul>


someElement.before(element) - вставит DOM элемент element перед DOM элементом someElement. То есть someElement и element будут сестринскими (sibling) элементами в разметке.
<!-- index.html before -->
<ul class="list">
<li class="list-item">Old product</li>
</ul>

        /* index.js */
        const newProductElem = document.createElement('li');
        newProductElem.textContent = 'New Product';
        const listItemElem = document.querySelector('.list-item');
        listItemElem.before(newProductElem);

        <!-- index.html after -->
        <ul class="list">
          <li>New product</li>
          <li class="list-item">Old product</li>
        </ul>


someElement.after(element) - вставит DOM элемент element после DOM элемента someElement. То есть someElement и element будут сестринскими (sibling) элементами в разметке.
<!-- index.html before -->
<ul class="list">
<li class="list-item">Old product</li>
</ul>

        /* index.js */
        const newProductElem = document.createElement('li');
        newProductElem.textContent = 'New Product';
        const listItemElem = document.querySelector('.list-item');
        listItemElem.after(newProductElem);

        <!-- index.html after -->
        <ul class="list">
          <li class="list-item">Old product</li>
          <li>New product</li>
        </ul>


Поиск ближайшего родителя
Часто бывает необходимо найти родилеля для некоторого элемениа. На родителе может хранится некая полезная информация, или с родителем нужно что-то сделать в зависимости от того, что происходит с дочерними элементами. Для это есть метод element.closest(/_ CSS selector _/). Метод ищет ближайщий родительский элемент по DOM к element, который подходит под указанный CSS селлектор

    <!-- index.html before -->
    <div class="one">
      <p class="two">
        <span class="three"></span>
      </p>
    </div>

    /* index.js */
    const spanElem = document.querySelector('.three');
    spanElem.closest('.three'); // вернет его же (span)
    spanElem.closest('.two'); // вернет параграф
    spanElem.closest('.one'); // вернет div
