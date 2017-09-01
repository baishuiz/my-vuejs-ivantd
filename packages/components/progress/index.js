import './style/index.less';
import Progress from './progress.js';

let progressInstance;
let timer;
function getProgressInstance() {
    progressInstance = progressInstance || Progress.newInstance();
    return progressInstance;
}

function update(options) {
    getProgressInstance().update(options);
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

// export default progress;
export default {
    start() {
        if (timer) return;

        let count = 0;

        update({
            percent: count,
            status: 'success',
            show: true,
        });

        timer = setInterval(() => {
            count += Math.floor(Math.random() * 3 + 5);
            if (count > 95) {
                clearTimer();
            }
            update({
                percent: count,
                status: 'success',
                show: true,
            });
        }, 200);
    },
    update(count) {
        clearTimer();
        update({
            percent: count,
            status: 'success',
            show: true,
        });
    },
    finish() {
        clearTimer();
        update({
            percent: 100,
            status: 'success',
            show: true,
        });
        hide();
    },
    error() {
        clearTimer();
        update({
            percent: 100,
            status: 'error',
            show: true,
        });
        hide();
    },
    destroy() {
        clearTimer();
        getProgressInstance().destroy();
        progressInstance = null;
    },
};
