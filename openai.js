const messages = [
    {
      "text": "Hello!",
      "user": "user"
    },
    {
      "text": "How are you?",
      "user": "AI"
    }
  ];
  
  const data = {
    "model": "text-davinci-002",
    "messages": messages,
    "temperature": 0.5,
    "n": 1,
    "max_tokens": 50,
    "stream": true,
    "stop": "\n",
    "logit_bias": {
      "50256": -10,
      "49411": 20
    },
    "user": "12345"
  };
  
  $.ajax({
    url: "https://api.openai.com/v1/chat/completions",
    type: "POST",
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "Bearer " + ACCESS_TOKEN);
    },
    contentType: "application/json",
    data: JSON.stringify(data),
    success: function(data, status, xhr) {
      console.log("Response: ", data);
    },
    error: function(xhr, status, error) {
      console.error(error);
    },
    dataType: "text event-stream"
  }).done(function() {
    console.log("Stream completed.");
  });