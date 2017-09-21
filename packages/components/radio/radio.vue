<template>
  <label :class="wrapCls">
    <span :class="prefixCls">
      <input :class="[prefixCls + '-input']" type="radio" value="on">
      <span :class="[prefixCls + 'inner']"></span>
    </span>
  </label>
</template>

<script>
import classNames from 'classnames';
export default {
  name: 'Radio',
  data: function() {
    return {
      prefixCls: 'am-radio',
    }
  },
  props: {
    name: String,
  },
  computed: {
    wrapCls() {
      let {
        prefixCls,
      } = this;
      let classObj = {};
      classObj[prefixCls + '-wrapper'] = true;
      return classObj;
    }
  }
}
</script>