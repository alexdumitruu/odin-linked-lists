function Node(value, nextNode = null) {
  return {
    value,
    nextNode,
  };
}

function LinkedList() {
  let head = null;

  function append(value) {
    const newNode = Node(value);
    if (!head) {
      head = newNode;
      return;
    }
    let current = head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = newNode;
  }

  function prepend(value) {
    const newNode = Node(value, head);
    head = newNode;
  }

  function size() {
    let size = 0;
    let current = head;
    while (current.nextNode !== null) {
      current = current.nextNode;
      size++;
    }
    size++;
    return size;
  }
  function getHead() {
    return head;
  }
  function getTail() {
    let current = head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }
  function at(index) {
    let current = head;
    for (let i = 0; i < index; i++) {
      current = current.nextNode;
    }
    return current;
  }
  function pop() {
    let current = head;
    let prev = current;
    while (current.nextNode !== null) {
      prev = current;
      current = current.nextNode;
    }
    prev.nextNode = null;
    current.value = null;
  }
  function contains(value) {
    let bool = false;
    let current = head;
    while (current.nextNode !== null) {
      if (current.value === value) {
        bool = true;
        break;
      }
      current = current.nextNode;
    }
    return bool;
  }

  function find(value) {
    let i = 0;
    let current = head;
    while (current.nextNode !== null) {
      if (current.value === value) {
        break;
      }
      current = current.nextNode;
      i++;
    }
    if (i === 0) return null;
    return i;
  }

  function toString() {
    let string = ``
    size = size();
    let currentValue = 0;
    for (let i = 0; i < size; i++) {
        currentValue = at(i).value; 
        string = string + `( ${currentValue} ) -> `;
    }
    string = string + ` null`;
    return string;
  }

  function insertAt(value, index) {
    let current = LinkedList.at(index);
    let prev = LinkedList.at(index - 1);
    const newNode = Node(value);
    prev.nextNode = newNode;
    newNode.nextNode = current;
  }

  function removeAt(index) {
    let current = LinkedList.at(index);
    let prev = LinkedList.at(index - 1);
    prev.nextNode = current.nextNode;
    current.value = null;
    current.nextNode = null;
  }

  return {
    append,
    prepend,
    size,
    at,
    contains,
    find,
    getHead,
    getTail,
    insertAt,
    pop,
    removeAt,
    toString
  }
}

export {LinkedList};
