<template>
  <div class="lg-form">
  	<el-form ref="form" :model="params"
    :disabled="disabled" :inline="inline" 
    :label-position="labelPosition"
    :label-width="labelWidth ? (labelWidth + 'px') : ''"
    @submit.native.prevent="searchHandler()">
    <el-form-item v-for="(form, index) in forms"
      :prop="getProp(form, index)"
      :label="form.label" :key="index"
      :rules="form.rules || []"
      :label-width="form.labelWidth ? (form.labelWidth + 'px') : ''">
      <el-input v-if="form.itemType === 'input' || form.itemType === undefined"
        v-model="params[form.modelValue]"
        :size="form.size ? form.size : size"
        :readonly="form.readonly" :disabled="form.disabled"
        :clearable="form.clearable"
        :placeholder="form.placeholder"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"/>
      <el-select v-else-if="form.itemType === 'select'"
        v-model="params[form.modelValue]"
        :size="form.size ? form.size : size"
        :disabled="form.disabled"
        :placeholder="form.placeholder"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')">
        <el-option v-for="(option, optionIndex) in form.options"
        :key="optionIndex + '_local'"
          :value="(typeof option === 'object') ? option[form.valueKey || 'value'] : option"
          :label="(typeof option === 'object') ? option[form.labelKey || 'label'] : option" />
        <el-option v-for="(op, opIndex) in selectOptions[selectOptionPrefix + index]" :key="opIndex + '_remote'"
          :value="(typeof op === 'object') ? op[form.valueKey || 'value'] : op"
          :label="(typeof op === 'object') ? op[form.labelKey || 'label'] : op" />
      </el-select>
      <el-switch v-else-if="form.itemType === 'switch'"
      v-model="params[form.modelValue]"
      :disabled="form.disabled"
      :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')">
      </el-switch>
      <el-radio-group v-else-if="form.itemType === 'radio'"
      v-model="params[form.modelValue]"
      :disabled="form.disabled"
      :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')">
        <el-radio v-for="(option, optionIndex) in form.options"
        :label="(typeof option === 'object') ? option[form.valueKey || 'value'] : option"
        :key="optionIndex" name="type">
        {{ (typeof option === 'object') ? option[form.labelKey || 'label'] : option }}
        </el-radio>
      </el-radio-group>
      <el-checkbox-group v-else-if="form.itemType === 'checkbox'"
      v-model="params[form.modelValue]"
      :disabled="form.disabled"
      :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')">
        <el-checkbox v-for="(option, optionIndex) in form.options"
        :label="(typeof option === 'object') ? option[form.valueKey || 'value'] : option"
        :key="optionIndex" name="type">
        {{ (typeof option === 'object') ? option[form.labelKey || 'label'] : option }}
        </el-checkbox>
      </el-checkbox-group>
      <el-date-picker v-else-if="form.itemType === 'date'"
        v-model="params[form.modelValue]"
        type="date" :placeholder="form.placeholder"
        :size="form.size ? form.size : size"        
        :readonly="form.readonly" :disabled="form.disabled"
        :editable="form.editable"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
        :picker-options="form.pickerOptions || {}"/>
      <el-date-picker v-else-if="form.itemType === 'datetime'"
        v-model="params[form.modelValue]"
        type="datetime" :placeholder="form.placeholder"
        :size="form.size ? form.size : size"        
        :readonly="form.readonly" :disabled="form.disabled"
        :editable="form.editable"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
        :picker-options="form.pickerOptions || {}"/>
      <el-date-picker v-else-if="form.itemType === 'daterange'"
        v-model="params[form.modelValue]"
        :size="form.size ? form.size : size"
        type="daterange" @change="date => changeDate(date, form.prop[0], form.prop[1])"    
        :readonly="form.readonly" :disabled="form.disabled"
        :editable="form.editable" range-separator="至"
        :placeholder="form.placeholder"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
        :picker-options="form.pickerOptions || {}"/>
      <el-date-picker v-else-if="form.itemType === 'datetimerange'"
        v-model="params[form.modelValue]"
        :size="form.size ? form.size : size"
        type="datetimerange" @change="date => changeTime(date, form.prop[0], form.prop[1])"
        :readonly="form.readonly" :disabled="form.disabled"
        :editable="form.editable" range-separator="至"
        :placeholder="form.placeholder"
        :style="itemStyle + (form.itemWidth ? `width: ${form.itemWidth}px;` : '')"
        :picker-options="form.pickerOptions || {}"/>
    </el-form-item>
    <el-form-item label="">
      <el-button type="primary" :plain="true"
        :size="size" v-if="showResetBtn"
        @click="resetForm"
        :loading="submitLoading"
        :style="btnBlank ? `margin-right: ${btnBlank}px;` : ''">
        {{ resetBtnText }}
      </el-button>        
      <el-button type="primary" :size="size"
        @click="searchHandler"
        :loading="submitLoading">
        {{ submitBtnText }}
      </el-button>
    </el-form-item>
  </el-form>
  </div>
