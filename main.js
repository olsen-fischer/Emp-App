// JavaScript code in main.js

// Initialize the total salary variable
let totalSalary = 0;

// Function to add user data to the table and calculate total salary
function addData() {
    // Get input values
    const firstName = document.querySelector('input[name="firstname"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const salary = parseFloat(document.querySelector('input[name="salary"]').value); // Parse salary as a float
    const zip = document.querySelector('input[name="zip"]').value;
    const city = document.querySelector('input[name="city"]').value;
    const country = document.querySelector('input[name="country"]').value;
    const box = document.querySelector('input[name="box"]').value;

    // Check if the salary is a valid number
    if (!isNaN(salary)) {
        // Add the salary to the total
        totalSalary += salary;

        // Update the total salary input field
        document.getElementById('totalSalary').value = totalSalary.toFixed(2); // Display total with 2 decimal places

        // Create a new row for the table
        const newRow = document.createElement('tr');

        // Populate the new row with user input
        newRow.innerHTML = `
            <td>${firstName}</td>
            <td>${lastName}</td>
            <td>${age}</td>
            <td>${salary.toFixed(2)}</td> <!-- Display salary with 2 decimal places -->
            <td>${zip}</td>
            <td>${city}</td>
            <td>${country}</td>
            <td>${box}</td>
        `;

        // Add the new row to the table
        const tableBody = document.querySelector('tbody');
        tableBody.appendChild(newRow);

        // Clear input fields
        document.querySelector('input[name="firstname"]').value = '';
        document.querySelector('input[name="lastName"]').value = '';
        document.querySelector('input[name="age"]').value = '';
        document.querySelector('input[name="salary"]').value = '';
        document.querySelector('input[name="zip"]').value = '';
        document.querySelector('input[name="city"]').value = '';
        document.querySelector('input[name="country"]').value = '';
        document.querySelector('input[name="box"]').value = '';
    } else {
        alert('Please enter a valid salary.');
    }
}

