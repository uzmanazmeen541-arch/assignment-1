
function showAssignment(num) {
    // Hide all assignments
    document.querySelectorAll('.assignment').forEach(el => {
        el.classList.remove('active');
    });
    
    // Remove active from all buttons
    document.querySelectorAll('.nav-buttons button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show the clicked assignment
    document.getElementById(`assignment${num}`).classList.add('active');
    
    // Make the clicked button active
    document.querySelectorAll('.nav-buttons button')[num-1].classList.add('active');
}

// --- Assignment 1: Personal Greeting Page ---
let greetingElement = document.getElementById("greeting");
if (greetingElement) {
    greetingElement.textContent = "Hi I'm Uzma Nazmeen!";
}

let introElement = document.getElementById("intro");
if (introElement) {
    introElement.style.color = "purple";
    introElement.style.fontSize = "18px";
}

// --- Assignment 2: Style Your To-Do List ---
let tasks = document.getElementsByClassName("task");
for (let i = 0; i < tasks.length; i++) {
    tasks[i].style.fontStyle = "italic";
}
if (tasks[1]) {
    tasks[1].style.backgroundColor = "lightblue";
}

// --- Assignment 3: Image Gallery Caption Switch ---
let image = document.getElementById("mainImage");
if (image) {
    image.src = "img2.jpg";
}

let caption = document.getElementById("caption");
if (caption) {
    caption.textContent = "This is image 2!";
    caption.style.color = "teal";
}

// --- Assignment 4: List of Favorite Books ---
let books = ["The Alchemist", "Atomic Habits", "1984", "To Kill a Mockingbird", "Harry Potter"];
let bookList = document.getElementById("bookList");
if (bookList) {
    for (let i = 0; i < books.length; i++) {
        let listItem = document.createElement("li");
        listItem.textContent = books[i];
        bookList.appendChild(listItem);
    }
}

// --- Assignment 5: Multiplication Table Generator ---
let table = document.getElementById("multiTable");
if (table) { // This prevents the crash you had
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    headerRow.innerHTML = "<th>Number</th><th>x5 Result</th>";
    thead.appendChild(headerRow);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");
    for (let i = 1; i <= 10; i++) {
        let row = document.createElement("tr");
        
        let col1 = document.createElement("td");
        col1.textContent = i;
        
        let col2 = document.createElement("td");
        col2.textContent = i * 5;
        
        row.appendChild(col1);
        row.appendChild(col2);
        tbody.appendChild(row);
    }
    table.appendChild(tbody);
}