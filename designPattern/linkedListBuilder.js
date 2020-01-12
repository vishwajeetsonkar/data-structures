const linkedList = require('./linkedList');

class LinkedListBuilder {
    constructor() {
        this.list = new linkedList();
    }

    addNode(data) {
        this.list.add(data);
        return this;
    }
    print() {
        this.list.printList();
        return this;
    }
    build() {
        return this;
    }
}

module.exports = LinkedListBuilder;