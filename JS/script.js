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
    <h4 class="text-xl font-bold">${newBlance} Taka is ${noakhali} </h4>
    <p> Date: ${date} GMT +0600 (Bangladesh Standard Time)</P>
    `
    document.getElementById('history-itmes').appendChild(div);

    


})





