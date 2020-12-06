//fetching from HTML
var incomeTable=document.getElementById('income__table');//income table
var descriptionInput=document.getElementById('description');
var numberInput=document.getElementById('value');
var addButton=document.getElementById('add__btn');
var selectInput=document.getElementById('add__type');
var expenseTable=document.getElementById('expense__table');//expense table
var budgetIncome=document.getElementsByClassName('budget__income--value');
//creating funtions
function creatingTable(){
    console.log("Creating Table Function Started");

    console.log("the function is here before if")
    var htmlContent=`<tr><td>${descriptionInput.value}</td><td>${numberInput.value}</td><td><button class="delete-button"><i class="ion-ios-close-outline"></i></button></td></tr>`;
    
    if(selectInput.value==='inc'){

        console.log("if inc is entered");
        incomeTable.insertAdjacentHTML('beforeend',htmlContent);
    } else if(selectInput.value==='exp'){
        //addToExpense(); //add to expense table
        console.log("if exp is entered")
        expenseTable.insertAdjacentHTML('beforeend',htmlContent);
    }
    if(selectInput.value=='inc'){
        var check='inc';
    }
    else {
        check='exp';
    }
    console.log(check);
    
    console.log("the function is here after if")
    // function addToBudget(){
        
    //     budgetIncome.innerHTML=numberInput;
    // }
    // addToBudget();
    descriptionInput.value='';
    numberInput.value='';

}

//create event handler
addButton.addEventListener('click',creatingTable);