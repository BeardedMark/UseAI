// $.ajax({
//   type: 'POST',
//   url: 'https://api.openai.com/v1/chat/completions',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'Bearer ' + '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',
//   },
//   data: JSON.stringify({
//     "model": "gpt-3.5-turbo",
//     "messages": {
//       "role": "user",
//       "content": "Какого ты пола?"
//     }
//   }),
//   success: function (response) {
//     console.log(response.choices[0].message.content);
//   },
//   error: function (XMLHttpRequest, textStatus, errorThrown) {
//     console.log("Status: " + textStatus);
//     console.log("Error: " + errorThrown);
//     $('#console').html(XMLHttpRequest);
//   }
// });

// Создаем новое соединение SSE
var source = new EventSource("https://api.openai.com/v1/chat/completions/stream?model=gpt-3.5-turbo&api_key=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");

// Обработчик события "message"
source.addEventListener("message", function(event) {
  // Получаем данные из события
  var data = JSON.parse(event.data);
  // Получаем текст сообщения из данных
  var message = data.choices[0].text;
  // Выводим текст сообщения в консоль
  console.log(message);
}, false);

// Обработчик события "error"
source.addEventListener("error", function(event) {
  // Выводим текст ошибки в консоль
  console.error("SSE error:", event);
}, false);