const { table } = require("console");

//selectors
const descriptionInput=document.querySelector('add__description');
const valueInput=document.querySelector('.add__value');
const buttonInput=document.querySelector('.add__btn');
const incomeList=document.querySelector('.income__list');

//event listeners
buttonInput.addEventListener('click',addToList);


//functions
function addToList(e){
    
    //prevent form from submitting
    e.preventDefault(); 

    //create div
    const tableDiv=document.createElement('div');
    tableDiv.classList.add('incomeDiv');

    //create table
    const incomeTable=document.createElement('table');
    incomeTable.classList.add('incomTable')

    //create table elements
    const row=incomeTable.insertRow(0);
    const newDes=document.createElement('td');
    const newValue=document.createElement('td');
    
    newDes=row.insertCell(0);
    newDes.innerText=descriptionInput.value;

    newValue=row.insertCell(1);
    newValue.innerText=valueInput.value;
    
    row.classList.add('incomeRow');
    
    incomeTable.appendChild(row);
    tableDiv.appendChild(incomeTable);

    //append to list
    incomeList.appendChild(tableDiv);
    //document.getElementsByClassName("income__container").innerHTML =valueInput.value ;
    valueInput.value="";
}