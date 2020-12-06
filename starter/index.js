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
//var incomePercentageDiv=document.getElementById('budget__income--percentage');
var expensePercentageDiv=document.getElementById('budget__expenses--percentage');

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
    }
    
    
    //Adding budget calculation at top of the page
    function addToBudget(){
        totalBudget.innerHTML=budget;
        budgetIncomeDiv.innerHTML=budgetIncome;
        budgetExpenseDiv.innerHTML=budgetExpense;
    }

    addToBudget();
    //adding percentage to top
    function addPercentage(){
        var percentageOfExpense=parseFloat((budgetExpense/budgetIncome)*100);
        expensePercentageDiv.innerHTML=percentageOfExpense+" %";
        
    }
    addPercentage();

    // function addCalender{


    // }
    // addCalender();
    
    descriptionInput.value='';
    numberInput.value='';

}

//create event handler
addButton.addEventListener('click',creatingTable);