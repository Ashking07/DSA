// Title: LRU_Cache
// LeetCode ID: 146_
// Difficulty: Medium
// Tags: Hash Table
// Linked List
// Design
// Doubly-Linked List
// Date: 2025-07-26
// Link:https://leetcode.com/problems/lru-cache/description/?envType=problem-list-v2&envId=hash-table

function Node(key, value) {
  this.key = key;
  this.value = value;
  this.prev = null;
  this.next = null;
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map(); // key -> node
  this.size = 0;

  this.head = new Node(null, null); // dummy head
  this.tail = new Node(null, null); // dummy tail
  this.head.next = this.tail;
  this.tail.prev = this.head;

  this._addToFront = (node) => {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  };

  this._removeNode = (node) => {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  };

  this._moveToFront = (node) => {
    this._removeNode(node);
    this._addToFront(node);
  };

  this._evictLRU = () => {
    const lru = this.tail.prev;
    this._removeNode(lru);
    this.map.delete(lru.key);
    this.size--;
  };
};

LRUCache.prototype.get = function (key) {
  const node = this.map.get(key);

  if (!node) return -1;
  this._moveToFront(node);

  return node.value;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.value = value;
    this._moveToFront(node);
  } else {
    const newNode = new Node(key, value);
    this.map.set(key, newNode);
    this._addToFront(newNode);
    this.size++;
    if (this.size > this.capacity) {
      this._evictLRU();
    }
  }
};
