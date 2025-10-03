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
  function head() {
    return head;
  }
  function tail() {
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
    for (let i = 0; i < LinkedList.size(); i++) {
        string = string + `( ${LinkedList.at(i).value} ) -> `;
    }
    string = string + ` null`;
    return string;
  }
}
