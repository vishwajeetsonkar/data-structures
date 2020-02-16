
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
        if(this.size > 0) {
            let counter = 0;
            let curr = this.head;
            let pre;
            while(curr.next) {
                if(counter === (index - 1)) {
                    pre = curr;
                    curr = curr.next;
                    counter++;
                    return {
                        curr, pre
                    };
                }
            }
        } else {
            return false;
        }
    }
    
    getItemAt(index) {
        let counter = 0;
        let curr = this.head;
        let item;
        if(this.size > 0) {
            while(counter === index) {
                item = curr.data;
                curr = curr.next;
                counter++;
            }
            return item;
        }
    }

    insertAt(index, value) {
        console.log(index, value);
        let nodeAt = this.getAt(index);
        if (nodeAt) {
            let newNode = new Node(value);
            nodeAt.pre.next = newNode;
            newNode.next = nodeAt.curr;
        } else {
            this.add(value);
        }
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


// let a =  new LinkedList();
// a.add(2);
// a.add(3);
// a.add(4);
// a.add(5);
// a.printList();
// a.insertAt(3, 9);
// a.removeAt(3);
// a.printList();

module.exports = LinkedList;
