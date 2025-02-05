document.addEventListener("DOMContentLoaded", () => {
    const requestFullScreen = () => {
        const elem = document.documentElement; // Весь документ
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) { // Firefox
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) { // Chrome, Safari
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { // IE/Edge
            elem.msRequestFullscreen();
        }

        // После первого касания удаляем обработчик, чтобы не срабатывать повторно
        document.removeEventListener("touchstart", requestFullScreen);
    };

    // Включаем fullscreen при первом касании экрана
    document.addEventListener("touchstart", requestFullScreen);
});
