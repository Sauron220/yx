<template>
  <el-table-column
    v-bind="$attrs"
    :prop="column.prop"
    :label="column.label"
    :type="column.type"
    :index="column.index"
    :column-key="column.columnKey"
    :width="column.width"
    :min-width="column.minWidth"
    :fixed="column.fixed"
    :sortable="column.sortable === false ? false : true"
    :sort-method="column.sortMethod"
    :sort-by="column.sortBy"
    :sort-orders="column.sortOrders"
    :resizable="column.resizable || true"
    :formatter="column.formatter"
    :show-overflow-tooltip="column.showOverflowTooltip || false"
    :align="column.align || align || 'center'"
    :header-align="
      column.headerAlign || headerAlign || column.align || align || 'center'
    "
    :class-name="column.className"
    :label-class-name="column.labelClassName"
    :selectable="column.selectable"
    :reserve-selection="column.reserveSelection || false"
    :filters="column.filters"
    :filter-placement="column.filterPlacement"
    :filter-multiple="column.filterMultiple"
    :filter-method="column.filterMethod"
    :filtered-value="column.filteredValue"
    v-on="$listeners"
  >
    <template slot="header" slot-scope="scope">
      <table-render v-if="column.renderHeader" :scope="scope" :render="column.renderHeader" />
      <span v-else>{{ scope.column.label }}</span>
    </template>

    <template slot-scope="scope">
      <table-render :scope="scope" :render="column.render" />
    </template>

    <template v-if="column.children">
      <table-column v-for="(col, index) in column.children" :key="index" :column="col" />
    </template>
  </el-table-column>
</template>

<script>
import TableRender from './TableRender'
import forced from './forced.js'
export default {
  name: 'TableColumn',
  components: {
    TableRender
  },
  props: {
    column: {
      type: Object,
      default: () => ({})
    },
    headerAlign: {
      type: String,
      default: 'center'
    },
    align: {
      type: String,
      default: 'center'
    }
  },
  watch: {
    column: {
      handler () {
        this.setColumn()
      },
      immediate: true
    }
  },
  methods: {
    setColumn () {
      if (this.column.type) {
        this.column.renderHeader = forced[this.column.type].renderHeader
        this.column.render =
          this.column.render || forced[this.column.type].renderCell
      }
      if (this.column.formatter) {
        this.column.render = (h, { column, row, $index }) => {
          return h('span', 
            column.formatter(
              row,
              column,
              row,
              $index
            ))
        }
      }
      if (!this.column.render) {
        this.column.render = (h, { row, column }) => {
          const { property } = column
          return h('span', row[property])
        }
      }
    }
  }
}
</script>
