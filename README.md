# Data Structures and Algorithms

## Описание

Этот репозиторий содержит реализации основных структур данных и алгоритмов сортировки на JavaScript. Реализованные структуры данных включают связные списки (односвязные, двусвязные и кольцевые), хеш-таблицу, стек (LIFO) и очередь (FIFO). Алгоритмы сортировки обеспечивают сложность \( O(n \log n) \) в среднем и включают устойчивые и неустойчивые методы.

---

## Структуры данных

Для каждой структуры данных реализованы следующие методы:

- **Добавление** элемента.
- **Получение** элемента по индексу.
- **Обновление** данных элемента по индексу.
- **Удаление** элемента по индексу.

### 1. Односвязный список (Linked List)

Структура, в которой каждый элемент (узел) ссылается на следующий. Поддерживаемые операции:

Пример:

```js
const list = new LinkedList();
list.add(10);
list.add(20);
list.update(1, 30);
list.remove(0);
console.log(list); //LinkedList { head: Node { data: 30, next: null } }
```

### 2. Двусвязный список (Doubly Linked List)

Каждый узел содержит ссылки на следующий и предыдущий узлы.

Пример:

```js
const dlist = new DoubleLinkedList();
dlist.add(5);
dlist.add(15);
dlist.add(20);
dlist.update(1, 10);
dlist.remove(0);
console.log(dlist);
/*
 DoubleLinkedList {
  head: <ref *1> Node {
    data: 10,
    next: Node { data: 20, next: null, prev: [Circular *1] },
    prev: null
  },
  tail: <ref *2> Node {
    data: 20,
    next: null,
    prev: <ref *1> Node {
      data: 10,
      next: [Circular *2],
      prev: null
    }
  }
} 
*/
```

### 3. Кольцевой связный список (Circular Linked List)

Последний узел списка ссылается на первый, образуя кольцо.

Пример:

```js
const clist = new CircularLinkedList();
clist.add(100);
clist.add(200);
clist.update(1, 300);
clist.remove(0);
console.log(clist);
/*
CircularLinkedList {
  head: <ref *1> Node { data: 300, next: [Circular *1] }
}
*/
```

### 4. Хеш-таблица (Hash Table)

Ассоциативный массив, который использует хеш-функцию для сопоставления ключей с индексами.

Пример:

```js
const hashTable = new HashTable();
hashTable.add('key', 'value'); //value
console.log(hashTable.get('key'));
hashTable.remove('key');
console.log(hashTable.get('key')); //null
```

### 5. Стек (Stack - LIFO)

Структура данных с принципом "последним пришел — первым ушел".

Пример:

```js
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.pop();
console.log(stack); // Stack { items: [ 1 ] }
```

### 6. Очередь (Queue - FIFO)

Структура данных с принципом "первым пришел — первым ушел".

Пример:

```js
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.dequeue();
console.log(queue); // Queue { items: [ 20 ] }
```

## Алгоритмы сортировки

### 1. Устойчивая сортировка: Merge Sort

Сортировка слиянием гарантирует сохранение порядка равных элементов.

Пример:

```js
const sortedArray = mergeSort([3, 1, 4, 1, 5]);
console.log(sortedArray); // [1, 1, 3, 4, 5]
```

### 2. Неустойчивая сортировка: Heap Sort

Пирамидальная сортировка не гарантирует сохранение порядка равных элементов.

Пример:

```js
const sortedArray = heapSort([7, 2, 9, 3, 6]);
console.log(sortedArray); // [2, 3, 6, 7, 9]
```

### 3. Алгоритм быстрый сортировки: Quick sort

Быстрая сортировка, эффективная, но неустойчивая.

Пример:

```js
const sortedArray = quickSort([8, 4, 5, 2, 9]);
console.log(sortedArray); // [2, 4, 5, 8, 9]
```

## Запуск(проверка)

### 1. Склонируйте репозиторий

```bash

git clone "https://github.com/DenisZukert/Data-Structures-and-Algorithms"
cd Data-Structures-and-Algorithms
```

### 2. Выполните команду

```bash
npm run start
```

или

```bash
node ./index.js
```
