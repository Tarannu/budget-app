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
    const listDiv=document.createElement('div');
    listDiv.classList.add('list');

    //create list
    const newValue=document.createElement('table');
    newValue.innerText=valueInput.value;
    newValue.classList.add("income-item");
    listDiv.appendChild(newValue);


    

    //append to list
    incomeList.appendChild(listDiv);
    //document.getElementsByClassName("income__container").innerHTML =valueInput.value ;
    valueInput.value="";


}