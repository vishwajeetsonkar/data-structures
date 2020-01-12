
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(data) {
        if (this.head === null) {
            this.head = new Node(data);
        } else {
            let curr = this.head;
            while(curr.next) {
                curr = curr.next;
            }
            curr.next = new Node(data);
        }
        this.size++;
    }

    removeLast() {
        if (this.size > 1) {
            let curr = this.head;
            let pre;
            while(curr.next) {
                 pre = curr;
                 curr = curr.next;
                }
            pre.next = undefined;
            this.size--;
        }
    }

    getAt(index) {
        let counter = 0;
        let curr = this.head;
        let pre;
        while(curr.next) {
            if(counter === (index - 1)) {
                return {
                    curr, pre
                };
            }
            pre = curr;
            curr = curr.next;
            counter++;
        }
    }
    
    insertAt(index, value) {
        let nodeAt = this.getAt(index);
        let newNode = new Node(value);
        nodeAt.pre.next = newNode;
        newNode.next = nodeAt.curr;
    }

    removeAt(index) {
        let nodeAt = this.getAt(index);
        nodeAt.curr = nodeAt.curr.next;
        nodeAt.pre.next = nodeAt.curr;
    }

    printList() { 
    let curr = this.head; 
    let str = ""; 
        while (curr) { 
            str += curr.data + " ";
            curr = curr.next; 
        } 
    console.log(str); 
    } 


}

module.exports = LinkedList;

