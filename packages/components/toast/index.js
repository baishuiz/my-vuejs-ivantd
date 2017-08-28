import './style/index.less';
import Toast from './toast.js';

let messageInstance;
let timer;

function getMessageInstance() {
    messageInstance = messageInstance || Toast.newInstance({});
    return messageInstance;
}

function update(options) {
    getMessageInstance().update(options);
}

function clearTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
}

function close() {
    clearTimer();
    getMessageInstance().destroy();
    messageInstance = null;
}

export default {
    message(_content, _duration, onClose, _mask, _type) {
        if (timer) return;
        const options = {
            content: _content,
            mask: _mask,
            type: _type,
        };
        update(options);
        if (_duration && _duration >= 0) {
            timer = setInterval(() => {
                close();
                if (onClose) {
                    onClose();
                }
            }, _duration * 1000);
        }
    },
    destroy() {
        clearTimer();
        getMessageInstance().destroy();
        messageInstance = null;
        timer = null;
    },
};
