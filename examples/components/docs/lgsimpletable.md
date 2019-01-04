<script>
export default{
    name:"lg-simple-table-md",
data(){
    return{
        simple_data:[
            {"属性名称":"用户名","数值":"张三"},
             {"属性名称":"年龄","数值":"25"},
              {"属性名称":"性别","数值":"男"},
               {"属性名称":"电话","数值":"13888888888"}
        ],
        real_colmun:
        [
          { prop: "REAL_TIME", label: "时间" },
          { prop: "PROC_NAME", label: "二级单位" },
          { prop: "AREA_NAME", label: "区域" },
          { prop: "PROP", label: "仪表代号" },
          { prop: "PROP_CNAME", label: "仪表名称" },
          { prop: "VALUE", label: "数值" },
          { prop: "addon", label: "其他" }
        ],
        RealdataList:
        [
            {
                "PROC_NO": "BF",
                "PROP": "1ATRT润滑油站",
                "PROP_CNAME": "1ATRT润滑油站",
                "REAL_TIME": "2018-06-29T09:10:17",
                "VALUE": 9,
                "LAWGROUP_NAME": "默认规则组",
                "PROC_NAME": "炼铁",
                "AREA_NAME": "炼铁区域"
            },
            {
                "PROC_NO": "BF",
                "PROP": "1ATRT透平级平台北面",
                "PROP_CNAME": "1ATRT透平级平台北面",
                "REAL_TIME": "2018-06-29T09:10:17",
                "VALUE": 17.15,
                "LAWGROUP_NAME": "默认规则组",
                "PROC_NAME": "炼铁",
                "AREA_NAME": "炼铁区域"
            },
            {
                "PROC_NO": "BF",
                "PROP": "1ATRT透平级平台东面",
                "PROP_CNAME": "1ATRT透平级平台东面",
                "REAL_TIME": "2018-06-29T09:10:17",
                "VALUE": 0,
                "LAWGROUP_NAME": "默认规则组",
                "PROC_NAME": "炼铁",
                "AREA_NAME": "炼铁区域"
            },
            {
                "PROC_NO": "BF",
                "PROP": "1BTRT3楼平台东",
                "PROP_CNAME": "1BTRT3楼平台东",
                "REAL_TIME": "2018-11-16T00:00:01",
                "VALUE": 18.37,
                "LAWGROUP_NAME": "默认规则组",
                "PROC_NAME": "炼铁",
                "AREA_NAME": "炼铁区域"
            },
            {
                "PROC_NO": "BF",
                "PROP": "1BTRT3楼平台西",
                "PROP_CNAME": "1BTRT3楼平台西",
                "REAL_TIME": "2018-11-16T00:00:01",
                "VALUE": 27.16,
                "LAWGROUP_NAME": "默认规则组",
                "PROC_NAME": "炼铁",
                "AREA_NAME": "炼铁区域"
            },
            {
                "PROC_NO": "BF",
                "PROP": "1BTRT出口插板阀东",
                "PROP_CNAME": "1BTRT出口插板阀东",
                "REAL_TIME": "2018-11-16T00:00:01",
                "VALUE": 25.48,
                "LAWGROUP_NAME": "默认规则组",
                "PROC_NAME": "炼铁",
                "AREA_NAME": "炼铁区域"
            },
            {
                "PROC_NO": "BF",
                "PROP": "1BTRT进口插板阀西",
                "PROP_CNAME": "1BTRT进口插板阀西",
                "REAL_TIME": "2018-11-16T00:00:01",
                "VALUE": 5.95,
                "LAWGROUP_NAME": "默认规则组",
                "PROC_NAME": "炼铁",
                "AREA_NAME": "炼铁区域"
            },
        ]
    }
},
methods:{
    handleStatusDetail(data){
        alert(JSON.stringify(data));
    }
}
}
</script>

## LgSimpleTable 简单表格

