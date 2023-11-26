class ListNode {
   data:number
   next?:ListNode

   constructor (data:number) {
      this.next = undefined
      this.data = data
   }

   setNext(next:ListNode) {
      this.next = next
   }
}