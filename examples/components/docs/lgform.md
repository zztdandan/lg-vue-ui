<script>    
  export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('帐号不能为空'));
        } else if (value == '123') {
            return callback(new Error('帐号已注册'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        // alert(JSON.stringify(this.$refs.ruleForm.params['pass']));
        var temp = this.$refs.ruleForm.params['pass'];
        if (value !== temp) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        labelPosition: 'left',
        itemsData: [{
          itemType: 'input',
          prop: 'name',
          label: '活动名称'
        },{
          itemType: 'select',        
          prop: 'region',
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        },{
          itemType: 'datetime',        
          prop: 'dateTime',
          label: '活动时间',
          default: '2018-08-08 00:00:00',
          placeholder: '请选择日期时间'
        },{
          itemType: 'datetimerange',        
          prop: ['dateTimeStart', 'dateTimeEnd'],
          label: '时间范围',
          placeholder: '请选择时间范围'
        },{
          itemType: 'switch',        
          prop: 'delivery',
          label: '即时配送'
        },{
          itemType: 'checkbox',        
          prop: 'type',
          label: '活动性质',
          options: [{
            value: '1',
            label: '美食/餐厅线上活动'
          }, {
            value: '2',
            label: '地推活动'
          }, {
            value: '3',
            label: '线下主题活动'
          }, {
            value: '4',
            label: '单纯品牌曝光'
          }]
        },{
          itemType: 'radio',        
          prop: 'resource',
          label: '特殊资源',
          options: [{
            value: '1',
            label: '线上品牌商赞助'
          }, {
            value: '2',
            label: '线下场地免费'
          }]
        },{
          itemType: 'input',
          type: 'textarea',
          prop: 'desc',
          label: '活动形式'
        }],
        itemsInline: [{
          itemType: 'input',
          prop: 'user',
          label: '审批人'
        },{
          itemType: 'select',        
          prop: 'region',
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        }],
        itemsRule1: [{
          itemType: 'input',
          prop: 'name',
          rules:[          
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          label: '活动名称'
        },{
          itemType: 'select',        
          prop: 'region',
          rules:[
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        },{
          itemType: 'datetime',        
          prop: 'dateTime',
          rules:[
            { type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
          ],
          label: '活动时间',
          placeholder: '请选择日期时间'
        },{
          itemType: 'datetimerange',        
          prop: ['dateTimeStart', 'dateTimeEnd'],
          rules:[
            { required: true, message: '请选择时间范围', trigger: 'change' }
          ],
          label: '时间范围',
          placeholder: '请选择时间范围'
        },{
          itemType: 'switch',        
          prop: 'delivery',
          label: '即时配送'
        },{
          itemType: 'checkbox',        
          prop: 'type',
          rules: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          label: '活动性质',
          options: [{
            value: '1',
            label: '美食/餐厅线上活动'
          }, {
            value: '2',
            label: '地推活动'
          }, {
            value: '3',
            label: '线下主题活动'
          }, {
            value: '4',
            label: '单纯品牌曝光'
          }]
        },{
          itemType: 'radio',        
          prop: 'resource',
          rules: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          label: '特殊资源',
          options: [{
            value: '1',
            label: '线上品牌商赞助'
          }, {
            value: '2',
            label: '线下场地免费'
          }]
        },{
          itemType: 'input',
          type: 'textarea',
          prop: 'desc',
          rules: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          label: '活动形式'
        }],
        itemsRule2: [{
          itemType: 'input',
          prop: 'account',
          rules:[
            { validator: checkAccount, trigger: 'blur' }
          ],
          label: '帐号'
        },{
          itemType: 'input',
          type: "password",
          prop: 'pass',
          rules:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'change' }
          ],
          label: '密码'
        },{
          itemType: 'input',
          type: "password",
          prop: 'checkPass',
          rules:[
            { validator: validatePass, trigger: ['blur', 'change'] }
          ],
          label: '确认密码'
        }],
        itemsData2: [{
          itemType: 'input',
          prop: 'name',
          labelWidth: '150px',
          label: '活动名称'
        },{
          itemType: 'select',        
          prop: 'region',
          itemWidth: '150px',
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        },{
          itemType: 'datetime',        
          prop: 'dateTime',
          size: 'large',          
          label: '活动时间',
          default: '2018-08-08 00:00:00',
          placeholder: '请选择日期时间'
        },{
          itemType: 'datetimerange',        
          prop: ['dateTimeStart', 'dateTimeEnd'],
          label: '时间范围',
          placeholder: '请选择时间范围'
        },{
          itemType: 'radio',        
          prop: 'resource',
          label: '特殊资源',
          options: [{
            value: '1',
            label: '线上品牌商赞助'
          }, {
            value: '2',
            label: '线下场地免费'
          }]
        },{
          itemType: 'input',
          type: 'textarea',
          prop: 'desc',
          label: '活动形式'
        }]
      }
    },
    methods: {
      onSubmit(params) {
        // alert(JSON.stringify(params));
        console.log(params);
      }
    }
  }
</script>

<style lang="scss">
    .el-checkbox-group {
      width: 320px;
      margin: 0;
      padding: 0;
      list-style: none;

      &:after, &:before {
        content: ' ';
        display: table;
      }
      &:after {
        clear: both;
        visibility: hidden;
        font-size: 0;
        height: 0;
      }

      .el-checkbox {
        float: left;
        width: 160px;
        padding-right: 20px;
        margin: 0;
        padding: 0;

        + .el-checkbox {
          margin-left: 0;
        }
      }
    }
</style>

## Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据，二次封装的 `lg-form` 实现对 Form 表单的可配置化。

### 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

:::demo 在 Form 组件中，为 `form-items` 属性设置一个数组，用来配置多个 form item。其中 `form-items.itemType` 表示 from item 的类型，目前支持 9 种： input、 select、 switch、 radio、 checkbox、 date、 daterange、 datetime 和 datetimerange，默认是 input。对应的是 Element 中的输入框、选择器、开关、单选框、多选框、日期选择器、日期范围选择器、时间选择器、时间范围选择器。
```html
<el-radio-group v-model="labelPosition" size="small">
  <el-radio-button label="left">左对齐</el-radio-button>
  <el-radio-button label="right">右对齐</el-radio-button>
  <el-radio-button label="top">顶部对齐</el-radio-button>
</el-radio-group>
<div style="margin: 20px;"></div>

<lg-form :form-items='itemsData' :label-position='labelPosition' label-width="100px" item-width="350px" @submit="onSubmit"
submit-btn-text="立即创建" reset-btn-text="取消"></lg-form>

<script>
  export default {
    data() {
      return {
        labelPosition: 'left',
        itemsData: [{
          itemType: 'input',
          prop: 'name',
          label: '活动名称'
        },{
          itemType: 'select',        
          prop: 'region',
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        },{
          itemType: 'datetime',        
          prop: 'dateTime',
          label: '活动时间',
          default: '2018-08-08 00:00:00',
          placeholder: '请选择日期时间'
        },{
          itemType: 'datetimerange',        
          prop: ['dateTimeStart', 'dateTimeEnd'],
          label: '时间范围',
          placeholder: '请选择时间范围'
        },{
          itemType: 'switch',        
          prop: 'delivery',
          label: '即时配送'
        },{
          itemType: 'checkbox',        
          prop: 'type',
          label: '活动性质',
          options: [{
            value: '1',
            label: '美食/餐厅线上活动'
          }, {
            value: '2',
            label: '地推活动'
          }, {
            value: '3',
            label: '线下主题活动'
          }, {
            value: '4',
            label: '单纯品牌曝光'
          }]
        },{
          itemType: 'radio',        
          prop: 'resource',
          label: '特殊资源',
          options: [{
            value: '1',
            label: '线上品牌商赞助'
          }, {
            value: '2',
            label: '线下场地免费'
          }]
        },{
          itemType: 'input',
          type: 'textarea',
          prop: 'desc',
          label: '活动形式'
        }]
      }
    },
    methods: {
      onSubmit(params) {
        console.log(params);
      }
    }
  }
</script>
```
:::

### 行内表单

当垂直方向空间受限且表单较简单时，可以在一行内放置表单。

:::demo 设置 `inline` 属性可以让表单域变为行内的表单域
```html
<lg-form :form-items='itemsInline' :inline="true" @submit="onSubmit"
submit-btn-text="查询" :show-reset-btn="false"></lg-form>

<script>
  export default {
    data() {
      return {
        itemsInline: [{
          itemType: 'input',
          prop: 'user',
          label: '审批人'
        },{
          itemType: 'select',        
          prop: 'region',
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        }]
      }
    },
    methods: {
      onSubmit(params) {
        console.log(params);
      }
    }
  }
</script>
```
:::

### 表单验证

在防止用户犯错的前提下，尽可能让用户更早地发现并纠正错误。

:::demo Form 组件提供了表单验证的功能，通过 `form-items` 属性中的 `form-items.rules` 传入约定的验证规则即可。校验规则参见 [async-validator](https://github.com/yiminghe/async-validator)
```html
<lg-form :form-items='itemsRule1' label-width="100px" item-width="350px" @submit="onSubmit"
submit-btn-text="立即创建" reset-btn-text="取消"></lg-form>

<script>
  export default {
    data() {
      return {
        itemsRule1: [{
          itemType: 'input',
          prop: 'name',
          rules:[          
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          label: '活动名称'
        },{
          itemType: 'select',        
          prop: 'region',
          rules:[
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        },{
          itemType: 'datetime',        
          prop: 'dateTime',
          rules:[
            { type: 'date', required: true, message: '请选择日期时间', trigger: 'change' }
          ],
          label: '活动时间',
          placeholder: '请选择日期时间'
        },{
          itemType: 'datetimerange',        
          prop: ['dateTimeStart', 'dateTimeEnd'],
          rules:[
            { required: true, message: '请选择时间范围', trigger: 'change' }
          ],
          label: '时间范围',
          placeholder: '请选择时间范围'
        },{
          itemType: 'switch',        
          prop: 'delivery',
          label: '即时配送'
        },{
          itemType: 'checkbox',        
          prop: 'type',
          rules: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          label: '活动性质',
          options: [{
            value: '1',
            label: '美食/餐厅线上活动'
          }, {
            value: '2',
            label: '地推活动'
          }, {
            value: '3',
            label: '线下主题活动'
          }, {
            value: '4',
            label: '单纯品牌曝光'
          }]
        },{
          itemType: 'radio',        
          prop: 'resource',
          rules: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          label: '特殊资源',
          options: [{
            value: '1',
            label: '线上品牌商赞助'
          }, {
            value: '2',
            label: '线下场地免费'
          }]
        },{
          itemType: 'input',
          type: 'textarea',
          prop: 'desc',
          rules: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ],
          label: '活动形式'
        }]
      }
    },
    methods: {
      onSubmit(params) {
        console.log(params);
      }
    }
  }
</script>
```
:::

### 自定义校验规则

这个例子中展示了如何使用自定义验证规则来完成密码的二次验证。

:::demo 本例使用了 `ref` 属性获得了表单内所有数据集 `params`。
```html
<lg-form :form-items='itemsRule2' ref="ruleForm" label-width="100px" item-width="350px" @submit="onSubmit"
submit-btn-text="提交" reset-btn-text="重置"></lg-form>

<script>
  export default {
    data() {
      var checkAccount = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('帐号不能为空'));
        } else if (value == '123') {
            return callback(new Error('帐号已注册'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        var temp = this.$refs.ruleForm.params['pass'];
        if (value !== temp) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        itemsRule2: [{
          itemType: 'input',
          prop: 'account',
          rules:[
            { validator: checkAccount, trigger: 'blur' }
          ],
          label: '帐号'
        },{
          itemType: 'input',
          type: "password",
          prop: 'pass',
          rules:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'change' }
          ],
          label: '密码'
        },{
          itemType: 'input',
          type: "password",
          prop: 'checkPass',
          rules:[
            { validator: validatePass, trigger: ['blur', 'change'] }
          ],
          label: '确认密码'
        }]
      }
    },
    methods: {
      onSubmit(params) {
        console.log(params);
      }
    }
  }
</script>
```
:::

### 表单内组件尺寸控制

通过设置 Form 上的 `size`、 `label-width` 、 `item-width` 属性可以使该表单内所有可调节尺寸的组件继承该尺寸。通过 `form-items` 属性中的参数，也可以为某个表单项或表单组件设置自己的尺寸。

:::demo 如果希望某个表单项或某个表单组件的尺寸不同于 Form 上的`size` 、 `label-width` 、 `item-width` 属性，直接为这个表单项或表单组件设置自己的 `size` 、 `labelWidth` 、 `itemWidth` 参数即可。
```html
<lg-form :form-items='itemsData2' size="mini" label-position='left' item-width="350px" @submit="onSubmit"
submit-btn-text="立即创建" reset-btn-text="取消"></lg-form>

<script>
  export default {
    data() {
      return {
        itemsData2: [{
          itemType: 'input',
          prop: 'name',
          labelWidth: '150px',
          label: '活动名称'
        },{
          itemType: 'select',        
          prop: 'region',
          itemWidth: '150px',
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        },{
          itemType: 'datetime',        
          prop: 'dateTime',
          size: 'large',          
          label: '活动时间',
          default: '2018-08-08 00:00:00',
          placeholder: '请选择日期时间'
        },{
          itemType: 'datetimerange',        
          prop: ['dateTimeStart', 'dateTimeEnd'],
          label: '时间范围',
          placeholder: '请选择时间范围'
        },{
          itemType: 'radio',        
          prop: 'resource',
          label: '特殊资源',
          options: [{
            value: '1',
            label: '线上品牌商赞助'
          }, {
            value: '2',
            label: '线下场地免费'
          }]
        },{
          itemType: 'input',
          type: 'textarea',
          prop: 'desc',
          label: '活动形式'
        }]
      }
    },
    methods: {
      onSubmit(params) {
        console.log(params);
      }
    }
  }
</script>
```
:::

### Form 属性

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| form-items | Form 中各 item 配置参数 | array | — | — |
| inline | 行内表单模式 | boolean | — | false |
| label-position | 表单域标签的位置，如果值为 left 或者 right 时，则需要设置 `label-width` | string |  right/left/top | right |
| label-width | 用于控制该表单域 标签 的宽度 | string | — | — |
| item-width | 用于控制该表单域 操作组件 的宽度 | string | — | — |
| size  | 用于控制该表单内组件的大小 | string | large / medium / small / mini | large |
| disabled | 是否禁用该表单内的所有组件。若设置为 true，则表单内组件上的 disabled 属性不再生效 | boolean | — | false |
| submit-loading | 是否正在提交中状态 | boolean | — | false |
| submit-btn-text | submit按钮上显示的文本 | string | — | 查询 |
| show-reset-btn | 是否显示reset按钮 | boolean | — | true |
| reset-btn-text | reset按钮上显示的文本 | string | — | 重置 |
| btn-blank-width | submit按钮与reset按钮之间的间距 | string | — | — |
| search-handler | submit按钮与reset按钮之间的间距 | string | — | — |

### Form Events
| 事件名称 | 说明    | 回调参数  |
|--------- |-------- |---------- |
| submit | submit按钮点击后触发 | Form 根据校验规则去校验的表单项 prop 值，校验通过后返回表单项 prop 值 |

### form-items 属性共有参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| itemType | 需要自动生成的组件名 | string | input / select / switch / radio / checkbox / date / daterange / datetime | input |
| prop | 数据绑定字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 | string/array(日期和时间范围选择器传入array) | — | — |
| default | 默认值 | string/array | — | — |
| label | 标签文本 | string | — | — |
| labelWidth | 标签 的宽度，例如 '50px' | string |  — | — |
| itemWidth | 组件 的宽度 | string | — | — |
| rules | 表单验证规则 | object | — | — |
| size  | 组件的大小 | string | large / medium / small / mini | — |
| disabled | 是否禁用状态 | object | — | false |

### form-items 中 input特有参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| type | 生成input的类型 | string | text 、 textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| placeholder | 输入框占位文本 | string | — | — |
| readonly | 是否只读 | boolean | — | false |

### form-items 中 date 、 daterange 、 datetime 特有参数

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| placeholder | 输入框占位文本 | string | — | — |
| readonly | 是否只读 | boolean | — | false |
| editable | 文本框可输入 | boolean | — | true |
| picker-options | 当前时间日期选择器特有的选项,请参阅Element的说明 | object | — | {} |