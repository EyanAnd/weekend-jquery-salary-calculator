$(document).ready(readyNow)

function readyNow() {


    $('#submit-button').on('click', submitInput) // listen for click then run submit button
    $('#table').on('click', '.delete-button', deleteRow);
}

let monthlyTotal = 0; // create a variable to set the total salary to on the DOM and reference
const maxCosts = 20000 // create a variable for the max cost for the calculator


function submitInput() {
    let firstNameIn = $('#firstName'); // create new variables that are set to the input targets
    let lastNameIn = $('#lastName');
    let employeeIdIn = $('#employeeId');
    let jobTitleIn = $('#jobTitle');
    let salaryIn = $('#salary');


    if (firstNameIn.val() === '' || lastNameIn.val() === '' || employeeIdIn.val() === '' || jobTitleIn.val() === '' || salaryIn.val() === '') {
        alert('Fill out all the fields ya fool!'); // alert the user if any fields are left empty. if not append the row to the table.
    } else { // if all of the values are met we append the table row with the data being set to the value of the value of the variables we set the id's to
        $('#table').append(`
        <tr>
        <td>${firstNameIn.val()}</td> 
        <td>${lastNameIn.val()}</td>
        <td>${employeeIdIn.val()}</td>
        <td>${jobTitleIn.val()}</td>
        <td class="salaryIn">${salaryIn.val()}</td> 
        <td><button class="delete-button">Delete Row</button></td>
        </tr>`) // target the table and add rows with the data that is types in to the input value.
        // we also added a class for the salaryIn variable which will help us target the particular salary to subtract when a row is deleted.

        monthlyTotal += Math.round(Number(salaryIn.val() / 12)) // setting monthly costs to the total of the rows
        firstNameIn.val(''); // resetting all of the inputs to empty after the submit button is pressed
        lastNameIn.val('');
        employeeIdIn.val('');
        jobTitleIn.val('');
        salaryIn.val('');


    }
    showMonthlyCosts(); //  set the value of the monthly total to the monthly costs class

}
function showMonthlyCosts() { // fucntion to set the value of the Total monthly cost to the updated total after a row of data is added or delted

    $('.monthlyCosts').text(`${monthlyTotal}`); // setting our class with the number to whatever the total is for the employee costs

    if (monthlyTotal >= maxCosts) { // if the salary is greater than the max we can spend, turn it to red.
        $('.monthlyCosts').css('color', 'red');
    } else {
        $('.monthlyCosts').css('color', 'azure');
    }

}
function deleteRow(event) { // use event.target to find the button and walk up the dom so that I can remove the row that the buttonw was in.
    const deleteButton = $(event.target); // target the event that just fired
    monthlyTotal -= Math.round(Number(deleteButton.closest('tr').find('td.salaryIn').text() / 12)); // updating the monthly total
    // we did this by walking up the dom and putting a class on the table data for salary so we could target it with .find() and grab the text.
   

    showMonthlyCosts(); // calling the employee cost functio which resets the monthly cost on the bottom of the page to the new total after
    // the row is deleted

    deleteButton.closest('tr').remove(); // targeting the delete button and removing that specific row

}