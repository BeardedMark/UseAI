$(document).ready(function () {
    GetMessage("Напиши краткий приветственный текст, который желает удачи в использовании данного сервиса UseGPT, который основан на использовании искуственного интеллекта ChatGPT", function(data) {
        SetMessage("ChatGPT", data);
    });
});

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
function SetMessage(autor, text) {

    $.post("src/message.php", {
        name: autor,
        text: text
    }, function (data) {
        $("#messages").append(data);

    });

    $(window).scrollTop($(document).height());
}

// Отправка сообщения
$("#send-button").click(function () {
    var message = $("#message-input").val();
    var key = $("#api-key").val();

    SetMessage("Вы", message);
    $("#message-input").val("");
    
    GetMessage(message, function(data) {
        SetMessage("ChatGPT", data);
    });

    $('textarea').height('auto')
});

// Сообщение бота
function GetMessage(text, callback) {
    var key = "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";

    $.post("apigpt.php", {
        key: key,
        message: text
    }, function (data) {
        callback(data);
    });
}

var fixedTop = $('.fixed-top');
var fixedBottom = $('.fixed-bottom');

$('.main').css('margin-top', fixedTop.height() + 'px');
$('.main').css('margin-bottom', fixedBottom.height() + 'px');

var lastScrollTop = 0;
var isVisible = true;
$(window).scroll(function () {
    var currentScrollTop = $(this).scrollTop();

    // изменить
    if (currentScrollTop < lastScrollTop && currentScrollTop < $(document).height() - $(window).height) {
        if (isVisible) {
            fixedTop.animate({ top: -fixedTop.height() + 'px' }, 300);
            fixedBottom.animate({ bottom: -fixedBottom.height() + 'px' }, 300);
            $('.main').animate({ marginBottom: '0px' }, 300);
            isVisible = false;
        }
    }

    // вернуть
    else {
        if (!isVisible) {
            fixedTop.animate({ top: '0px' }, 300);
            fixedBottom.animate({ bottom: '0px' }, 300);
            $('.main').animate({ marginBottom: fixedBottom.height() + 'px' }, 300);
            isVisible = true;
        }
    }

    lastScrollTop = currentScrollTop;
});




let $textarea = $('textarea');
$textarea.on('input', function () {
    $textarea.height('auto'); // Сбрасываем высоту текстового поля
    $textarea.height($textarea.prop('scrollHeight') + 'px'); // Устанавливаем нужную высоту
});