//Total Balance
const balanceElement = document.getElementById('balance');

//Value Input
const valueInputElement = document.getElementById('value');

//Description Input
const descriptionInputElement = document.getElementById('description');

//Income/Expense
const selectElement = document.querySelector('select');

//Addition button
const additionButtonElement = document.querySelector('footer button');

//Entry list
const entryListElements = document.querySelector('section ul');


function addEntry (amount, operation, description){
    const listEntry = document.createElement('li');
    listEntry.classList.add(operation);

    const listEntryValue = document.createElement('strong');
    listEntryValue.innerText = amount+'$';

    const listEntryDescription = document.createElement('em');
    listEntryDescription.innerText = description;

    const listEntryOperator = document.createElement('span');
    if (operation === 'income'){
        listEntryOperator.innerText = '+';
    }else if (operation === 'expense'){
        listEntryOperator.innerText = '-';
    };

    listEntry.appendChild(listEntryDescription);
    listEntry.appendChild(listEntryOperator);
    listEntry.appendChild(listEntryValue);

    entryListElements.appendChild(listEntry);
}


function updateBalance(){
    let total = 0;

    for (let item of entryListElements.children){
        const valueElement = item.querySelector('strong');
        const operationElement = item.querySelector('span');

        const value= parseInt(valueElement.innerText);
        const operation = operationElement.innerText;

        if (operation === '+'){
            total = total + value;
        }else if (operation === '-'){
            total = total - value;
        }

    }

    balanceElement.innerText = total+'$';
}


additionButtonElement.onclick = function(){
    const description = descriptionInputElement.value;
    const amount = valueInputElement.value;
    const operation = selectElement.value;

    addEntry(amount, operation, description);

    descriptionInputElement.value = '';
    valueInputElement.value = '';

    updateBalance();
}
