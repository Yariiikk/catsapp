// Отримуємо посилання на елементи
const passwordEl = document.getElementById('password');
const copyBtn = document.getElementById('copyBtn');
const lengthRange = document.getElementById('lengthRange');
const lengthValue = document.getElementById('lengthValue');

const includeUpper = document.getElementById('includeUpper');
const includeLower = document.getElementById('includeLower');
const includeNumbers = document.getElementById('includeNumbers');
const includeSymbols = document.getElementById('includeSymbols');

const generateBtn = document.getElementById('generateBtn');

// Функція для генерації пароля
function generatePassword() {
  // Символи для різних категорій
  const upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_-+=[]{}|;:,.<>?/';

  // Визначаємо довжину пароля
  const length = parseInt(lengthRange.value);

  // Формуємо набір символів на основі обраних чекбоксів
  let availableChars = '';
  if (includeUpper.checked) {
    availableChars += upperChars;
  }
  if (includeLower.checked) {
    availableChars += lowerChars;
  }
  if (includeNumbers.checked) {
    availableChars += numberChars;
  }
  if (includeSymbols.checked) {
    availableChars += symbolChars;
  }

  // Якщо жоден чекбокс не вибрано, повертаємо порожній рядок
  if (!availableChars) {
    return '';
  }

  // Генеруємо випадковий пароль
  let generated = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    generated += availableChars[randomIndex];
  }

  return generated;
}

// Кнопка «ГЕНЕРАЦІЯ»
generateBtn.addEventListener('click', () => {
  passwordEl.value = generatePassword();
});

// Кнопка «Копія»
copyBtn.addEventListener('click', () => {
  if (!passwordEl.value) return;

  // Виділяємо текст у полі
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999); // Для мобільних пристроїв

  // Копіюємо текст
  document.execCommand('copy');
  alert('Пароль скопійовано!');
});

// Слайдер для вибору довжини пароля
lengthRange.addEventListener('input', () => {
  lengthValue.textContent = lengthRange.value;
});
