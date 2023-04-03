// Голос
const recognition = new webkitSpeechRecognition(); // создаем экземпляр распознавателя речи

recognition.continuous = true; //устанавливаем параметры распознавания речи
recognition.interimResults = true;

//функция для обработки результатов распознавания речи
recognition.onresult = (event) => {
    let text = ''; // создаем переменную для хранения распознанного текста
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


$("#rec-message").on('mousedown touchstart',function () {
    recognition.start();
    recognizing = true;
});
$("#rec-message").on('mouseup touchend',function () {
    setTimeout(function() {
        recognition.stop();
        recognizing = false;
    }, 2000);
});

