//fetching from HTML
var incomeTable=document.getElementById('income__table');//income table
var descriptionInput=document.getElementById('description');
var numberInput=document.getElementById('value');
var addButton=document.getElementById('add__btn');
var selectInput=document.getElementById('add__type');
var expenseTable=document.getElementById('expense__table');//expense table
var totalBudget=document.getElementById('budget__value');
var budgetIncomeDiv=document.getElementById('budget__income--value');
var budgetExpenseDiv=document.getElementById('budget__expenses--value');

//Setting the budget values for the top part
var budget=0;
var budgetIncome=0;
var budgetExpense=0;

//creating functions
function creatingTable(){
    console.log("Creating Table Function Started");
    
    
    var htmlContent=`<tr><td>${descriptionInput.value}</td><td>${numberInput.value}</td><td><button class="delete-button"><i class="ion-ios-close-outline"></i></button></td></tr>`;
    
    
    if(selectInput.value==='inc'){

        console.log("if inc is entered");
        incomeTable.insertAdjacentHTML('beforeend',htmlContent);
        budget+=parseInt(numberInput.value);
        budgetIncome+=parseInt(numberInput.value);
    
    } 
    else if(selectInput.value==='exp'){
        
        console.log("if exp is entered")
        expenseTable.insertAdjacentHTML('beforeend',htmlContent);
        
        budgetExpense+=parseInt(numberInput.value);
        budget=budget-budgetExpense;
        console.log("budget expesnse is "+budgetExpense);
    }
    
    //console.log(budget);
    
    console.log("the function is here before addtobudget function");


    function addToBudget(){
        totalBudget.innerHTML=budget;
        budgetIncomeDiv.innerHTML=budgetIncome;
        budgetExpenseDiv.innerHTML=budgetExpense;
    }

    addToBudget();
    console.log("here after budget function",budgetIncome);

    descriptionInput.value='';
    numberInput.value='';

}

//create event handler
addButton.addEventListener('click',creatingTable);