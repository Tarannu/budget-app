console.log("new format entered");
model={
    items:[]

}
view={
    render: function(){
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
    },
    addToTable: function(){
        view.render();
        console.log("Creating Table Function Started");

        if (selectInput.value === 'inc') var sign = "+";
        else if (selectInput.value === 'exp') var sign = "-";
        var htmlContent = `<tr id="item"><td id="item__description">${descriptionInput.value}</td><td class="budget-value">${sign} ${numberInput.value}</td><td><button id="delete-button" class="delete-button"><i class="ion-ios-close-outline"></i></button></td></tr>`;
        if (selectInput.value === 'inc') {
            incomeTable.insertAdjacentHTML('beforeend', htmlContent);
            budget += parseInt(numberInput.value);
            budgetIncome += parseInt(numberInput.value);
        }
        else if (selectInput.value === 'exp') {
            expenseTable.insertAdjacentHTML('beforeend', htmlContent);
            budgetExpense += parseInt(numberInput.value);
            budget = budget - budgetExpense;
        }
        else {
            window.alert("Please select the sign + or - ");
        }
        addToBudget();
        clearInput();  
    },
    addToBudget:function(){
        totalBudget.innerHTML = budget;
        budgetIncomeDiv.innerHTML = "+ " + budgetIncome;
        budgetExpenseDiv.innerHTML = "- " + budgetExpense;
    },

    clearInput: function(){
        descriptionInput.value = '';
        numberInput.value = '';
    },

};
controller={
    init: function(){
        view.render();
    },
    addItem: function(){
        view.render();
    },
    completeItem: function(){
        view.render();
    },
    deleteItem: function(){
        view.render();
    }


}
controller.init();