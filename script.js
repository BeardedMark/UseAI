// Озвучка текста
function Speech(text) {
    window.speechSynthesis.cancel();
    const msg = new SpeechSynthesisUtterance(text);

    // msg.voice = speechSynthesis.getVoices()[16]; // голос
    msg.volume = 1; // громкость
    msg.rate = 1; // скорость
    msg.pitch = 1; // высота
    msg.lang = 'ru-RU'; // язык
    window.speechSynthesis.speak(msg);
}

// Сообщение в чат
function SetMessage(autor, text, voice = false) {
    if (voice) {
        Speech(text)
    }


    $.post("src/message.php", {
        name: autor,
        text: text
    }, function (data) {
        console.log(data);
        $("#messages").append(data);
    });

    // $('html, body').animate({
    //     scrollTop: $(document).height()
    // }, 1000); 
    $(window).scrollTop($(document).height());
}






// Отправка сообщения
$("#send-button").click(function () {
    var message = $("#message-input").val();
    var key = $("#api-key").val();

    SetMessage("Вопрос", message, document.querySelector('#is-played-my-msg').checked);
    $("#message-input").val("");
    $.post("apigpt.php", {
        name: "John",
        key: key,
        message: message
    }, function (data) {
        SetMessage("Ответ", data, document.querySelector('#is-played-ai-msg').checked);
    });
});





const recognition = new webkitSpeechRecognition(); // создаем экземпляр распознавателя речи
let text = ''; // создаем переменную для хранения распознанного текста
let recognizing = false; // устанавливаем флаг, показывающий, что распознавание не запущено

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
document.querySelector('#auto-rec').addEventListener('change', (event) => {
    if (event.target.checked && !recognizing) {
        recognition.start();
        recognizing = true;
    } else if (!event.target.checked && recognizing) {
        recognition.stop();
        recognizing = false;
    }
});



var fixedTop = $('.fixed-top');
var fixedBottom = $('.fixed-bottom');
$('.main').css('margin-top', fixedTop.height() + 'px');
$('.main').css('margin-bottom', fixedBottom.height() + 'px');

var lastScrollTop = 0;
var isHide = false;
$(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();

    // изменить
    if (currentScrollTop < lastScrollTop && currentScrollTop < $(document).height()) {
        if (!isHide) {
            fixedTop.animate({
                top: -fixedTop.height() + 'px'
            }, 300);

            fixedBottom.animate({
                bottom: -fixedBottom.height() + 'px'
            }, 300);

            $('.main').animate({
                marginBottom: '0px'
            }, 300);

            isHide = true;
        }
    }
    
    // вернуть
    else {
        if (isHide) {
            fixedTop.animate({
                top: '0px'
            }, 300);

            fixedBottom.animate({
                bottom: '0px'
            }, 300);

            $('.main').animate({
                marginBottom: fixedBottom.height() + 'px'
            }, 300);

            isHide = false;
        }
    }

    lastScrollTop = currentScrollTop;
});




let $textarea = $('textarea');

$textarea.on('input', function() {
  $textarea.height('auto'); // Сбрасываем высоту текстового поля
  $textarea.height($textarea.prop('scrollHeight') + 'px'); // Устанавливаем нужную высоту
});