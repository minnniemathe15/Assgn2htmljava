// JavaScript Fundamentals

// Declare variables of different data types
let name = "Minenhle"; // String
let age = 24;         // Number
let isStudent = true; // Boolean

// Define functions for simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero");
        return;
    }
    return a / b;
}

// Print output and debug code
console.log("Name:", name);
console.log("Age:", age);
console.log("Is student:", isStudent);
console.log("Add 5 + 3:", add(5, 3));
console.log("Subtract 10 - 2:", subtract(10, 2));
console.log("Multiply 4 * 7:", multiply(4, 7));
console.log("Divide 20 / 4:", divide(20, 4));

// DOM Manipulation
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const subtractButton = document.getElementById('subtractButton');
    const multiplyButton = document.getElementById('multiplyButton');
    const divideButton = document.getElementById('divideButton');
    const resultParagraph = document.getElementById('result');

    function updateResult(result) {
        resultParagraph.textContent = 'Result: ' + result;
    }

    addButton.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        updateResult(add(num1, num2));
    });

    subtractButton.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        updateResult(subtract(num1, num2));
    });

    multiplyButton.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        updateResult(multiply(num1, num2));
    });

    divideButton.addEventListener('click', () => {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        updateResult(divide(num1, num2));
    });
});

// Interactive Charts and Graphs
document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
