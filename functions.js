$(document).ready(function () {
    // Выполняется при полной загрузки элемента
});


// Голос
const recognition = new webkitSpeechRecognition(); // создаем экземпляр распознавателя речи
let text = ''; // создаем переменную для хранения распознанного текста

recognition.continuous = true; //устанавливаем параметры распознавания речи
recognition.interimResults = true;

//функция для обработки результатов распознавания речи
recognition.onresult = (event) => {
    let interim_transcript = ''; //создаем переменную для хранения промежуточных результатов распознавания

    //перебираем результаты распознавания для формирования полного распознанного текста
    for (let i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) { //если результаты окончательные
            text += event.results[i][0].transcript + ' '; //добавляем их в переменную с распознанным текстом
        } else { //иначе 
            interim_transcript += event.results[i][0].transcript; //добавляем результаты в переменную с промежуточными результатами
        }
    }

    document.querySelector('#message-input').value = text + interim_transcript; //выводим распознанный текст на страницу
};

// Автоматическая запись с микрофона
let recognizing = false;
document.querySelector('#auto-rec').addEventListener('change', (event) => {
    if (event.target.checked && !recognizing) {
        recognition.start();
        recognizing = true;
    } else if (!event.target.checked && recognizing) {
        recognition.stop();
        recognizing = false;
    }
});
