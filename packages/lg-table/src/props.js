
let props = {
  // Element UI Table attributes
  height: [String, Number],
  maxHeight: [String, Number],
  size: String,
  stripe: Boolean,
  border: Boolean,
  fit: {
    type: Boolean,
    default: true
  },
  showHeader: {
    type: Boolean,
    default: true
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  highlightCurrentRow: Boolean,
  currentRowKey: [String, Number],
  rowClassName: [String, Function],
  rowStyle: [Object, Function],
  cellClassName: [String, Function],
  cellStyle: [Object, Function],
  headerRowClassName: [String, Function],
  headerRowStyle: [Object, Function],
  headerCellClassName: [String, Function],
  headerCellStyle: [Object, Function],
  rowKey: [String, Function],
  emptyText: String,
  defaultExpandAll: Boolean,
  expandRowKeys: Array,
  defaultSort: Object,
  tooltipEffect: String,
  showSummary: Boolean,
  sumText: String,
  summaryMethod: Function,
  spanMethod: Function,
  selectOnIndeterminate: Boolean,
  // custom attributes
  tableStyle: {
    type: String,
    default: 'width:100%;'
  },
  // table数据
  data: {
    type: Array
  },
  columns: {
    type: Array
  },
  showPagination: {
    type: Boolean,
    default: true
  },
  pageSizes: {
    type: Array,
    default: () => {
      return [10, 20, 50, 100];
    }
  },
  paginationLayout: {
    type: String,
    default: 'total, prev, pager, next, jumper, sizes'
  }
};

export default props;
