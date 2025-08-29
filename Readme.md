### 1.**What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

- **getElementById** ➡️ Selects only one element by its id then returns a single element.
- **getElementsByClassName** ➡️ Selects all elements by specific class then returns all elements matching with provided class.
- **querySelector** ➡️ Selects all first elements that matches with a given selector.

### 2.**How do you create and insert a new element into the DOM?**

- Creating a new element: <br>
    `const newDiv = document.createElement('div')`
- Adding into new element: <br>
    `newDiv.innerText = 'This is newDiv speaking.'`
- Inserting new element into body: <br>
    `document.body.appendChild(newDiv)'`

### 3.**What is Event Bubbling and how does it work?**

- Event Bubbling : It means when an event occurs on an element, it first runs on that element, and then it bubbles up to its parent, grandparent, and so on until the root

### 4.**What is Event Delegation in JavaScript? Why is it useful?**
- Event Delegation: It is a technique where instead of adding event listeners to multiple child elements, we can add one listener to a common parent and use `event.target` to handle child events.

### 5. **What is the difference between preventDefault() and stopPropagation() methods?**
- **preventDefault()** ➡️ Prevents the default browser action.
- **stopPropagation()** ➡️ Stops the event from bubbling up to the DOM tree.