import './style/index.less';
import Modal from './confirm';

let modalInstance;

function getModalInstance() {
    modalInstance = modalInstance || Modal.newInstance({
        closable: false,
        maskClosable: false,
        // footerHide: true,
    });

    return modalInstance;
}

function confirm(options) {
    // const render = ('render' in options) ? options.render : undefined;
    // let instance = getModalInstance(render);

    options.onRemove = function () {
        modalInstance = null;
    };

    getModalInstance().show(options);
}

Modal.info = function (props = {}) {
    return confirm(props);
};

Modal.alert = function (props = {}) {
    if (!props.loading) {
        props.buttons = [
            {
                text: '确定',
                action: () => {
                    Modal.remove();
                    if (props.ok) {
                        props.ok();
                    }
                },
            },
        ];
    }
    return confirm(props);
};

Modal.confirm = function (props = {}) {
    if (!props.loading) {
        props.buttons = [
            {
                text: '取消',
                action: () => {
                    Modal.remove();
                    if (props.cancel) {
                        props.cancel();
                    }
                },
            },
            {
                text: '确定',
                action: () => {
                    Modal.remove();
                    if (props.ok) {
                        props.ok();
                    }
                },
            },
        ];
    }
    return confirm(props);
};

Modal.remove = function () {
    if (!modalInstance) {
        return false;
    }

    const instance = getModalInstance();

    instance.remove();
};

export default Modal;
