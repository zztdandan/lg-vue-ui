
<template>
  <div class="lg-simple-table">
    <el-table :data="shownData" highlight-current-row @current-change="handleSelect">
      <el-table-column v-for="item in shown_col" :key="item.prop" :prop="item.prop" :label="item.label" />
      <el-table-column v-if="hasAddon" fixed="right" :width="addonWidth" label="更多">
        <template slot-scope="scope">
          <slot name="addon" :data="scope.row">

          </slot>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination :page-size="this.pagesize" :pager-count="5" :current-page.sync="page_count" layout="prev, pager, next" :total="this.data_count">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import linqjs from "linqjs";
  export default {
    name: "lg-simple-table",
    props: {
      init_data: {
        type: Array,
        default: function() {
          return new Array();
        }
      },
      init_column: {
        type: Array,
        default: function() {
          return new Array();
        }
      },
      init_pagesize: {
        type: Number,
        default: 20
      }
    },
    data: function() {
      let tmpcolumn = this.init_column;
      return {
        pagesize: this.init_pagesize,
        columnData: tmpcolumn,
        // TableData: this.init_data,
        page_count: 1
      };
    },
    mounted: function() {
      let that_vue = this;
      // 如果没有输入column
      // 自动创建column
      if (that_vue.init_data != [] && that_vue.init_column.length == 0) {
        let row0 = that_vue.init_data[0];
        that_vue.columnData = new Array();
        for (let key in row0) {
          let column_prop = { prop: key, label: key };
          that_vue.columnData.push(column_prop);
        }
      } else {
        that_vue.columnData = that_vue.init_column;
      }
    },
    computed: {
      data_count() {
        return this.init_data.length;
      },
      shownData() {
        let that_vue = this;
        let showtable = that_vue.init_data
          .skip(that_vue.pagesize * (that_vue.page_count - 1))
          .take(that_vue.pagesize);
        return showtable;
      },
      hasAddon() {
        let a = this.columnData.where(x => x.prop == "addon");
        return a.length > 0;
      },
      //更多列的宽度
      addonWidth() {
        if (this.hasAddon) {
          let a = this.columnData.where(x => x.prop == "addon").first();
          if (a.width) {
            return a.width;
          }
        }
        return 50;
      },
      shown_col() {
        let that_vue = this;
        let tmpcolumn = JSON.parse(JSON.stringify(that_vue.columnData));
        if (this.hasAddon) {
          let a = tmpcolumn.where(x => x.prop == "addon").first();
          tmpcolumn.remove(a);
        }
        return tmpcolumn;
      }
    },
    watch: {
      init_column(newval, oldva) {
        console.log("change detected");
        this.columnData = newval;
      }
    },
    methods: {
      //修改单页显示数目的函数
      changePagesize(size) {
        this.pagesize = size;
      },

      //修改显示的数据
      changeData(data) {
        this.TableData = data;
      },
      handleSelect(currentRow) {
        console.log("选择新列");
        this.$emit("select_row", currentRow);
      }
    }
  };
</script>

<style scoped>
</style>