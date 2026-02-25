// Assignment Questions:
// 1 Question 1: Create an object 'student' with name, age, city. Display name using dot notation
// and city using bracket notation.

let student = {
    name: "Ali",
    age: 20,
    city: "K.N Shah"
}

// using dot notation 
console.log(student.name);

// using bracket notation
console.log(student["city"]);


console.log("***********************************************");

// 2 Question 2: Create an array 'employees' containing three employee objects (name,
// department, salary). Display second employee name and third employee salary

let employees = [
   {
    name: "Khan",
    department: "Senior Frontend developer",
    salary: 50000
   },
   {
    name: "Meer",
    department: "Senior backend developer",
    salary: 80000
   },
   {
    name: "Ahmed",
    department: "Senior Fullstack developer",
    salary: 120000
   },
]

// Display second employee name
console.log("Second Employee Name:",employees[1].name );

// Display third employee salary
console.log("Third Employee Salary:",employees[2].salary );



console.log("******************************************");
// 3 Question 3: Create an object 'product' (title, price, category). Use for-in loop to display all keys
// and values.

let product = {
    title: "Phone",
    price: 35000,
    category: "Electronics" 
}

//  Use for-in loop to display all keys and values

for (let keys in product) {
    console.log(keys + ": " + product[keys]);
}

console.log("*****************************************************");

// 4 Question 4: Create an object 'user' with name, email and skills array (minimum four skills).
// Display first and last skill dynamically.
let user = {
    name: "Waqar",
    email: "waqar@gmail.com",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
}


// Display first skill dynamically
let firstSkill = user.skills[0];

// Display last skill dynamically
// let lastSkill = user.skills[user.skills.length - 1];
// or 
let lastSkill = user.skills[3];

console.log("First Skill: " + firstSkill);
console.log("Last Skill: " + lastSkill);

console.log("***************************************************");

// Question 5: Create an object 'car' (brand, model, year, color). Use Object.keys() to display all
// keys and count total properties
let car = {
    brand: "toyota",
    model: 'Corolla',
    year: 2022,
    color: 'blue'
}

// 2. Use Object.keys() to get an array of all keys
const keys = Object.keys(car);

// 3. Display the keys (which are the property names)
console.log('Keys of the car object:', keys);

// 4. Count the total number of properties by checking the array's length
const propertyCount = keys.length;

// 5. Display the total count
console.log('Total number of properties:', propertyCount);


console.log("*************************************************");

// 6 Question 6: Create an object 'book' (title, author, price). Use Object.values() and display all
// values using loop
let book = {
    title: "Tell",
    Author: "Jonathan Buckley",
    price: "£12.99"
}

// 2. Use Object.values() to get an array of the values
const bookValues = Object.values(book);

// 3. Display all values using a for...of loop
console.log("Values of the 'book' object:");
for (const value of bookValues) {
  console.log(value);
}

console.log("********************************************");
let order = {
    orderId: 1,
    customerName: "Khan",
    totalAmount: 1200
}

// 2. Convert the 'order' object into a JSON string using JSON.stringify()
const jsonString = JSON.stringify(order);

// 3. Output the resulting JSON string to the console
console.log(jsonString);


console.log("*********************************************");



// 8 Question 8: Create an array 'students' (name, marks). Display all students and filter those
// scoring above 80.
// Create students array
let students = [
    { name: "Alice", marks: 85 },
    { name: "Bob", marks: 72 },
    { name: "Charlie", marks: 90 },
    { name: "David", marks: 65 }
];

// Display all students
console.log("All Students:");
students.forEach(student => {
    console.log(student.name + " - " + student.marks);
});

// Filter students scoring above 80
let topStudents = students.filter(student => student.marks > 80);

console.log("Students scoring above 80:");
topStudents.forEach(student => {
    console.log(student.name + " - " + student.marks);
});


console.log("*********************************************");
// 9 Question 9: Create an object 'company' (companyName, location, employees array of objects).
// Display company name and all employee names.

// Create company object
let company = {
    companyName: "Tech Solutions",
    location: "New York",
    employees: [
        { name: "Emma", position: "Developer" },
        { name: "Liam", position: "Designer" },
        { name: "Olivia", position: "Manager" }
    ]
};

// Display company name
console.log("Company Name: " + company.companyName);

// Display all employee names
console.log("Employees:");
company.employees.forEach(employee => {
    console.log(employee.name);
});



console.log("****************************************************");
// 10 Question 10: Create an array 'products' (id, name, price, stock). Display product names, count
// total products, convert to JSON, and show out-of-stock products.
// Create products array
let products = [
    { id: 1, name: "Laptop", price: 800, stock: 10 },
    { id: 2, name: "Phone", price: 500, stock: 0 },
    { id: 3, name: "Tablet", price: 300, stock: 5 },
    { id: 4, name: "Headphones", price: 100, stock: 0 }
];

// Display product names
console.log("Product Names:");
products.forEach(product => {
    console.log(product.name);
});

// Count total products
console.log("Total Products: " + products.length);

// Convert to JSON
let productsJSON = JSON.stringify(products);
console.log("Products in JSON format:");
console.log(productsJSON);

// Show out-of-stock products
let outOfStock = products.filter(product => product.stock === 0);

console.log("Out of Stock Products:");
outOfStock.forEach(product => {
    console.log(product.name);
});

