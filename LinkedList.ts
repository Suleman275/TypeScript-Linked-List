import { ListNode } from "./ListNode";

class MyLinkedList {
   head: ListNode | null;

   constructor() {
       this.head = null;
   }

   // Method to insert a new node at the end of the linked list
   append(data: number): void {
       const newNode = new ListNode(data);

       if (this.head == null) {
           this.head = newNode;
           return;
       }

       let last = this.head;

       while (last.next !== null) {
           last = last.next;
       }

       last.next = newNode;
   }

   prepend(data: number): void {
      const newNode = new ListNode(data);

      
   }

   
}