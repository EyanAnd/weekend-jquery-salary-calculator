$(document).ready(readyNow)

function readyNow() {
    

    $('#submit-button').on('click', submitInput) // listen for click then run submit button
    $('#table').on('click', deleteRow);
}

let totalSalary = 0;
const maxCosts = 20000

function submitInput() {
    let firstNameIn = $('#firstName'); // create new variables that are set to the input targets
    let lastNameIn = $('#lastName');
    let employeeIdIn = $('#employeeId');
    let jobTitleIn = $('#jobTitle');
    let salaryIn = $('#salary');
    totalSalary += Number(salaryIn.val()) / 12
    $('.monthlyCosts').text(totalSalary); // setting our class with the number to whatever the total is for the employee costs

    if (totalSalary >= maxCosts) { // if the salary is greater than the max we can spend, turn it to red.
        $('.monthlyCosts').css('color', 'red');
    }

    $('#table').append(` 
    <tr>
        <td>${firstNameIn.val()}</td> 
        <td>${lastNameIn.val()}</td>
        <td>${employeeIdIn.val()}</td>
        <td>${jobTitleIn.val()}</td>
        <td>${salaryIn.val()}</td>
        <td><button class="delete-button">Delete Row</button></td>
    </tr> `) // target the table and add rows with the data that is types in to the input value.


    // firstNameIn.val(''); // resetting all of the inputs to empty after the submit button is pressed
    // lastNameIn.val('');
    // employeeIdIn.val('');
    // jobTitleIn.val('');
    // salaryIn.val('');

}

function deleteRow (event) { // use event.target to find the button and walk up the dom so that I can remove the row that the buttonw was in.
    const deleteButton = $(event.target);

    deleteButton.closest('tr').remove();
}