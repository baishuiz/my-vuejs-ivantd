<template>
    <div :class="listClassName">
        <!-- <div v-if="$slots.header || header" :class="prefixCls+'-header'">
            <slot name="header">{{header}}</slot>
        </div>
        <div :class="prefixCls+'-body'">
            <slot></slot>
        </div> -->

        
   
        <v-list>
            <div slot="header">RadioItem</div>
            <v-list-item align="middle" v-for="item in radios">
                <div></div>
                <div slot="extra">
                    <label :class="wrapCls">
                        <span :class="prefixCls">
                            <input :class="[prefixCls + '-input']" type="radio" value="on">
                            <span :class="[prefixCls + 'inner']"></span>
                        </span>
                    </label>
                </div>
            </v-list-item>
        </v-list>


    </div>
</template>

<script>
import classNames from 'classnames';
import { List, ListItem } from '../list';
export default {
  name: 'RadioItem',
  data: function() {
    return {
      prefixCls: 'am-radio',
    }
  },
  components: {
      radio
  },
  props: {

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