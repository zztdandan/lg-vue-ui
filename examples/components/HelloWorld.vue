<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <button-demo></button-demo>
    <!--lg-form :forms='formData' :submitHandler="submit" labelPosition='left' :showResetBtn='true' :labelWidth=100 :itemWidth=400 :btnBlank=50 :disabled='false' :asterisk='false'></lg-form-->
    <lg-form-table :form-options="formObj"></lg-form-table>
    <lg-export-excel :data="list"></lg-export-excel>
    <lg-import-excel></lg-import-excel>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    let formData = [{
      itemType: 'input',        
      prop: 'email',
      label: '邮箱',
      size: 'small',
      rules:[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
      ],
      default: '123'
    },
    {
      itemType: 'select',        
      prop: 'status',
      label: '状态',
      size: 'small',
      options: [{
        value: '1',
        label: '选1'
      }, {
        value: '2',
        label: '选2'
      }, {
        value: '3',
        label: '选3'
      }],
      default: '1'
    },
    {
      itemType: 'switch',        
      prop: 'switch',
      label: '已婚',
      default: false
    },
    {
      itemType: 'radio',        
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
      }],
      default: '1'
    },
    {
      itemType: 'checkbox',        
      prop: 'checkbox',
      label: '多选',
      options: [{
        value: '1',
        label: '选1'
      }, {
        value: '2',
        label: '选2'
      }, {
        value: '3',
        label: '选3'
      }],
      default: ['1']
    },
    {
      itemType: 'date',        
      prop: 'date',
      label: '日期',
      size: 'small',
      editable: false,
      default: '2018-11-08',
      placeholder: '请选择日期'
    },
    {
      itemType: 'datetime',        
      prop: 'datetime',
      label: '时间',
      size: 'small',
      editable: false,
      default: '2018-11-08 00:00:00',
      placeholder: '请选择时间'
    },
    {
      itemType: 'daterange',        
      prop: ['dateStart', 'dateEnd'],
      label: '日期范围',
      size: 'small',
      editable: false,
      default: ['2018-11-08', '2018-11-09'],
      placeholder: '请选择日期范围'
    },
    {
      itemType: 'datetimerange',        
      prop: ['dateTimeStart', 'dateTimeEnd'],
      label: '时间范围',
      size: 'small',
      editable: false,
      default: ['2018-11-08 00:00:00', '2018-11-09 00:00:00'],
      placeholder: '请选择时间范围'
    }];
    let formObj = {'forms':formData, 'labelWidth':80, 'itemWidth':350, 'labelPosition':'left', 'inline':true};
    return {
      flag: false,
      msg: 'Welcome to Your Vue.js App',
      formObj,
      formData,
      list: [{
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-03'          
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-02'          
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-04'          
        }, {
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          date: '2016-05-01'          
        }]
    };
  },
  methods: {
    submit(params) {
      console.log(params);
      params.url = '1234';
      console.log(this.formData);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
