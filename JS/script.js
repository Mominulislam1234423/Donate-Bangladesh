const donateBtn = document.getElementById('Donate-btn');
// const noakhaliBlance = document.getElementById('Noakhali-Blance').innerText;
// const noakhaliInput = document.getElementById('Noakhali-input');
// const mainBlance = document.getElementById('Main-Blance').innerText;



donateBtn.addEventListener('click', function (event) {
    event.preventDefault();

    const noakhaliInput = getInputValueById('Noakhali-input');
    const noakhaliBlance = getTextValueById('Noakhali-Blance');
    const mainBlance = getTextValueById('Main-Blance');
    const newBlance = noakhaliInput + noakhaliBlance;
    const donateBlance = mainBlance - noakhaliInput;


     if (isNaN(noakhaliInput)) {
        alert('Please enter a valid number');
        return;
    }

    document.getElementById('Noakhali-Blance').innerText = newBlance;
    document.getElementById('Main-Blance').innerText = donateBlance;


})





