<template>
    <div class="demo">
        <div class="demoName">
            <a class="icon" @click="$router.push({path:'/'})"></a>ImagePicker
        </div>
        <div class="demo-preview-item" id="button-demo-0">
            <div class="demoTitle">基础</div>
            <div class="demoContainer">

            </div>
        </div>
    </div>
</template>

<script>
const data = [{
    url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
    id: '2121',
}, {
    url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
    id: '2122',
}];
export default {
    name: 'name',
    data: function() {
        return {
            files: data,
        }
    },
    methods: {
        getOrientation(file, callback) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const view = new DataView((e.target).result);
                if (view.getUint16(0, false) !== 0xFFD8) {
                    return callback(-2);
                }
                let length = view.byteLength;
                let offset = 2;
                while (offset < length) {
                    const marker = view.getUint16(offset, false);
                    offset += 2;
                    if (marker === 0xFFE1) {
                        let tmp = view.getUint32(offset += 2, false);
                        if (tmp !== 0x45786966) {
                            return callback(-1);
                        }
                        let little = view.getUint16(offset += 6, false) === 0x4949;
                        offset += view.getUint32(offset + 4, little);
                        let tags = view.getUint16(offset, little);
                        offset += 2;
                        for (let i = 0; i < tags; i++) {
                            if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                                return callback(view.getUint16(offset + (i * 12) + 8, little));
                            } W
                        }
                    } else if ((marker & 0xFF00) !== 0xFF00) {
                        break;
                    } else {
                        offset += view.getUint16(offset, false);
                    }
                }
                return callback(-1);
            };
            reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
        },
        getRotation(orientation = 1) {
            let imgRotation = 0;
            switch (orientation) {
                case 3:
                    imgRotation = 180;
                    break;
                case 6:
                    imgRotation = 90;
                    break;
                case 8:
                    imgRotation = 270;
                    break;
                default:
            }
            return imgRotation;
        },
        removeImage(index) {
            const newImages = [];
            const { files } = this;
            files.forEach((image, idx) => {
                if (index !== idx) {
                    newImages.push(image);
                }
            });
            if (this.props.onChange) {
                this.props.onChange(newImages, 'remove', index);
            }
        },
        addImage(imgItem) {
            const { files = [] } = this.props;
            const newImages = files.concat(imgItem);
            if (this.props.onChange) {
                this.props.onChange(newImages, 'add');
            }
        },
        onImageClick(index) {
            if (this.props.onImageClick) {
                this.props.onImageClick(index, this.props.files);
            }
        },
        onFileChange() {
            const fileSelectorEl = this.fileSelectorInput;
            if (fileSelectorEl && fileSelectorEl.files && fileSelectorEl.files.length) {
                const file = fileSelectorEl.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    const dataURL = (e.target).result;
                    if (!dataURL) {
                        // Toast.fail('图片获取失败');
                        alert('图片获取失败');
                        return;
                    }

                    let orientation = 1;
                    this.getOrientation(file, (res) => {
                        // -2: not jpeg , -1: not defined
                        if (res > 0) {
                            orientation = res;
                        }
                        this.addImage({
                            url: dataURL,
                            orientation,
                            file,
                        });

                        fileSelectorEl.value = '';
                    });
                };
                reader.readAsDataURL(file);
            }
        }
    }
}
</script>

<style scoped>

</style>