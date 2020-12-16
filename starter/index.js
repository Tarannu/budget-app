console.log("The delete button always work keep on pushin until you delete but it works !!! ")
//fetching from HTML
var incomeTable = document.getElementById('income__table');//income table
var descriptionInput = document.getElementById('description');
var numberInput = document.getElementById('value');
var addButton = document.getElementById('add__btn');
var selectInput = document.getElementById('add__type');
var expenseTable = document.getElementById('expense__table');//expense table
var totalBudget = document.getElementById('budget__value');
var budgetIncomeDiv = document.getElementById('budget__income--value');
var budgetExpenseDiv = document.getElementById('budget__expenses--value');
var expensePercentageDiv = document.getElementById('budget__expenses--percentage');
var monthDiv = document.getElementById('budget__title--month');

//Setting the budget values for the top part
var budget = 0;
var budgetIncome = 0;
var budgetExpense = 0;

//creating functions
function addMonth() {
    var month = [];
    month[0] = 'January';
    month[1] = 'February';
    month[2] = 'March';
    month[3] = 'April';
    month[4] = 'May';
    month[5] = 'June';
    month[6] = 'July';
    month[7] = 'August';
    month[8] = 'September';
    month[9] = 'October';
    month[10] = 'November';
    month[11] = 'December';

    var date = new Date();
    var monthValue = month[date.getMonth()];
    monthDiv.innerHTML = monthValue + " " + date.getFullYear();
}

function creatingTable() {
    console.log("Creating Table Function Started");

    if (selectInput.value === 'inc') var sign = "+";
    else if (selectInput.value === 'exp') var sign = "-";

    var htmlContent = `<tr id="item"><td id="item__description">${descriptionInput.value}</td><td class="budget-value">${sign} ${numberInput.value}</td><td><button id="delete-button" class="delete-button">Delete</button></td></tr>`;


    if (selectInput.value === 'inc') {

        console.log("if inc is entered");
        incomeTable.insertAdjacentHTML('beforeend', htmlContent);
        budget += parseInt(numberInput.value);
        budgetIncome += parseInt(numberInput.value);

    }
    else if (selectInput.value === 'exp') {

        console.log("if exp is entered")
        expenseTable.insertAdjacentHTML('beforeend', htmlContent);
        budgetExpense += parseInt(numberInput.value);
        budget = budget - budgetExpense; 
    }
    else {
        window.alert("Please select the sign + or - ");

    }


    //Adding budget calculation at top of the page
    function addToBudget() {
        totalBudget.innerHTML = budget;
        budgetIncomeDiv.innerHTML = "+ " + budgetIncome;
        budgetExpenseDiv.innerHTML = "- " + budgetExpense;
    }

    addToBudget();
    //adding percentage to top
    function addPercentage() {
        var percentageOfExpense = parseFloat((budgetExpense / budgetIncome) * 100);

        expensePercentageDiv.innerHTML = Math.round(percentageOfExpense) + " %";


    }
    addPercentage();

    descriptionInput.value = '';
    numberInput.value = '';

}
//delete row and update budget
function deleteRowIncome(e) {
    if (e.target.className === 'delete-button') {
        var row = e.target.parentElement.parentElement;
        e.target.parentElement.parentElement.remove(row);
    }

    var income_to_delete=row.cells[1].innerHTML.split(' ');
    
    function deleteIncomeBudget() {
        budget=budget-parseInt(income_to_delete[1]);
        budgetIncome=budgetIncome-income_to_delete[1];
        totalBudget.innerHTML = budget;
        budgetIncomeDiv.innerHTML = "+ " + budgetIncome;
    }
    deleteIncomeBudget();
}
function deleteRowExpense(e) {
    if (e.target.className === 'delete-button') {
        var row = e.target.parentElement.parentElement;
        e.target.parentElement.parentElement.remove(row);
    }
    var expense_to_delete=row.cells[1].innerHTML.split(' ');

    
    function deleteExpenseBudget() {
        budget=budget+parseInt(expense_to_delete[1]);
        budgetExpense=budgetExpense-expense_to_delete[1];
        totalBudget.innerHTML = budget;
        budgetExpenseDiv.innerHTML = "- " + budgetExpense;
    }
    deleteExpenseBudget();
}

//create event handler and calling functions
addMonth();
addButton.addEventListener('click', creatingTable);
document.getElementById('income__table').addEventListener('click', deleteRowIncome);
document.getElementById('expense__table').addEventListener('click', deleteRowExpense);
