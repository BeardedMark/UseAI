/* События */

// Загрузка документа
// Событие которое срабатывает после загрузки документа
$(document).ready(function () {
    $("#message-input").focus();
    $("#menu").hide();

    if (!sessionStorage.getItem('API-KEY')) {
        $("#set-api-key").addClass("active")
        let key = prompt("Введите ваш ключ API:");
        if (key !== null) {
            sessionStorage.setItem('API-KEY', key);
        } else {
            sessionStorage.removeItem('API-KEY');
        }
    }
});

// Отправить сообщение
// Событие нажатия на кнопку отправки текста сообщения
$("#send-button").click(function () {
    MessageSend();
});

// Отправка по Enter
// Событие которое срабатывает при изменении содержимого окна текста сообщения
$('#message-input').on('keydown', function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        MessageSend();
    }
});

// Очистить сообщение
// Событие нажатия на кнопку очистки окна текста сообщения
$("#clear-message").click(function () {
    $("#message-input").val("");
    $("#message-input").height('auto');
    $("#message-input").focus();
});

// Вставить текст
// Событие нажатия на кнопку вставки текста из буфера обмена
$("#paste-message").click(function () {
    navigator.clipboard.readText().then(function (clipText) {
        $("#message-input").val(clipText);
        $("#message-input").focus();
        MsgInputHeight();
    });
});

// Ввод текста
// Событие ввода текста в окно ввода сообщения
$("#message-input").on('input', function () {
    MsgInputHeight();
});

// Ввод ключа
// Событие которое открывает диалоговое окно для ввода ключа и сохранения в сессии
$("#set-api-key").click(function () {
    let key = prompt("Введите ваш ключ API:");
    if (key !== null) {
        sessionStorage.setItem('API-KEY', key);
    } else {
        sessionStorage.removeItem('API-KEY');
    }
    // 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
});

// Открытие меню
// Событие, проявляющее блок с меню
$("#menu-toggle").click(function () {
    $("#menu").toggle();
});

// Командная кнопка
// Событие, которое настраивается под разработки
$("#console-log").click(function () {
    console.log(sessionStorage)
})









/* Функции */

// $.cookie('myCookie', 'myValue', { expires: 7, path: '/' });
// var myCookieValue = $.cookie('myCookie');
// console.log(myCookieValue);
// $.removeCookie('myCookie', { path: '/' });
// console.log(myCookieValue);

// Воспроизведение текста
// Функция озвучки текста который передается параметром
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

// Сообщение в UI
// Создает новое визуальное сообщение в ленте
function SetMessage(autor, text) {
    $.post("src/message.php", {
        name: autor,
        text: text
    }, function (data) {
        $("#messages").append(data);
        $(window).scrollTop($(document).height());
    });
}

// Функция сохранения ключа API


// Функция отправки сообщения
function MessageSend() {
    var message = $("#message-input").val();

    if (message) {
        SetMessage("User", message);
        $("#message-input").val("");
        $('textarea').height('auto')

        GetMessage(message, function (data) {
            SetMessage("ChatGPT", data);
            if ($("#is-played-ai-msg").prop('checked')) {
                Speech(data);
            }
        });
    }
    $("#message-input").focus();
}

// Сообщение бота
function GetMessage(text, callback) {
    var key = sessionStorage.getItem('API-KEY');
    $('#typing').removeClass('todot');

    $('#send-button').addClass('todot');
    $.post("apigpt.php", {
        key: key,
        message: text
    }, function (data) {
        $('#send-button').removeClass('todot');
        $('#typing').addClass('todot');
        callback(data);
    });
}

// Автовысота инпута ввода сообщения
// Фкункция регулировки высоты окна ввода сообщения
function MsgInputHeight() {
    let e = $("#message-input");
    e.height('auto');
    e.height(e.prop('scrollHeight') + 'px');
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
