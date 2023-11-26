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

	// Method to insert a new node at the start of the linked list
	prepend(data: number): void {
		const newNode = new ListNode(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	// Method to print the linked list
	printList(): void {
		let current = this.head;
		while (current !== null) {
			console.log(current.data + " -> ");
			current = current.next;
		}
		console.log("end");
	}

	// Method to delete a node with a given key from the linked list
	delete(key: number): void {
		let current = this.head;

		if (current != null && current.data == key) {
			this.head = current.next;
			return;
		}

		let prev: ListNode | null = null;

		while (current != null && current.data != key) {
			prev = current;
			current = current.next;
		}

		if (current == null) {
			return;
		}

		if (prev != null) {
			prev.next = current.next;
		}
	}
}
