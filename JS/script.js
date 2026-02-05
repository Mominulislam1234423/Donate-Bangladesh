const donateBtn = document.getElementById('Donate-btn');
const noakhali = document.getElementById('content-text').innerText;
const date = new Date().toLocaleString('en-BD');
const model = document.getElementById('modal');

donateBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const noakhaliInput = getInputValueById('Noakhali-input');
    const noakhaliBlance = getTextValueById('Noakhali-Blance');
    const mainBlance = getTextValueById('Main-Blance');
    const newBlance = noakhaliInput + noakhaliBlance;
    const donateBlance = mainBlance - noakhaliInput;

    if (isNaN(noakhaliInput || noakhaliInput <= 0)) {
        alert('Please enter a valid number');
        return;
    }
    if (mainBlance < noakhaliInput) {
        alert('Insufficient balance 😢')
        return
    }
    document.getElementById('Noakhali-Blance').innerText = newBlance;
    document.getElementById('Main-Blance').innerText = donateBlance;

    const div = document.createElement('div');
    div.classList.add('p-4', 'mt-4', 'border-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold">${noakhaliInput} Taka is ${noakhali} </h4>
    <p> Date: ${date} GMT +0600 (Bangladesh Standard Time)</P>
    `
    document.getElementById('history-itmes').appendChild(div);
})

// frist section end-------------------------------------------------------------------------------------------



const donateBtn2 = document.getElementById('Donate-btn2');
const fani = document.getElementById('fani-content-text').innerText;

donateBtn2.addEventListener('click', function (event) {
    event.preventDefault();

    const faniInput = getInputValueById('fani-input');
    const faniBlance = getTextValueById('fani-Blance');
    const mainBlance = getTextValueById('Main-Blance');
    const newBlance = faniInput + faniBlance;
    const donateBlance = mainBlance - faniInput;

    if (isNaN(faniInput || faniInput <= 0)) {
        alert('Please enter a valid number');
        return;
    }
    if (mainBlance < faniInput) {
        alert('Insufficient balance 😢')
        return
    }
    document.getElementById('fani-Blance').innerText = newBlance;
    document.getElementById('Main-Blance').innerText = donateBlance;

    const div = document.createElement('div');
    div.classList.add('p-4', 'mt-4', 'border-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold">${faniInput} Taka is ${fani} </h4>
    <p> Date: ${date} GMT +0600 (Bangladesh Standard Time)</P>
    `
    document.getElementById('history-itmes').appendChild(div);
})

// sceond section end-----------------------------------------------------------------------


const donateBtn3 = document.getElementById('Donate-btn3');
const AidForInjured = document.getElementById('aid-for-injured-text').innerText;

donateBtn3.addEventListener('click', function (event) {
    event.preventDefault();

    const AidForInjuredInput = getInputValueById('Aid-for-Injured-input');
    const AidForInjuredBlance = getTextValueById('Aid-for-Injured-Blance');
    const mainBlance = getTextValueById('Main-Blance');
    const newBlance = AidForInjuredInput + AidForInjuredBlance;
    const donateBlance = mainBlance - AidForInjuredInput;

    if (isNaN(AidForInjuredInput || AidForInjuredInput <= 0)) {
        alert('Please enter a valid number');
        return;
    }
    if (mainBlance < AidForInjuredInput) {
        alert('Insufficient balance 😢')
        return
    }
    document.getElementById('Aid-for-Injured-Blance').innerText = newBlance;
    document.getElementById('Main-Blance').innerText = donateBlance;

    const div = document.createElement('div');
    div.classList.add('p-4', 'mt-4', 'border-2');
    div.innerHTML = `
    <h4 class="text-xl font-bold">${AidForInjuredInput} Taka is Donate for ${AidForInjured} </h4>
    <p> Date: ${date} GMT +0600 (Bangladesh Standard Time)</P>
    `
    document.getElementById('history-itmes').appendChild(div);
})


