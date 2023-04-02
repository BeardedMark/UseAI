<? include('src/header.php') ?>

<main class="main">
    <div class="container py-3">
        <div class="row gy-3">
            <div class="col col-12">
                <div class="message-list">
                    <div class="row gy-2" id="messages">
                        <div class="col mx-auto col-4 col-sm-4 col-md-3 col-lg-2 ">
                            <img class="sticker" src="https://sun3-18.userapi.com/XKUncFL0w9JjHbC30g1gNbV183SfJNa6Fq2DTw/-8jpmVSvHqk.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<footer class="footer fixed-bottom">
    <div class="container py-3">
        <div class="row align-items-end">
            <div class="col col-auto">
                <div class="svg-frame lock">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path fill-rule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 013.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 013.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 01-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875zM12.75 12a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V18a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V12z" clip-rule="evenodd" />
                        <path d="M14.25 5.25a5.23 5.23 0 00-1.279-3.434 9.768 9.768 0 016.963 6.963A5.23 5.23 0 0016.5 7.5h-1.875a.375.375 0 01-.375-.375V5.25z" />
                    </svg>
                </div>
            </div>

            <div class="col">
                <textarea class="message-input-text" rows="1" placeholder="Введите сообщение" type="text" id="message-input"></textarea>
            </div>

            <div class="col col-auto">
                <div class="svg-frame lock">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                        <path d="M8.25 4.5a3.75 3.75 0 117.5 0v8.25a3.75 3.75 0 11-7.5 0V4.5z" />
                        <path d="M6 10.5a.75.75 0 01.75.75v1.5a5.25 5.25 0 1010.5 0v-1.5a.75.75 0 011.5 0v1.5a6.751 6.751 0 01-6 6.709v2.291h3a.75.75 0 010 1.5h-7.5a.75.75 0 010-1.5h3v-2.291a6.751 6.751 0 01-6-6.709v-1.5A.75.75 0 016 10.5z" />
                    </svg>
                </div>
            </div>

            <div class="col col-auto">
                <a id="send-button">
                    <div class="svg-frame">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    </div>
</footer>