说明：该控件用于使用简单的两个对象生成一个表格。如果需要复杂的功能，请使用 [Element 的表格控件](http://element-cn.eleme.io/#/zh-CN/component/table)。


### 最简配置

输入一个数组，直接生成表格。其中数组中属性的名字就是表格头部的列名（js 里面是支持中文属性名的）。可用于简单的表格或表单展示

::: demo 用户信息表

```html
<template>
    <lg-simple-table :init_data="simple_data" />
</template>
<script>
  export default{
  data(){
      return{
          simple_data:[
            {"名称":"用户名","数值":"张三"},
            {"名称":"年龄","数值":"25"},
            {"名称":"性别","数值":"男"},
            {"名称":"电话","数值":"13888888888"}
          ]
      }
  }
</script>
```
:::

### 进阶应用
该控件还有其他接口，可生成一个较为有用的表格，但是缺少多选功能。
下面一个展示将使用该控件的所有接口。包括addon、init_column、pagesize及固定函数名称用法。
该控件是支持实时数据及实时表头的，更详细的演示可以参照刚刚上线的[煤气监测系统页面(使用自己的安全账号登陆)](http://172.16.4.144:8081/#/real_digital)

::: demo 我们可以在输入数据Array`init_column`里面添加一个特殊的元素：`{prop:"addon",label:"更多"}`。当我们添加这个元素时，该表单控件会开放一个特殊的slot接口：`addon`。我们可以在这个接口内添加按钮等元素。这也意味着，如果你不想使用这个slot接口，那么你的init_column中不能包含拥有这个元素prop名称`addon`的项，包括你的输入数据`init_data`中，如果有名字为`prop`的项，那么该项将不会出现在表格中。这个addon 的slot接口会输出数据`scope.data`，这个数据就是你输入的数据中该行的数据。下面的演示中，将会展示一个按钮在addon行中，点击则alert该行的数据
```html
<template>
    <lg-simple-table style="margin-top:1rem;" :init_data="RealdataList" :init_column="real_colmun" :init_pagesize="3" >
            <template slot="addon" slot-scope="scope">
                <a @click="handleStatusDetail(scope.data)">
                    点击
                </a>
            </template>
    </lg-simple-table>
</template>
<script>
  export default{
  data(){
      return{
            status_colomun:
                [
                    { prop: "REAL_TIME", label: "时间" },
                    { prop: "PROC_NAME", label: "二级单位" },
                    { prop: "AREA_NAME", label: "区域" },
                    { prop: "PROP", label: "仪表代号" },
                    { prop: "PROP_CNAME", label: "仪表名称" },
                    { prop: "VALUE", label: "数值" },
                    { prop: "addon", label: "其他" }
                ],
            RealdataList:
                [
                    {
                        "PROC_NO": "BF",
                        "PROP": "1ATRT润滑油站",
                        "PROP_CNAME": "1ATRT润滑油站",
                        "REAL_TIME": "2018-06-29T09:10:17",
                        "VALUE": 9,
                        "LAWGROUP_NAME": "默认规则组",
                        "PROC_NAME": "炼铁",
                        "AREA_NAME": "炼铁区域"
                    },
                    {
                        "PROC_NO": "BF",
                        "PROP": "1ATRT透平级平台北面",
                        "PROP_CNAME": "1ATRT透平级平台北面",
                        "REAL_TIME": "2018-06-29T09:10:17",
                        "VALUE": 17.15,
                        "LAWGROUP_NAME": "默认规则组",
                        "PROC_NAME": "炼铁",
                        "AREA_NAME": "炼铁区域"
                    },
                    {
                        "PROC_NO": "BF",
                        "PROP": "1ATRT透平级平台东面",
                        "PROP_CNAME": "1ATRT透平级平台东面",
                        "REAL_TIME": "2018-06-29T09:10:17",
                        "VALUE": 0,
                        "LAWGROUP_NAME": "默认规则组",
                        "PROC_NAME": "炼铁",
                        "AREA_NAME": "炼铁区域"
                    },
                    {
                        "PROC_NO": "BF",
                        "PROP": "1BTRT3楼平台东",
                        "PROP_CNAME": "1BTRT3楼平台东",
                        "REAL_TIME": "2018-11-16T00:00:01",
                        "VALUE": 18.37,
                        "LAWGROUP_NAME": "默认规则组",
                        "PROC_NAME": "炼铁",
                        "AREA_NAME": "炼铁区域"
                    },
                    {
                        "PROC_NO": "BF",
                        "PROP": "1BTRT3楼平台西",
                        "PROP_CNAME": "1BTRT3楼平台西",
                        "REAL_TIME": "2018-11-16T00:00:01",
                        "VALUE": 27.16,
                        "LAWGROUP_NAME": "默认规则组",
                        "PROC_NAME": "炼铁",
                        "AREA_NAME": "炼铁区域"
                    },
                    {
                        "PROC_NO": "BF",
                        "PROP": "1BTRT出口插板阀东",
                        "PROP_CNAME": "1BTRT出口插板阀东",
                        "REAL_TIME": "2018-11-16T00:00:01",
                        "VALUE": 25.48,
                        "LAWGROUP_NAME": "默认规则组",
                        "PROC_NAME": "炼铁",
                        "AREA_NAME": "炼铁区域"
                    },
                    {
                        "PROC_NO": "BF",
                        "PROP": "1BTRT进口插板阀西",
                        "PROP_CNAME": "1BTRT进口插板阀西",
                        "REAL_TIME": "2018-11-16T00:00:01",
                        "VALUE": 5.95,
                        "LAWGROUP_NAME": "默认规则组",
                        "PROC_NAME": "炼铁",
                        "AREA_NAME": "炼铁区域"
                    },
                ]
      }
  },
  methods:
    {
        handleStatusDetail(data){
              alert(JSON.stringify(data));
        }
    }
}
</script>
```
:::


