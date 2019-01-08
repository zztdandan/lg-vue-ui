<script>
export default{
    name:"lg-simple-table-md",
    data(){
      let auto_com_list=[{value:"炼铁",code:"BF"},{value:"焦化",code:"LJ"}];
        return{
            form_setting1:[
                {
                  type: "text",
                  id: "name",
                  value: "",
                  label: "姓名",
                  line: 1,
                  readonly: false
                },
                {
                  type: "select",
                  id: "sex",
                  value: "",
                  label: "性别",
                  line: 1,
                  value_list:[{value:"1",label:"男"},{value:"0",label:"女"}],
                  readonly: false
                },
                {
                  type: "button",
                  id: "sub",
                  label:"上传个人信息",
                  line: 1,
                  class: "button button-primary button-small button-rounded",  
                  emit: "btn1-click"
                },
              ],
            form_data1:{},
          form_setting2: [
          {
            type: "text",
            id: "name",
            value: "",
            label: "姓名",
            labelWidth:"5rem",
            line: 1,
            readonly: false
          },
          {
            type: "select",
            id: "sex",
            value: "",
            label: "性别",
            labelWidth:"5rem",
            line: 1,
            value_list: [
              { value: "1", label: "男" },
              { value: "0", label: "女" }
            ],
            readonly: false
          },
          {
            type: "check",
            id: "work",
            value: true,
            label: "是否工作",
            labelWidth:"5rem",
            line: 2,
            readonly: false
          },
          {
            type: "auto-com",
            id: "dept",
            value: {},
            label: "工作单位",
            labelWidth:"5rem",
            line: 3,
            full:true,
            value_list:auto_com_list,
            readonly: false
          },
        ],
         form_data2: {}
        }
    },
    methods:{
      handleCheck1:function(e){
          let that_vue=this;
            var showmessage = JSON.stringify(that_vue.form_data1);
        alert(showmessage);
      }
    },
    computed:{
      form2_output(){
        let a=JSON.stringify(this.form_data2);
        return a;
      }
    }
}
</script>

## LgBuildForm 表单生成控件

