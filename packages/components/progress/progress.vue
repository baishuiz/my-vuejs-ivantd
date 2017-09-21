<script>
import classNames from 'classnames';
export default {
    name: 'Progress',
    data: function() {
        return {
            prefixCls: 'am-progress',
        }
    },
    props: {
        percent: {
            type: Number,
            default: 0,
        },
        position: {
            type: String,
            default: 'fixed',
        },
        unfilled: {
            type: Boolean,
            default: true,
        },
        show: {
            type: Boolean,
            default: true,
        }
    },
    render(h) {
        let { prefixCls, percent, position, unfilled, show } = this;

        const wrapCls = classNames({
            [`${prefixCls}`]: true,
            [`${prefixCls}-outer`]: true,
            [`${prefixCls}-fixed-outer`]: position === 'fixed',
            [`${prefixCls}-hide-outer`]: !unfilled,
        });
        return h('div', {
            attrs: {
                class: wrapCls,
                style: `display:${show ? '' : 'none'}`,
                'aria-valuenow': percent,
                'aria-valuemin': 0,
                'aria-valuemax': 100,
            }
        }, [h('div', {
            attrs: {
                class: `${prefixCls}-bar`,
                style: `width:${percent}%; height:0px;`
            }
        })])
    }
}
</script>