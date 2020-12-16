console.log("new format entered");
model={
    items:[]

}
view={
    incomeTable: document.getElementById('income__table'),//income table
    descriptionInput: document.getElementById('description'),
    numberInput: document.getElementById('value'),
    addButton: document.getElementById('add__btn'),
    selectInput: document.getElementById('add__type'),
    expenseTable: document.getElementById('expense__table'),//expense table
    totalBudget: document.getElementById('budget__value'),
    budgetIncomeDiv: document.getElementById('budget__income--value'),
    budgetExpenseDiv: document.getElementById('budget__expenses--value'),
    expensePercentageDiv: document.getElementById('budget__expenses--percentage'),
    //Setting the budget values for the top part
    budget: 0,
    budgetIncome: 0,
    budgetExpense: 0,
    
    addMonth:function() {
        
        var monthDiv = document.getElementById('budget__title--month');
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
    },
    addToTable: function(){
        
        
        console.log("Creating Table Function Started");

        if (view.selectInput.value === 'inc') var sign = "+";
        else if (view.selectInput.value === 'exp') sign = "-";
        var htmlContent = `<tr id="item"><td id="item__description">${view.descriptionInput.value}</td><td class="budget-value">${sign} ${view.numberInput.value}</td><td><button id="delete-button" class="delete-button"><i class="ion-ios-close-outline"></i></button></td></tr>`;
        if (view.selectInput.value === 'inc') {
            view.incomeTable.insertAdjacentHTML('beforeend', htmlContent);
            view.budget += parseInt(view.numberInput.value);
            view.budgetIncome += parseInt(view.numberInput.value);
        }
        else if (view.selectInput.value === 'exp') {
            view.expenseTable.insertAdjacentHTML('beforeend', htmlContent);
            view.budgetExpense += parseInt(view.numberInput.value);
            view.budget = view.budget - view.budgetExpense;
        }
        else {
            window.alert("Please select the sign + or - ");
        }
        budgetController.addToBudget();
        budgetController.addPercentage();
        view.clearInput();  
    },
    

    clearInput: function(){
        view.descriptionInput.value = '';
        view.numberInput.value = '';
    },

};
budgetController={
    

    addToBudget:function(){
        view.totalBudget.innerHTML = view.budget;
        view.budgetIncomeDiv.innerHTML = "+ " + view.budgetIncome;

        view.budgetExpenseDiv.innerHTML = "- " + view.budgetExpense;
    },
    addPercentage:function() {
        var percentageOfExpense = parseFloat((view.budgetExpense / view.budgetIncome) * 100);

        view.expensePercentageDiv.innerHTML = Math.round(percentageOfExpense) + " %";

    }
}
controller={
    init: function(){
        
        view.addMonth();
        controller.eventHandler();
        
        
    },
    eventHandler: function(){
        
        view.addButton.addEventListener('click', view.addToTable);
        document.getElementById('income__table').addEventListener('click', controller.deleteRowIncome);
        document.getElementById('expense__table').addEventListener('click', controller.deleteRowExpense);


    },
        
    deleteRowIncome: function(e){
        if (e.target.className === 'delete-button') {
            var row = e.target.parentElement.parentElement;
            e.target.parentElement.parentElement.remove(row);
        }

        var income_to_delete=row.cells[1].innerHTML.split(' ');

        function deleteIncomeBudget() {
            view.budget=view.budget-parseInt(income_to_delete[1]);
            view.budgetIncome=view.budgetIncome-income_to_delete[1];
            view.totalBudget.innerHTML = view.budget;
            view.budgetIncomeDiv.innerHTML = "+ " + view.budgetIncome;
        }
        deleteIncomeBudget();
        
    },
    deleteRowExpense: function(e) {
        if (e.target.className === 'delete-button') {
            var row = e.target.parentElement.parentElement;
            e.target.parentElement.parentElement.remove(row);
        }
        var expense_to_delete=row.cells[1].innerHTML.split(' ');
    
        
        function deleteExpenseBudget() {
            budgetController.budget=budgetController.budget+parseInt(expense_to_delete[1]);
            budgetController.budgetExpense=budgetController.budgetExpense-expense_to_delete[1];
            view.totalBudget.innerHTML = budgetController.budget;
            view.budgetExpenseDiv.innerHTML = "- " + budgetController.budgetExpense;
        }
        deleteExpenseBudget();
    }



}
controller.init();