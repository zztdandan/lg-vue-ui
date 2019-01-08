
export const formProps = {
  // 统一设置控件大小
  size: {
    type: String,
    default: '',
    validator: sizeValidator
  },
  disabled: {
    type: Boolean,
    default: false
  },
  inline: {
    type: Boolean,
    default: false
  },
  fuzzy: {
    type: Boolean,
    default: false
  },
  labelWidth: String,
  labelPosition: String,
  itemWidth: String,
  submitLoading: {
    type: Boolean,
    default: false
  },
  submitBtnText: {
    type: String,
    default: '查询'
  },
  // submitHandler: Function,
  showResetBtn: {
    type: Boolean,
    default: true
  },
  resetBtnText: {
    type: String,
    default: '重置'
  },
  btnBlankWidth: String,
  formItems: {
    type: Array,
    required: true
  }
};

function sizeValidator(value) {
  const methodTypes = ['medium', 'small', 'mini'];
  const valid = methodTypes.indexOf(value.toLowerCase()) !== -1 || value === '';
  if (!valid) {
    throw new Error('Size must be one of [\'medium\', \'small\', \'mini\']');
  }
  return valid;
}
