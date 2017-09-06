<script>
const warnMsg = 'Icon props.type is invalid, have you set svg-sprite-loader correctly? see https://goo.gl/kN8oiw';
import classNames from 'classnames';
export default {
    name: 'Icon',
    props: {
        type: String,
        size: {
            type: String,
            default: 'md',
        },
        className: String
    },
    render(h) {
        let {
            prefixCls,
            type,
            size,
            className
        } = this;

        if (!type || typeof type !== 'string') {
            // console.error(warnMsg);
            return null;
        }

        let xlinkHref = this.renderSvg();
        let outerIcon;
        if (!xlinkHref) {
            outerIcon = true;
            xlinkHref = type;
            if (!/^#/.test(type)) {
                // console.error(warnMsg);
            }
        } else {
            if (!/^#/.test(xlinkHref)) {
                // console.error(warnMsg);
            }
            xlinkHref = `#${type}`;
        }
        const iconClassName = classNames({
            'am-icon': true,
            [`am-icon-${outerIcon ? type.substr(1) : type}`]: true,
            [`am-icon-${size}`]: true,
            [className]: !!className,
        });
        console.log(iconClassName);
        return h('svg', { attrs: { class: iconClassName } }, [h('use', { attrs: { 'xlink:href': xlinkHref } })])
    },
    methods: {
        renderSvg() {
            let svg;
            try {
                svg = require(`!svg-sprite-loader!./style/assets/${this.type}.svg`);
            } catch (e) {

            } finally {
                return svg;
            }
        }
    }
};
</script>