import {
  LinkedList,
  DoublyLinkedList,
  CircularLinkedList,
  HashTable,
  Stack,
  Queue,
} from './data-structures/index.js';
import { mergeSort, heapSort, quickSort } from './algorithms/index.js';

// ======================
// Примеры структур данных
// ======================

// 1. Односвязный список (LinkedList)
const linkedList = new LinkedList();
linkedList.add(10);
linkedList.add(20);
linkedList.add(30);
linkedList.update(1, 25);
console.log('Односвязный список:', linkedList);

// 2. Двусвязный список (DoublyLinkedList)
const doublyLinkedList = new DoublyLinkedList();
doublyLinkedList.add(5);
doublyLinkedList.add(15);
doublyLinkedList.add(25);
doublyLinkedList.remove(1);
console.log('Двусвязный список:', doublyLinkedList);

// 3. Кольцевой связный список (CircularLinkedList)
const circularLinkedList = new CircularLinkedList();
circularLinkedList.add(100);
circularLinkedList.add(200);
circularLinkedList.add(300);
circularLinkedList.update(1, 250);
console.log('Кольцевой связный список:', circularLinkedList);

// 4. Хеш-таблица (HashTable)
const hashTable = new HashTable();
hashTable.add('key1', 'value1');
hashTable.add('key2', 'value2');
console.log('Хеш-таблица:', hashTable.get('key1')); // value1
hashTable.remove('key1');
console.log('Хеш-таблица после удаления:', hashTable.get('key1')); // undefined

// 5. Стек (Stack - LIFO)
const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log('Стек:', stack);
stack.pop();
console.log('Стек после pop:', stack);

// 6. Очередь (Queue - FIFO)
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log('Очередь:', queue);
queue.dequeue();
console.log('Очередь после dequeue:', queue);

// ======================
// Примеры алгоритмов сортировки
// ======================

const array = [4, 2, 5, 1, 3];

// 1. Устойчивая сортировка (Merge Sort)
console.log('Сортировка слиянием:', mergeSort(array)); // [1, 2, 3, 4, 5]

// 2. Неустойчивая сортировка (Heap Sort)
console.log('Пирамидальная сортировка:', heapSort(array)); // [1, 2, 3, 4, 5]

// 3. Быстрая сортировка (Quick Sort)
console.log('Быстрая сортировка:', quickSort(array)); // [1, 2, 3, 4, 5]