</template>

<script>
import { formProps } from './props';

export default {
  name: 'LgForm',
  props: formProps,
  data() {
    const { forms, fuzzy } = this.$props;
    const datePrefix = 'daterange-prefix';
    const dateTimePrefix = 'datetimerange-prefix';
    const selectOptionPrefix = 'select-option-prefix';

    let selectOptions = {};
    let params = {};
    let format = {};
    let fuzzyOps = {};

    forms.forEach((v, i) => {
      const propType = typeof v.prop;
      if (propType === 'string') {
        v.modelValue = v.prop;
        if (v.itemType === 'switch') {
          params[v.prop] = !!v.default;
        }else if (v.itemType === 'checkbox') {
          params[v.prop] = v.default || [];
        }else{
          params[v.prop] = v.default || '';
        }

        fuzzyOps[v.prop] = v.fuzzy ? v.fuzzy : fuzzy;
        if (v.format) {
          format[v.prop] = v.format;
        }
      } else if (propType === 'object' && Object.prototype.toString.call(v.prop) === '[object Array]') {
        v.prop.forEach((vv, ii) => {
          if(v.default) {
            params[vv] = v.default[ii] || '';
          }else{
            params[vv] = '';
          }
          if (v.format) {
            format[vv] = v.format;
          }

          fuzzyOps[vv] = v.fuzzy ? v.fuzzy : fuzzy;
        });
      }
      if (v.itemType === 'daterange') {
        params[datePrefix + i] = v.default || '';
        v.modelValue = datePrefix + i;
      }else if (v.itemType === 'datetimerange') {
        params[dateTimePrefix + i] = v.default || '';
        v.modelValue = dateTimePrefix + i;
      }
      // 远程获取
      if (v.itemType === 'select' && (v.selectFetch || v.selectUrl)) {
        const dataKey = selectOptionPrefix + i;
        this.selectOptions[dataKey] = [];
        const { $axios } = this;
        if (!v.selectMethod) {
          v.selectMethod = 'get';
        }
        this.getRemoteData({
          fetch: v.selectFetch ? v.selectFetch : () => {
            return $axios[v.selectMethod](v.selectUrl, v.selectMethod.toLowerCase() === 'get'
              ? { params: v.selectParams } : v.selectParams);
          },
          dataKey,
          resultField: v.selectResultField || 'result',
          resultHandler: v.selectResultHandler
        });
      }
    });

    return {
      params,
      datePrefix,
      dateTimePrefix,
      selectOptionPrefix,
      selectOptions,
      format,
      fuzzyOps
    };
  },
  computed: {
    itemStyle() {
      const { itemWidth } = this;
      if (itemWidth) {
        return `width: ${itemWidth}px;`;
      }
      return '';
    }
  },
  methods: {
    getProp(form, index) {
      const { datePrefix, dateTimePrefix } = this;
      if(form.itemType == 'daterange') {
        return datePrefix + index
      }else if(form.itemType == 'datetimerange') {
        return dateTimePrefix + index
      }else{
        return form.prop
      }
    },
    isArray(value) {
      return typeof value === 'object' && Object.prototype.toString.call(value) === '[object Array]';
    },
    getParamFuzzy() {
      return this.fuzzyOps;
    },    
    searchHandler() {
      this.getParams((error, params) => {
        if (!error) {
          const { submitHandler } = this;
          if (submitHandler) {
            submitHandler(params);
          } else {
            throw new Error('Need to set attribute: submitHandler !');
          }
        }
      });
    },
    getParams(callback) {
      this.$refs['form'].validate(valid => {
        if (valid) {
          const { params, datePrefix, dateTimePrefix, format } = this;
          let formattedForm = {};
          Object.keys(params).forEach(v => {
            // 去掉时间范围再返回
            if (v.indexOf(datePrefix) === -1 && v.indexOf(dateTimePrefix) === -1) {
              formattedForm[v] = format[v] ? format[v](params[v], v) : params[v];
            }
          });
          if (callback) callback(null, formattedForm);
        } else {
          if (callback) callback(new Error());
        }
      });
    },
    resetForm() {
      this.$refs['form'].resetFields();
    },
    changeDate(date, startDate, endDate) {
      let dates;
      if (date === null) {
        this.params[startDate] = '';
        this.params[endDate] = '';
        return;
      }
      if (typeof date === 'string') {
        dates = date.split(' - ');
      } else if (date && date.hasOwnProperty('length')) {
        const firstDate = date[0];
        const secondDate = date[1];
        dates = [
          `${firstDate.getFullYear()}-${('0' + (firstDate.getMonth() + 1)).substr(-2)}-${('0' + firstDate.getDate()).substr(-2)}`,
          `${secondDate.getFullYear()}-${('0' + (secondDate.getMonth() + 1)).substr(-2)}-${('0' + secondDate.getDate()).substr(-2)}`
        ];
      }

      this.params[startDate] = dates[0];
      this.params[endDate] = dates[1];
    },
    changeTime(date, startDate, endDate) {
      let dates;
      if (date === null) {
        this.params[startDate] = '';
        this.params[endDate] = '';
        return;
      }
      if (typeof date === 'string') {
        dates = date.split(' - ');
      } else if (date && date.hasOwnProperty('length')) {
        const firstDate = date[0];
        const secondDate = date[1];
        dates = [
          `${firstDate.getFullYear()}-${('0' + (firstDate.getMonth() + 1)).substr(-2)}-${('0' + firstDate.getDate()).substr(-2)} ${('0' + firstDate.getHours()).substr(-2)}:${('0' + firstDate.getMinutes()).substr(-2)}:${('0' + firstDate.getSeconds()).substr(-2)}`,
          `${secondDate.getFullYear()}-${('0' + (secondDate.getMonth() + 1)).substr(-2)}-${('0' + secondDate.getDate()).substr(-2)} ${('0' + secondDate.getHours()).substr(-2)}:${('0' + secondDate.getMinutes()).substr(-2)}:${('0' + secondDate.getSeconds()).substr(-2)}`
        ];
      }

      this.params[startDate] = dates[0];
      this.params[endDate] = dates[1];
    },    
    getRemoteData({ fetch, dataKey, resultField, resultHandler }) {
      fetch().then(response => {
        let result = response;
        if (typeof response === 'object' && !this.isArray(response)) {
          if (resultField.indexOf('.') !== -1) {
            resultField.split('.').forEach(vv => {
              result = result[vv];
            });
          } else {
            result = response[resultField];
          }
        }

        if (!result || !(result instanceof Array)) {
          console.warn(`The result of key:${resultField} is not Array. 接口返回的字段:${resultField} 不是一个数组`);
        }

        if (this.resultHandler) {
          this.selectOptions[dataKey] = result.map(this.resultHandler);
        } else {
          this.selectOptions[dataKey] = result;
        }
      });
    }
  }
};
</script>

<style>

</style>
