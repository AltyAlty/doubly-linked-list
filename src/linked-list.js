const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
        this._nodes = [];
    };

    append(data) {
        const newNode = new Node(data, null, null);
        this._nodes.push(newNode);

        if (this.length === 0) {
            this._head = newNode;
        };

        this._tail = newNode;
        this.length++;

        return this;
    };

    head() {
        return this._head.data
    };

    tail() {
        return this._tail.data
    };

    at(index) {
        return this._nodes[index].data;
    };

    insertAt(index, data) {
        const newNode = new Node(data, null, null);
        this._nodes.splice(index, 0, newNode);
        this.length++;

        return this;
    };

    isEmpty() {
        return this.length === 0;
    };

    clear() {
        this.length = 0;
        this._head.data = null;
        this._tail.data = null;
        this._nodes = [];

        return this;
    };

    deleteAt(index) {
        this._nodes.splice(index, 1);

        if (this.length > 0) {
            this.length--;
        };

        return this;
    };

    reverse() {
        let _tempHead = this._head;
        this._head = this._tail;
        this._tail = _tempHead;
        this._nodes.reverse();

        return this;
    };

    indexOf(data) {
        // for (let i = 0; i < this._nodes.length; i++) {
        //     if (this._nodes[i].data === data) {
        //         return i;
        //     };
        // };

        // return -1;

        return this._nodes.map(function (e) { return e.data; }).indexOf(data);
    };
};

module.exports = LinkedList;