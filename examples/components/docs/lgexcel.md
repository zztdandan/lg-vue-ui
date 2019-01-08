<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        headerData: ['日期', '名字', '地址']
      }
    },
    methods: {
      onSuccess(val) {
        console.log(val.header);
        console.log(val.data);
      }
    }
  };
</script>

<style>

</style>

## Excel 导入/导出

用于导入Excel数据或导出Excel数据。

### Excel 导入

展示导入Excel的用法。

:::demo 组件对导入的Excel文件分别提取出表头及数据，默认第一行作为表头。 `lg-import-excel` 提供 `on-success` 属性绑定数据处理方法。
```html
<lg-import-excel :on-success="onSuccess"></lg-import-excel>

<script>
  export default {
    data() {
      return {

      }
    },
    methods: {
      onSuccess(val) {
        console.log(val.header);
        console.log(val.data);
      }
    };
</script>

```
:::

### 基础的Excel 导出

展示最简单的导出Excel用法。

:::demo 最简单的Excel导出就是把Table的数据绑定到导出组件 `lg-export-excel` 的 `data` 属性上。
```html
<lg-table :data="tableData"></lg-table>
<lg-export-excel :data="tableData"></lg-export-excel>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods: {

    };
</script>
```
:::

### 自定义表头导出

:::demo `lg-export-excel` 提供 `header` 属性接收数组对象，生成自定义表头。
```html
<lg-table :data="tableData"></lg-table>
<lg-export-excel :data="tableData" :header="headerData"></lg-export-excel>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        headerData: ['日期', '名字', '地址']
      }
    },
    methods: {

    };
</script>
```
:::

### lg-import-excel 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| text | 按钮文本 | string | — | 导入excel |
| type | 类型 | string | primary / success / warning / danger / info / text | — |
| size | 尺寸 | string |  large / medium / small / mini | large |
| on-success | 自定义数据的处理方法 | Function({ header, data }) | — | — |

### lg-export-excel 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| header | 自定义导出的表头 | array | — | — |
| data | 导出的数据 | array | — | — |
| text | 按钮文本 | string | — | 导入excel |
| type | 类型 | string | primary / success / warning / danger / info / text | — |
| size | 尺寸 | string |  large / medium / small / mini | large |