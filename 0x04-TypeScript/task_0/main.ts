// Define the Student interface
interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// Create two student objects
const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 20,
    location: "New York"
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles"
};

// Add the students to an array
const studentsList: Student[] = [student1, student2];

// Use Vanilla JavaScript to create and populate a table
function renderTable(students: Student[]): void {
    // Create the table and its header
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headers = ["First Name", "Location"];
    
    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    
    table.appendChild(headerRow);

    // Create rows for each student
    students.forEach(student => {
        const row = document.createElement("tr");
        
        const firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName;
        row.appendChild(firstNameCell);

        const locationCell = document.createElement("td");
        locationCell.textContent = student.location;
        row.appendChild(locationCell);

        table.appendChild(row);
    });

    // Append the table to the document body
    document.body.appendChild(table);
}

// Call the function to render the table
renderTable(studentsList);
