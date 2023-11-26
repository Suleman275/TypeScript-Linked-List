import { LinkedList } from "./LinkedList"

let myLinkedList: LinkedList = new LinkedList();

myLinkedList.append(3)
myLinkedList.append(6)
myLinkedList.append(5)
myLinkedList.append(8)

myLinkedList.printList() // [3 -> 6 -> 8 -> end]

myLinkedList.prepend(4)
myLinkedList.prepend(9)

myLinkedList.printList() // [9 -> 4 -> 3 -> 6 -> 8 -> end]

myLinkedList. delete(3)

myLinkedList.printList() // [9 -> 4 -> 6 -> 8 -> end]