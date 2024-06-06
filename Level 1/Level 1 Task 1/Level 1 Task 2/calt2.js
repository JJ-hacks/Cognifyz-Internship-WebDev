let clickCount = 0;
// Function to append to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Function to get a random vivid color
function getRandomVividColor() {
    const colors = ['#FF5733', '#FFBD33', '#75FF33', '#33FF57', '#33FFBD', '#3375FF', '#7533FF', '#BD33FF', '#FF33BD', '#FF3375'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Function to calculate the result
function calculateResult() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value);
        display.value = result;
        showAlert(result);
    } catch {
        display.value = 'Error';
        showAlert('Error');
    }
}

// Function to show alert with greeting and result
function showAlert(result) {
    const hours = new Date().getHours();
    let greeting;

    if (hours < 12) {
        greeting = 'Good morning';
    } else if (hours < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    alert(`${greeting}, the result is ${result}`);
}

// Add event listener to the equal button
document.addEventListener('DOMContentLoaded', () => {
    const equalButton = document.getElementById('equalButton');
    equalButton.addEventListener('click', () => {
        calculateResult();
        clickCount++;
        equalButton.style.backgroundColor = getRandomVividColor();
    });
});
// Function to reset the display
function resetDisplay() {
    document.getElementById('display').value = '';
}