说明，该控件用于使用配置数组生成表单，配置的数组有一定规范要求，可以生成多行表单，若想使用更复杂的功能，请使用[Element 的表单控件](http://element-cn.eleme.io/#/zh-CN/component/form)

### 目前该控件支持的表单

+ 自动填充的下拉选项
+ 按钮
+ 单项 checkbox
+ 日期输入
+ 下拉选项
+ 文字输入

### 简单表单示例

下面将展示一个单行表单。在 build-form 控件中，只需要输入数组就能输出表单，不需要编写函数。sync_data.sync 这个参数代表，该参数是双向变化的。该参数是第一次输入时的初始化参数，也是表单数据改变后的反馈参数。该参数的值就是表单的集合。另外强调，对于某些要求比较强的 rest 后台服务，他们只接受 formdata 形式的 data 作为 post 的数据，而不能接受数组。此时需要我们设置一个 form-id，这样我们就能用formdata 的初始化命令来读取这个 id 值

::: demo 在这个表单中，我们传入一个空的初始化数据，以及一个数据设置数组`form_setting1`,通过引入控件`build-form`即渲染出了一个表格。注意数据设置中 button 中的 emit 项，该项表示的是点击这个按钮触发的事件的名称，这个名称我们在 build-form 单元中可以绑定，我们绑定到了 handlecheck1 事件。当点击按钮时，这个事件就可以被触发。此时结合 sync_data.sync 返回的数据，我们可以将表单数据弹出来

```html
<template>
  <lg-build-form
    :form_array="form_setting1"
    @btn1-click="handleCheck1"
    :sync_data.sync="form_data1"
    form-id="example1"
  />
</template>
<script>
  export default {
    data() {
      return {
        form_setting1: [
          {
            type: "text",
            id: "name",
            value: "",
            label: "姓名",
            line: 1,
            readonly: false
          },
          {
            type: "select",
            id: "sex",
            value: "",
            label: "性别",
            line: 1,
            value_list: [
              { value: "1", label: "男" },
              { value: "0", label: "女" }
            ],
            readonly: false
          },
          {
            type: "button",
            id: "sub",
            label: "上传个人信息",
            line: 1,
            class: "button button-primary button-small button-rounded",
            emit: "btn1-click"
          }
        ],
        form_data1: {}
      };
    },
    methods: {
      handleCheck1: function(e) {
        let that_vue = this;
        var showmessage = JSON.stringify(that_vue.form_data1);
        alert(showmessage);
      }
    }
  };
</script>
```
:::
### 多行表单示例
下面将展示，我们通过修改`form_setting2`中每一项的`line`，使得表单中的各项按照line的顺序排列。如果你觉得表单不能齐平，可以调整label-width属性
::: demo 在这个表单中我们将演示`lg-build-form`支持的各个控件，并赋予line值。注意，当页面宽度不够时，表单会自动换行。

```html
<template>
<div>
  <lg-build-form
    :form_array="form_setting2" :sync_data.sync="form_data2"  form-id="last_status"  />
  <!-- <p>表单内容输出</p>
  <p>{{form2_output}}</p> -->
  </div>
</template>
<script>
  export default {
    data() {
       let auto_com_list=[{value:"炼铁",code:"BF"},{value:"焦化",code:"LJ"}];
      return {
        form_setting2: [
          {
            type: "text",
            id: "name",
            value: "",
            label: "姓名",
            labelWidth:"5rem",
            line: 1,
            readonly: false
          },
          {
            type: "select",
            id: "sex",
            value: "",
            label: "性别",
            labelWidth:"5rem",
            line: 1,
            value_list: [
              { value: "1", label: "男" },
              { value: "0", label: "女" }
            ],
            readonly: false
          },
          {
            type: "check",
            id: "work",
            value: true,
            label: "是否工作",
            labelWidth:"5rem",
            line: 2,
            readonly: false
          },
          {
            type: "auto-com",
            id: "dept",
            value: {},
            label: "工作单位",
            labelWidth:"5rem",
            line: 3,
            full:true,
            value_list:auto_com_list,
            readonly: false
          },
        ],
         form_data2: {}
      };
    },
    methods: {

    },
    computed:{
      form2_output(){
        let a=JSON.stringify(this.form_data2);
        return a;
      }
    }
  };
</script>
```
:::
### 目前支持的控件配置说明

#### text-input配置


配置示例
```javascript
          {
            type: "text",
            id: "name",
            value: "",
            label: "姓名",
            labelWidth:"5rem",
            line: 1,
            readonly: false
          }
```
+ type：必填为text，否则不能渲染控件
+ id:必填项，该项为输出的对象中存储值的名字
+ value：必填项，默认为String，否则会报错
+ label：必填项，该项为这个输入框前面的文字
+ labelWidth：选填项，如果不填，则输入框前面的长度为label的字长度+1，如果计算出来的长度超过8，则Label会在输入框的上方
+ line：必填项，说明这个项在第几行。在渲染的时候，会以先后顺序渲染表单
+ readonly：必填项，确定该项是否只读。只读模式可用来展示数据

#### auto-com-input配置


配置示例
```javascript
          {
            type: "auto-com",
            id: "dept",
            value: {},
            label: "工作单位",
            labelWidth:"5rem",
            line: 3,
            full:true,
            value_list:[{value:"炼铁",code:"BF"},{value:"焦化",code:"LJ"}],
            readonly: false
          },
```
+ type：必填为auto-com，否则不能渲染控件
+ id:必填项，该项为输出的对象中存储值的名字
+ value：必填项，默认为Object，否则会报错
+ label：必填项，该项为这个输入框前面的文字
+ labelWidth：选填项，如果不填，则输入框前面的长度为label的字长度+1，如果计算出来的长度超过8，则Label会在输入框的上方
+ line：必填项，说明这个项在第几行。在渲染的时候，会以先后顺序渲染表单
+ readonly：必填项，确定该项是否只读。只读模式可用来展示数据
+ full:选填项，确定当光标在输入框时是否显示所有的项，否则只有输入一个字后才显示对应有名字的项
+ value_list：必填项，包含了所有选项的数列
+ value_list.value:必填，在选项数列中，每个对象都必须包含value属性，否则报错。该项的值即为选项的值。选择后保存的值为整个选项对象



#### button-input配置


配置示例
```javascript
          {
            type: "button",
            id: "sub",
            label: "上传个人信息",
            line: 1,
            class: "button button-primary button-small button-rounded",
            emit: "btn1-click"
          }
```
+ type：必填为button，否则不能渲染控件
+ id:必填项，该项为输出的对象中存储值的名字
+ value：不会读取该值
+ label：必填项，按钮上的文字
+ labelWidth：不必填写
+ line：必填项，说明这个项在第几行。在渲染的时候，会以先后顺序渲染表单
+ class: 该按钮的样式类型。如果不填会显示默认样式
+ emit：点击该按钮后的触发事件名称。这个事件可以是任意名字，所以表单内可以触发任意多的按钮

#### check-input配置


配置示例
```javascript
          {
            type: "check",
            id: "work",
            value: true,
            label: "是否工作",
            labelWidth:"5rem",
            line: 2,
            readonly: false
          },
```
+ type：必填为auto-com，否则不能渲染控件
+ id:必填项，该项为输出的对象中存储值的名字
+ value：必填项，默认为Boolean，否则会报错
+ label：必填项，该项为这个输入框前面的文字
+ labelWidth：选填项，如果不填，则输入框前面的长度为label的字长度+1，如果计算出来的长度超过8，则Label会在输入框的上方
+ line：必填项，说明这个项在第几行。在渲染的时候，会以先后顺序渲染表单
+ readonly：必填项，确定该项是否只读。只读模式可用来展示数据

#### check-input配置


配置示例
```javascript
          {
            type: "check",
            id: "work",
            value: true,
            label: "是否工作",
            labelWidth:"5rem",
            line: 2,
            readonly: false
          },
```
+ type：必填为auto-com，否则不能渲染控件
+ id:必填项，该项为输出的对象中存储值的名字
+ value：必填项，默认为Boolean，否则会报错
+ label：必填项，该项为这个输入框前面的文字
+ labelWidth：选填项，如果不填，则输入框前面的长度为label的字长度+1，如果计算出来的长度超过8，则Label会在输入框的上方
+ line：必填项，说明这个项在第几行。在渲染的时候，会以先后顺序渲染表单
+ readonly：必填项，确定该项是否只读。只读模式可用来展示数据


#### select-input配置


配置示例
```javascript
          {
            type: "select",
            id: "sex",
            value: "",
            label: "性别",
            line: 1,
            value_list: [
              { value: "1", label: "男" },
              { value: "0", label: "女" }
            ],
            readonly: false
          },
```
+ type：必填为auto-com，否则不能渲染控件
+ id:必填项，该项为输出的对象中存储值的名字
+ value：必填项，默认为Boolean，否则会报错
+ label：必填项，该项为这个输入框前面的文字
+ labelWidth：选填项，如果不填，则输入框前面的长度为label的字长度+1，如果计算出来的长度超过8，则Label会在输入框的上方
+ line：必填项，说明这个项在第几行。在渲染的时候，会以先后顺序渲染表单
+ readonly：必填项，确定该项是否只读。只读模式可用来展示数据
+ value_list:必填，选项数列，每个对象都必须包含value属性和label，否则报错。该项的值即为value的值，选项显示为label
