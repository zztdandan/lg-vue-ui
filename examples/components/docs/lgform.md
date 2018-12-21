<script>
  export default {
    data() {
      return {
        itemsData: [{
          type: 'input',
          prop: 'name',
          label: '活动名称'
        },
        {
          type: 'select',        
          prop: 'region',
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        },
        {
          type: 'datetime',        
          prop: 'datetime',
          label: '活动时间',
          placeholder: '请选择日期时间'
        },
        {
          type: 'switch',        
          prop: 'delivery',
          label: '即时配送'
        },
        {
          type: 'checkbox',        
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
          },
          {
            type: 'radio',        
            prop: 'radio',
            label: '单选',
            options: [{
              value: '1',
              label: '选1'
            }, {
              value: '2',
              label: '选2'
            }, {
              value: '3',
              label: '选3'
            }]
          }]
        }]
      }
    },
    methods: {
    }
  }
</script>

## Form 表单

由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据，二次封装的 `lg-form` 实现对 Form 表单的可配置化。

### 典型表单

包括各种表单项，比如输入框、选择器、开关、单选框、多选框等。

:::demo 在 Form 组件中，为 `form-items` 属性设置一个数组，用来配置多个 form item。其中 `form-items.type` 表示 from item 的类型，目前支持 9 种： input、 select、 switch、 radio、 checkbox、 date、 daterange、 datetime 和 datetimerange，默认是 input。对应的是 Element 中的输入框、选择器、开关、单选框、多选框、日期选择器、日期范围选择器、时间选择器、时间范围选择器。
```html
<lg-form :form-items='itemsData' label-position='left' label-width="100px"item-width="350px"></lg-form>
<script>
  export default {
    data() {
      return {
        itemsData: [{
          type: 'input',
          prop: 'name',
          label: '活动名称'
        },
        {
          type: 'select',        
          prop: 'region',
          label: '活动区域',
          options: [{
            value: 'shanghai',
            label: '区域一'
          }, {
            value: 'beijing',
            label: '区域二'
          }]
        },
        {
          type: 'datetime',        
          prop: 'datetime',
          label: '活动时间',
          placeholder: '请选择日期时间'
        },
        {
          type: 'switch',        
          prop: 'delivery',
          label: '即时配送'
        },
        {
          type: 'checkbox',        
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
        }]
      }
    },
    methods: {

    }
  }
</script>
```
:::