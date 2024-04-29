function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const buttonDestroy = document.querySelector("[data-destroy]");
buttonDestroy.classList.add("destroy-btn");
buttonDestroy.addEventListener('mouseover', () => {
  buttonDestroy.style.backgroundColor = '#FF7070';
});

buttonDestroy.addEventListener('mouseout', () => {
  buttonDestroy.style.backgroundColor = '';
});

const buttonCreate = document.querySelector("[data-create]");
const input = document.querySelector("input[type='number']");

buttonCreate.addEventListener('click', () => {
    const numberOfBoxes = input.value;
    let html = '';
    for (let i = 0; i < numberOfBoxes; i++) {
        const size = 30 + i * 10;
        const color = getRandomHexColor();
        html += `<div class="box" style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;
    }
    document.getElementById('boxes').innerHTML = html;
    input.value = '';
});

const boxesContainer = document.getElementById('boxes');

buttonDestroy.addEventListener('click', () => {
    boxesContainer.innerHTML = '';
});




// На що буде звертати увагу ментор при перевірці:

// Після кліку на кнопку Create, якщо в input значення поза межами діапазону 1-100, нічого не відбувається
// Після кліку на кнопку Create в div#boxes за одну операцію додається така кількість різнокольорових квадратів, яка вказана в input. Значення input очищається
// Після повторного кліку на кнопку Create попередні квадрати повністю прибираються і замість них додаються нові у кількості, що вказана в input. Значення input очищається
// Усі квадрати в div#boxes різнокольорові і мають фон випадкового кольору
// Перший квадрат у div#boxes має розміри 30px на 30px, а кожен наступний на 10px вищий і ширший від попереднього
// Після натискання на кнопку Destroy усі квадрати з div#boxes мають видалятися