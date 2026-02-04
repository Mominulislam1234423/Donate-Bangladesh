function getInputValueById(id) {
    const addBlance = document.getElementById(id).value.trim();
    const valueNumber = parseFloat(addBlance);
    return valueNumber;
}

function getTextValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function showSection(id) {
    document.getElementById('main-contant').classList.add('hidden')
    document.getElementById('history').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}

// function btnColor(id) {
//     document.getElementById('main-contant').classList.add('hidden ')
//     document.getElementById('history').classList.add('hidden')

//     document.getElementById(id).classList.remove('hidden')
// }



