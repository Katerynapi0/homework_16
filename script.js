'use strict'
// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових символів із набору characters довжиною length. span>

// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let newCharacters = ''; // < --- змінна для повернення рядка з випадковими символами із набору characters довжиною length
  for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random() * characters.length); // < --- змінна для отримання випадкових символів 
    newCharacters += characters[randomIndex]; // < --- можна ще прописати characters.charAt(randomIndex); тут отримуємо в наш строку випадкові символи 
  };

  return newCharacters; // < --- за допомогою return повертаємо нашу рядок
};

const key = generateKey(16, characters); // < --- Змінна в котрій ми отримуємо за допогою функції рядок із набору characters довжиною length
console.log(key); // < --- виводимо нашу зміну в консоль

