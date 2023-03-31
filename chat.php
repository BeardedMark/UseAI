<header class="header fixed-top">
    <div class="container py-1">
        <div class="row align-items-center">
            <div class="col">
                <a href="#options" class="link">Ai.Chat.Custom</a>
            </div>

            <div class="col col-auto">
            <a href="#options" class="button"><img src="https://img.icons8.com/material-rounded/24/cccccc/settings.png"/></a>
            </div>
        </div>
    </div>
</header>

<main class="main">
    <div class="container py-3">
        <div class="row gy-3">
            <div class="col col-12">
                <div class="message-list">
                    <div class="row gy-2" id="messages">
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<div class="shy" id="options">
    <div class="container">
        <div class="row">
            <div class="col">
                <div>
                    <input class="input" placeholder="Ваш API KEY" type="password" id="api-key" value="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">

                    <label for="">Запись</label>
                    <div class="checkbox">
                        <input type="checkbox" id="auto-rec">
                        <label for="scales">Запись с микрофона</label>
                    </div>

                    <label for="">Воспроизведение</label>
                    <div class="checkbox">
                        <input type="checkbox" id="is-played-ai-msg">
                        <label for="scales">Входящих</label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" id="is-played-my-msg">
                        <label for="scales">Исходящих</label>
                    </div>


                    <a href="#">Закрыть</a>
                </div>
            </div>
        </div>
    </div>
</div>

<footer class="footer fixed-bottom">
    <div class="container">
        <div class="row ">
            <div class="col d-flex align-items-end">
                <textarea class="input textarea my-2" rows="1" placeholder="Введите сообщение" type="text" id="message-input"></textarea>
                <button class="button" id="send-button"><img src="https://img.icons8.com/material-rounded/24/cccccc/filled-sent.png"/></button>
            </div>

            <!-- <div class="col col-auto">
        <button class="button frame fly" id="micro-button">Микрофон</button>
    </div> -->

        </div>
    </div>
</footer>