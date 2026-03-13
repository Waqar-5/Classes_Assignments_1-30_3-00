# DOM (Document Object Model) Assignment

## Part 1 – Conceptual Questions

### Q1. What is DOM?
**Answer:**  
DOM (Document Object Model) is a **map of your webpage**. It shows all HTML elements (headings, paragraphs, buttons) as **objects in a tree**.  
- JavaScript uses DOM to **find elements** and **change them dynamically**.  

**Example:**
```javascript
document.getElementById("myPara").innerText = "Hello World";

Real-life idea:
DOM is like a family tree of elements and JS is the hand that can move or change them.

Q2. What is DOM Tree Structure?

Answer:
DOM organizes HTML elements in a tree structure: parent → child → sibling.

Example Tree:

HTML
├── Head
│   └── Title
└── Body
    ├── H1
    └── P

Parent: Element that contains other elements (Body is parent of H1 and P)

Child: Element inside another element (H1 is child of Body)

Sibling: Elements with the same parent (H1 and P are siblings)

Real-life idea: Like a family tree.

Q4. Difference between querySelector() and querySelectorAll()
Method	What it does	Returns	Example
querySelector()	Finds first element	Single element	document.querySelector(".text")
querySelectorAll()	Finds all matching elements	NodeList	document.querySelectorAll(".text")

Real-life idea:

querySelector() → call one student

querySelectorAll() → call all students in class

Q5. Difference between DOM Selection Methods
Method	Meaning	Returns	Example	Real-life Idea
getElementById()	Select element by ID	Single element	document.getElementById("title")	Like unique ID card
getElementsByClassName()	Select elements by class	HTMLCollection	document.getElementsByClassName("text")	All students in same section
getElementsByTagName()	Select elements by tag name	HTMLCollection	document.getElementsByTagName("p")	All books of same type
Q6. Difference between Properties/Methods
Property / Method	Purpose	Example	Real-life Idea
innerHTML	Text + HTML	p.innerHTML = "<b>Hello</b>"	Decorating a room
innerText	Visible text only	p.innerText = "Hello"	Writing plain text on whiteboard
textContent	All text	p.textContent = "Hello"	Reading everything in a notebook
append()	Add element or text at end	ul.append(li)	Add student at end of list
appendChild()	Add new child element	ul.appendChild(li)	Place book at end of shelf