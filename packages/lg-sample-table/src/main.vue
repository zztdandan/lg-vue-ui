<template>
  <div class="lg-sample-table">
    <el-table v-loading.lock="loading"
      ref="table"
      :data="tableData"
      :border="border"
      :size="size"
      :stripe="stripe"
      :height="height"
      :max-height="maxHeight"
      :fit="fit"
      :show-header="showHeader"
      :highlight-current-row="highlightCurrentRow"
      :current-row-key="currentRowKey"
      :row-class-name="rowClassName"
      :row-style="rowStyle"
      :row-key="rowKey"
      :empty-text="emptyText"
      :default-expand-all="defaultExpandAll"
      :expand-row-keys="expandRowKeys"
      :default-sort="defaultSort"
      :tooltip-effect="tooltipEffect"
      :show-summary="showSummary"
      :sum-text="sumText"
      :summary-method="summaryMethod"
      :style="tableStyle"
      @select="(selection, row) => emitEventHandler('select', selection, row)"
      @select-all="selection => emitEventHandler('select-all', selection)"
      @selection-change="selection => emitEventHandler('selection-change', selection)"
      @cell-mouse-enter="(row, column, cell, event) => emitEventHandler('cell-mouse-enter', row, column, cell, event)"
      @cell-mouse-leave="(row, column, cell, event) => emitEventHandler('cell-mouse-leave', row, column, cell, event)"
      @cell-click="(row, column, cell, event) => emitEventHandler('cell-click', row, column, cell, event)"
      @cell-dblclick="(row, column, cell, event) => emitEventHandler('cell-dblclick', row, column, cell, event)"
      @row-click="(row, event, column) => emitEventHandler('row-click', row, event, column)"
      @row-dblclick="(row, event) => emitEventHandler('row-dblclick', row, event)"
      @row-contextmenu="(row, event) => emitEventHandler('row-contextmenu', row, event)"
      @header-click="(column, event) => emitEventHandler('header-click', column, event)"
      @sort-change="args => emitEventHandler('sort-change', args)"
      @filter-change="filters => emitEventHandler('filter-change', filters)"
      @current-change="(currentRow, oldCurrentRow) => emitEventHandler('current-change', currentRow, oldCurrentRow)"
      @header-dragend="(newWidth, oldWidth, column, event) => emitEventHandler('header-dragend', newWidth, oldWidth, column, event)"
      @expand-change="(row, expanded) => emitEventHandler('expand-change', row, expanded)">

      <slot name="prepend"/>
      
      <el-table-column type="index" width="45"></el-table-column>
      <el-table-column v-if="showCheckbox" type="selection" width="50">
      </el-table-column>
      <el-table-column
        v-for="(column, columnIndex) in colData" :key="columnIndex"
        :column-key="column.columnKey"
        :prop="column.prop"
        :label="column.label"
        :width="column.width"
        :minWidth="column.minWidth || column.width || 100"
        :fixed="column.fixed"
        :render-header="column.renderHeader"
        :sortable="column.sortable"
        :sort-by="column.sortBy"
        :sort-method="column.method"
        :resizable="column.resizable"
        :formatter="column.formatter"
        :show-overflow-tooltip="column.showOverflowTooltip"
        :align="column.align"
        :header-align="column.headerAlign || column.align"
        :class-name="column.className"
        :label-class-name="column.labelClassName"
        :selectable="column.selectable"
        :reserve-selection="column.reserveSelection"
        :filters="column.filters"
        :filter-placement="column.filterPlacement"
        :filter-multiple="column.filterMultiple"
        :filter-method="column.filterMethod"
        :filtered-value="column.filteredValue">
      </el-table-column>
 
      <slot name="append"/>
      
    </el-table>

    <div v-if="showPagination"
      style="margin-top: 10px;text-align: right;">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pagination.pageIndex"
        :page-sizes="pageSizes"
        :page-size="pagination.pageSize"
        :layout="paginationLayout"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import props from './props';

export default {
  name: 'LgSampleTable',
  props,
  data() {
    const _this = this;
    return {
      Vue,
      pagination: {
        pageIndex: 1,
        pageSize: (() => {
          const { pageSizes } = _this;
          if (pageSizes.length > 0) {
            return pageSizes[0];
          }
          return 20;
        })()
      },
      total: 0,
      loading: false,
      colData: [],
      tableData: [],
      cacheLocalData: []
    };
  },
  computed: {
    newSlotScope() {
      return Number(Vue.version.replace(/\./g, '')) >= 250;
    }
  },
  methods: {
    handleSizeChange(size) {
      this.pagination.pageSize = size;
      this.dataFilterHandler();
    },
    handleCurrentChange(pageIndex) {
      this.pagination.pageIndex = pageIndex;
      this.dataFilterHandler();
    },
    dataFilterHandler() {
      const { cacheLocalData, pagination, showPagination } = this;
      const { pageIndex, pageSize } = pagination;

      this.total = cacheLocalData.length;
      // 是否分页显示
      if (showPagination) {
        this.tableData = cacheLocalData.filter((v, i) => {
          return i >= (pageIndex - 1) * pageSize && i < pageIndex * pageSize;
        });
      } else {
        this.tableData = cacheLocalData;
      }
    },
    emitEventHandler(event) {
      this.$emit(event, ...Array.from(arguments).slice(1));
    },
    loadLocalData(data) {
      const { columns } = this;
      if (columns && columns.length > 0) {
        this.colData = columns;
      } else {
        if (data.length > 0) {
          let tHeader = Object.keys(data[0]);
          if (this.colData.length > 0) {
            // 清除数据
            this.colData.length = 0;
          }
          tHeader.forEach((v, i) => {
            this.colData.push({
              'label': v,
              'prop': v
            });
          });
        }
      }
      if (!data) {
        this.cacheLocalData = [];
        // throw new Error('When the type is \'local\', you must set attribute \'data\' and \'data\' must be a array.');
      } else {
        this.cacheLocalData = JSON.parse(JSON.stringify(data));
      }
      this.dataFilterHandler();
    }
  },
  mounted() {
    // Element v2.x 之后 `expand`事件变为 `expand-change`（向下兼容）
    this.$refs['table'].$on('expand', (row, expanded) => this.emitEventHandler('expand', row, expanded));
    const { data } = this;
    this.loadLocalData(data);
  },
  watch: {
    // 监听props中data变化
    data: function(value) {
      this.loadLocalData(value);
    }
  }
};
</script>

<style>

</style>
