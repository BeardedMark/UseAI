<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>

    <link rel="icon" type="image/x-icon" href="/svh/favicon.png">
    <link rel="stylesheet" href="properties.css">
    <link rel="stylesheet" href="style.css">
    <!-- <link rel="stylesheet" href="https://dnlmarket.devirs.com/css/wireframe.css"> -->

    <title id="title">UseGPT</title>
</head>

<body>
    <? include_once('src/header.php') ?>

    <main class="main">
        <?php
        $url = $_SERVER['REQUEST_URI'];
        $path = parse_url($url, PHP_URL_PATH);
        include_once(ltrim($path, '/') . ".php");
        ?>


    </main>

    <script src="script.js"></script>
    <script src="functions.js"></script>
</body>

</html>