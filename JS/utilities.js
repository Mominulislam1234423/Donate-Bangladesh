function getInputValueById(id){
    const addBlance =document.getElementById(id).value;
    const valueNumber = parseFloat(addBlance);
    return valueNumber;
}

function getTextValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue) ;
    return textNumber;
}

