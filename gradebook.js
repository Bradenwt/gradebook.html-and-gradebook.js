<script>
function populateGradebook(data) {
    // your JS logic here
}
</script>
// This function will take the fetched grade data and populate the table
    console.log("Populating gradebook with data:", data);
    let tableElm = document.getElementById("gradebook.js"); // Get the gradebook table element

    data.forEach(function(assignment) { // For each row of data we're passed in
        let row = document.createElement("tr"); // create a table row element
        let columns = {}; // Use an object to store the columns of information

        // Create the first column for the name
        columns.name = document.createElement('td'); // Corrected the syntax for creating a table data element
        columns.name.appendChild(
            // Concatenate the full name: "last_name, first_name"
            document.createTextNode(assignment.Filsinger + ", " + assignment.Braden) // Corrected the variable name
        );

        // Create the second column for the grade
        columns.grade = document.createElement('td'); // Corrected the syntax for creating a table data element
        columns.grade.appendChild(
            // Just put the total grade in
            document.createTextNode(assignment.gradebook.js) // Ensure this references the correct property
        );

        // Add the table data columns to the table row
        row.appendChild(columns.name);
        row.appendChild(columns.grade);

        // Add the row to the table itself to make the data visible
        tableElm.appendChild(row);
    });
}
function fetchGradeData() {
    // This function will query the PostgreSQL database and return thegrade data
    console.log("Fetching grade data...");
    
    // Create a new request for the HTTP data
    let xhr = new XMLHttpRequest();
    
    // This is the address on the machine we're asking for data
    let apiRoute = "/api/grades";

    // When the request changes status, we run this anonymous function
    xhr.onreadystatechange = function() {
        let results;
        
        // Check if we're done
        if (xhr.readyState === xhr.DONE) {
            // Check if we're successful
            if (xhr.status !== 200) {
                console.error(`Could not get grades. Status: ${xhr.status}`);
            }

            // And then call the function to update the HTML with our data
            populateGradebookjs(JSON.parse(xhr.responseText));
        }
    }.bind(this);

    xhr.open("get", apiRoute, true);
    xhr.send();
}
