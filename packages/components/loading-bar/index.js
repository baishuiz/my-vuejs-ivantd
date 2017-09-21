import LoadingBar from './loading-bar';

let loadingBarInstance;
let timer;
function getLoadingBarInstance() {
    loadingBarInstance = loadingBarInstance || LoadingBar.newInstance();
    return loadingBarInstance;
}

function update(options) {
    getLoadingBarInstance().update(options);
}

function hide() {
    setTimeout(() => {
        update({
            show: false,
        });
        setTimeout(() => {
            update({
                percent: 0,
            });
        }, 200);
    }, 800);
}

function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

export default {
    start() {
        if (timer) return;

        let count = 0;

        update({
            percent: count,
            show: true,
        });

        timer = setInterval(() => {
            count += Math.floor(Math.random() * 3 + 5);
            if (count > 95) {
                clearTimer();
            }
            update({
                percent: count,
                show: true,
            });
        }, 200);
    },
    update(count) {
        clearTimer();
        update({
            percent: count,
            show: true,
        });
    },
    finish() {
        clearTimer();
        update({
            percent: 100,
            show: true,
        });
        hide();
    },
    destroy() {
        clearTimer();
        getLoadingBarInstance().destroy();
        loadingBarInstance = null;
    },
};
