// Define the interface for a Student
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two students
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 22,
    location: "Accra"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 25,
    location: "Lagos"
};

// Array containing the students
const studentsList: Student[] = [student1, student2];

// Function to render a table with students' names and locations
const renderTable = () => {
    // Create table element
    const table = document.createElement('table');

    // Add a row for each student
    studentsList.forEach(student => {
        const row = table.insertRow(); // Create a new row

        const firstNameCell = row.insertCell(); // Create firstName cell
        firstNameCell.textContent = student.firstName; // Add student's first name to cell

        const locationCell = row.insertCell(); // Create location cell
        locationCell.textContent = student.location; // Add student's location to cell
    });

    // Append the table to the body of the document
    document.body.appendChild(table);
};

// Call the function to render the table
renderTable();
