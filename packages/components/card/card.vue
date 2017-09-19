<script>
import classNames from 'classnames';
export default {
    name: 'Card',
    data: function() {
        return {
            prefixCls: 'am-card',
        }
    },
    props: {
        className: String,
        full: Boolean,
    },
    render(h) {
        let {
            prefixCls,
            full,
            className,
        } = this;

        let wrapCls = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-full`]: full,
            [className]: !!className,
        });
        return h('div', { attrs: { class: wrapCls } },[this.$slots.default]);
    }
}
</script>