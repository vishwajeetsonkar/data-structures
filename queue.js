const LinkedList = require('./linkedList.js');

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    enqueue(data) {
        this.queue.insertAt(0, data);
    }

    dequeue() {
        this.queue.removeLast();
    }

    peek(index = 0) {
        let item = this.queue.getItemAt(index);
        console.log(item);
        // console.log(`item on top is ${item.curr.data}`)
    }

    print() {
        this.queue.printList();
    }
}

let test = new Queue();
test.enqueue(2);
test.enqueue(3);
test.enqueue(4);
// test.enqueue(5);
// test.enqueue(6);
// test.dequeue();
test.print();
// test.peek();