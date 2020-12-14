<template>
  <div ref="pageTable" class="yx-page-table">
    <el-table
      ref="elTable"
      v-loading="loading"
      v-bind="$attrs"
      :data="data"
      :cell-style="cellStyle"
      :span-method="merge ? mergeMethod : spanMethod"
      :row-class-name="tableRowClassName"
      :cell-class-name="cellClassName"
      v-on="$listeners"
    >
      <table-column v-for="(item, index) in column" :key="index" v-bind="$attrs" :column="item" />
    </el-table>
    <el-pagination
      v-if="pagination"
      class="page-table-pagination"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page.sync="currentPage1"
      :page-sizes="[20, 30, 50]"
      v-bind="$attrs"
      :style="{
        'padding-top': paginationTop,
        'padding-bottom': paginationBottom,
        'text-align': paginationAlign,
        'background': '#ffffff'
      }"
      v-on="$listeners"
      @current-change="paginationCurrentChange"
    />
  </div>
</template>
<script>
import TableColumn from './TableColumn'
export default {
  name: 'YxPageTable',
  components: {
    TableColumn
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    column: {
      type: Array,
      default: () => []
    },
    data: {
      type: Array,
      default: () => []
    },
    spanMethod: {
      type: Function,
      default: () => {}
    },
    pagination: {
      type: Boolean,
      default: false
    },
    paginationTop: {
      type: String,
      default: '10px'
    },
    paginationBottom: {
      type: String,
      default: '0'
    },
    paginationAlign: {
      type: String,
      default: 'right'
    },
    currentPage: {
      type: Number,
      default: 1
    },
    merge: {
      type: Array,
      default: () => []
    },
    listenHeight: {
      type: Boolean,
      default: true
    },
    cellStyle: {
      type: Object,
      default: () => {
        return {
          padding: '5px 0'
        }
      }
    },
    tableRowClassName: {
      type: Function,
      default: () => {}
    },
    cellClassName: {
      type: Function,
      default: () => {}
    }
  },
  data () {
    return {
      mergeLine: {},
      mergeIndex: {},
      tableHeight: undefined
    }
  },
  computed: {
    dataLength () {
      if (this.data) {
        return this.data.length
      } else {
        return 0
      }
    },
    currentPage1: {
      get () {
        return this.currentPage
      },
      set (val) {
        this.$emit('update:currentPage', val)
      }
    }
  },
  watch: {
    merge () {
      this.getMergeArr(this.data, this.merge)
    },
    dataLength () {
      this.getMergeArr(this.data, this.merge)
    }
  },
  created () {
    this.getMergeArr(this.data, this.merge)
  },
  mounted () {
    if (this.listenHeight) {
      // 得到表格的高度
      this.getTableHeight()
      // 监听页面大小改变
      window.addEventListener('resize', () => {
        // 得到表格的高度
        this.getTableHeight()
      })
    }
  },
  methods: {
    clearSelection () {
      this.$refs.elTable.clearSelection()
    },
    toggleRowSelection (row, selected) {
      this.$refs.elTable.toggleRowSelection(row, selected)
    },
    toggleAllSelection () {
      this.$refs.elTable.toggleAllSelection()
    },
    toggleRowExpansion (row, expanded) {
      this.$refs.elTable.toggleRowExpansion(row, expanded)
    },
    setCurrentRow (row) {
      this.$refs.elTable.setCurrentRow(row)
    },
    clearSort () {
      this.$refs.elTable.clearSort()
    },
    clearFilter (columnKey) {
      this.$refs.elTable.clearFilter(columnKey)
    },
    doLayout () {
      this.$refs.elTable.doLayout()
    },
    sort (prop, order) {
      this.$refs.elTable.sort(prop, order)
    },
    paginationCurrentChange (val) {
      this.$emit('p-current-change', val)
    },
    getMergeArr (tableData, merge) {
      if (!merge) return
      this.mergeLine = {}
      this.mergeIndex = {}
      merge.forEach((item, k) => {
        tableData.forEach((data, i) => {
          if (i === 0) {
            this.mergeIndex[item] = this.mergeIndex[item] || []
            this.mergeIndex[item].push(1)
            this.mergeLine[item] = 0
          } else {
            if (data[item] === tableData[i - 1][item]) {
              this.mergeIndex[item][this.mergeLine[item]] += 1
              this.mergeIndex[item].push(0)
            } else {
              this.mergeIndex[item].push(1)
              this.mergeLine[item] = i
            }
          }
        })
      })
    },
    mergeMethod ({ row, column, rowIndex, columnIndex }) {
      const index = this.merge.indexOf(column.property)
      if (index > -1) {
        const _row = this.mergeIndex[this.merge[index]][rowIndex]
        const _col = _row > 0 ? 1 : 0
        return {
          rowspan: _row,
          colspan: _col
        }
      }
    },
    getTableHeight () {
      // 当表格存在的时候才执行操作
      if (document.getElementsByClassName('el-table').length === 0) {
        return
      }
      const elTable = document.getElementsByClassName('el-table')[0]
      const tableOffsetT = elTable.getBoundingClientRect().top
      const boxH = document.body.clientHeight
      this.$nextTick(() => {
        this.tableHeight = boxH - tableOffsetT - 70
      })
    }
  }
}
</script>
