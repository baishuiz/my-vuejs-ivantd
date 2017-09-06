<script>
import classNames from 'classnames';
export default {
    name: 'WhiteSpace',
    data: function() {
        return {
            prefixCls: 'am-whitespace',
        }
    },
    props: {
        className: String,
        size: {
            type: String,
            default: 'md'
        }
    },
    render(h) {
        let {
            prefixCls,
            size,
            className,
        } = this;

        let wrapCls = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-${size}`]: true,
            [className]: !!className,
        });
        return h('div', { attrs: { class: wrapCls } });
    }
}
</script>