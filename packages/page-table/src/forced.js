export default {
  selection: {
    renderHeader: (h, { store }) => {
      const { states, toggleAllSelection } = store
      const { data, selection, isAllSelected } = states
      return h('el-checkbox', {
        props: {
          disabled: data && data.length === 0,
          indeterminate: selection.length > 0 && !isAllSelected,
          value: isAllSelected
        },
        nativeOn: {
          click: toggleAllSelection
        }
      })
    },
    renderCell: (h, { row, column, store, $index }) => {
      return h('el-checkbox', {
        props: {
          disabled: column.selectable ? !column.selectable.call(null, row, $index) : false,
          value: store.isSelected(row)
        },
        nativeOn: {
          click: ev => ev.stopPropagation()
        },
        on: {
          input: () => store.commit('rowSelectedChanged', row)
        }
      })
    },
    sortable: false,
    resizable: false
  },
  index: {
    renderHeader: (h, { column }) => {
      return h('span', column.label || '#')
    },
    renderCell: (h, { $index, column }) => {
      let i = $index + 1
      const index = column.index

      if (typeof index === 'number') {
        i = $index + index
      } else if (typeof index === 'function') {
        i = index($index)
      }

      return h('div', i)
    },
    sortable: false
  },
  expand: {
    renderHeader: (h, { column }) => {
      return h('span', column.label || '#')
    },
    renderCell: (h, { row, store }, proxy) => {
      const expanded = store.states.expandRows.indexOf(row) > -1
      return h('div', {
        class: {
          'el-table__expand-icon': true,
          'el-table__expand-icon--expanded': expanded
        },
        nativeOn: {
          click: e => proxy.handleExpandClick(row, e)
        }
      }, [h('i', {
        class: {
          'el-icon': true,
          'el-icon-arrow-right': true
        }
      })])
    },
    sortable: false,
    resizable: false,
    className: 'el-table__expand-column'
  }
}
