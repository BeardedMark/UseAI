<?php
    // Параметры для запроса
    $headers = array(
        'Content-Type: application/json',
        'Authorization: Bearer ' . $_POST["key"]
    );

    $data = array(
        "model" => "gpt-3.5-turbo",
        "temperature" => 0,
        "n" => 1,
        "max_tokens" => 100,
        "messages" => array(
            array(
                "role" => "user",
                "content" => "Напиши на русском языке ответ на следующее сообщение:\n" . $_POST["message"]
            )
        )
    );

    $options = array(
        CURLOPT_URL => 'https://api.openai.com/v1/chat/completions',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($data),
        CURLOPT_HTTPHEADER => $headers
    );

    $curl = curl_init();
    curl_setopt_array($curl, $options);

    $response = curl_exec($curl);
    curl_close($curl);



    if (!$response) {
        die('Ошибка: Не удалось выполнить запрос к API OpenAI');
    }

    $response_data = json_decode($response, true);

    if (!$response_data) {
        die('Ошибка: Не удалось прочитать JSON-ответ от API OpenAI');
    }

    if (isset($response_data['choices'][0]['message']['content'])) {
        die($response_data['choices'][0]['message']['content']);
    } else {
        echo 'Ошибка: API OpenAI не доступен<hr>';
        // echo $response;
        $error = json_decode($response, true);
        echo $error['error']['message'];
    }
