const LinkedList = require('./linkedList.js');

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.add(data);
    }

    pop() {
        this.list.removeLast();
    }

    print() {
        this.list.printList();
    }
}

let a = new Stack();
a.push(2);
a.push(3);
a.push(4);
a.push(5);
a.pop();
a.print();