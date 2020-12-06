//fetching from HTML
var incomeTable=document.getElementById('income__table');//income table
var descriptionInput=document.getElementById('description');
var numberInput=document.getElementById('value');
var addButton=document.getElementById('add__btn');
var selectInput=document.getElementById('add__type');
var expenseTable=document.getElementById('expenses__table');//expenses table
var budgetIncome=document.getElementsByClassName('budget__income--value');
//creating funtions
function creatingTable(){
    console.log("Creating Table Function Started");

    var htmlContent=`<tr><td>${descriptionInput.value}</td><td>${numberInput.value}</td><td><button class="delete-button"><i class="ion-ios-close-outline"></i></button></td></tr>`;
    
    if(selectInput==='inc'){
        console.log("if inc is entered");
        incomeTable.insertAdjacentHTML('beforeend',htmlContent);

    } 
    else if(selectInput==='exp'){

        //addToExpense(); //add to expense table
        console.log("if exp is entered")
        expenseTable.insertAdjacentElement('beforeend',htmlContent);
    }
    
    console.log("the function is here after if")
    function addToBudget(){
        
        budgetIncome.innerHTML=numberInput;
    }
    addToBudget();
    descriptionInput.value='';
    numberInput.value='';

}

//create event handler
addButton.addEventListener('click',creatingTable);