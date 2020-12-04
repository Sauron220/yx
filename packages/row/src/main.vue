<template>
  <div class="yx-row">
    <div v-if="title" class="title-wrap">
      <h3>{{ title }}</h3>
      <div class="header">
        <slot name="header" />
      </div>
    </div>
    <div class="wrap-border">
      <div v-for="(item, index) in row" :key="item['label']+index" class="margin-btm" :style="{ width: !item['span'] ? '25%' : `${100 / item['span']}%` }">
        <div class="yx-label label-style" :style="item.lineStyle ? item.lineStyle : ''" :class="{'label-span-sty': item['span']}">
          <el-tooltip effect="dark" :disabled="!item['tip']" :content="item['label']">
            <span>{{ item['label'] }}</span>
          </el-tooltip>
        </div>
        <div v-if="item['render']" class="yx-label__content label-con-style" :class="{'label-con-span-sty': item['span']}">
          <row-render :scope="source" :render="item['render']" />
        </div>
        <div v-else class="yx-label__content label-con-style" :class="{'label-con-span-sty': item['span']}" :style="item.spanStyle ? item.spanStyle : ''">
          <span v-if="source">
            <span v-if="item['link']" v-explore="{exploreList, key: source[item['key']]}" class="yx-text__link">{{ source[item['key']] }}</span>
            <span v-else-if="item['map']" v-map="{address: source[item['key']]}" class="yx-text__link">{{ source[item['key']] }}</span>
            <span v-else>{{ source[item['key']] }}</span>
          </span>
        </div>
      </div>
    </div>
    <slot />
    <div class="footer">
      <slot name="footer" />
    </div>
  </div>
</template>

<script>
import RowRender from './RowRender'
import Explore from '@/directives/explore'
import Map from '@/directives/map'

export default {
  name: 'YxRow',
  directives: {
    Explore,
    Map
  },
  components: {
    RowRender
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    span: {
      type: Number,
      default: 1
    },
    source: {
      type: Object,
      default: () => {}
    },
    row: {
      type: Array,
      default: () => []
    },
    exploreList: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      isEmpty: false
    }
  }
}
</script>
