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
    addMonth:function() {
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
        addPercentage();
        clearInput();  
    },
    addToBudget:function(){
        totalBudget.innerHTML = budget;
        budgetIncomeDiv.innerHTML = "+ " + budgetIncome;
        budgetExpenseDiv.innerHTML = "- " + budgetExpense;
    },
    addPercentage:function() {
        var percentageOfExpense = parseFloat((budgetExpense / budgetIncome) * 100);

        expensePercentageDiv.innerHTML = Math.round(percentageOfExpense) + " %";

    },

    clearInput: function(){
        descriptionInput.value = '';
        numberInput.value = '';
    },

};
controller={
    init: function(){
        view.render();
        view.addMonth();
    },
    addItem: function(){
        view.render();

    },
    completeItem: function(){
        view.render();
    },
    
    deleteRowIncome: function(e){
        view.render();
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
        
    },
    deleteRowExpense: function(e) {
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



}
controller.init();