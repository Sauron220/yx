<template>
  <div class="yx-page-form">
    <el-form ref="form" v-bind="$attrs" :model="data" :rules="rules" :label-width="labelWidth" :label-position="labelPosition">
      <el-row type="flex" align="bottom" :gutter="rowGutter">
        <el-col
          v-for="(item, index) in getConfigList()"
          :key="index"
          :xs="item.colXs ? item.colXs : colXs"
          :sm="item.colSm ? item.colSm : colSm"
          :md="item.colMd ? item.colMd : colMd"
          :lg="item.colLg ? item.colLg : colLg"
        >
          <!-- slot -->
          <template v-if="item.type === 'slot' && item.noForm">
            <slot :name="'form-' + item.prop" />
          </template>

          <el-form-item v-else :key="`${item.label}-${item.noValid}`" :prop="item.disabled || item.noValid ? '' : item.prop" :label="item.label">
            <!-- label slot -->
            <template v-if="item.label === 'custom'" #label>
              <slot :name="`label-${item.prop}`" />
            </template>

            <!-- slot -->
            <template v-if="item.type === 'slot' && !item.noForm">
              <slot :name="'form-' + item.prop" />
            </template>

            <!-- 普通输入框 -->
            <el-input
              v-if="['input', 'password'].includes(item.type)"
              :key="item.prop"
              v-model="data[item.prop]"
              :type="item.type"
              :disabled="item.disabled"
              :placeholder="
                item.placeholder ? item.placeholder : getPlaceholder(item)
              "
              @focus="handleEvent(item.event)"
              @change="handleEvent(item.event, data[item.prop])"
            />

            <el-input
              v-else-if="['number'].includes(item.type)"
              :key="item.prop"
              v-model.number="data[item.prop]"
              :type="item.type"
              :disabled="item.disabled"
              :placeholder="getPlaceholder(item)"
              @focus="handleEvent(item.event)"
              @change="handleEvent(item.event, data[item.prop])"
            />

            <!-- 计数器 -->
            <el-input-number
              v-if="item.type === 'inputNumber'"
              v-model="data[item.prop]"
              :min="item.min"
              :max="item.max"
              :controls="item.controls"
              style="width: 100%;"
              @change="handleEvent(item.event)"
            />

            <!-- 文本输入框 -->
            <el-input
              v-else-if="item.type === 'textarea'"
              :key="item.prop"
              v-model.trim="data[item.prop]"
              :type="item.type"
              :disabled="item.disabled"
              :placeholder="getPlaceholder(item)"
              :autosize="item.autosize || { minRows: 2, maxRows: 10 }"
              @focus="handleEvent(item.event)"
            />

            <!-- 选择框 -->
            <el-select
              v-else-if="item.type === 'select'"
              :key="item.prop"
              v-model="data[item.prop]"
              default-first-option
              :disabled="item.disabled"
              :clearable="item.clearable ? item.clearable : true"
              :filterable="item.filterable"
              :placeholder="getPlaceholder(item)"
              @change="handleEvent(item.event, data[item.prop], item)"
            >
              <el-option
                v-for="(childItem, childIndex) in selectListOption(
                  listTypeInfo[item.list]
                )"
                :key="childIndex"
                :label="childItem.label || childItem[item.optLabel]"
                :value="childItem.value || childItem[item.optVal]"
              />
            </el-select>

            <!-- 多选选择框 -->
            <el-select
              v-else-if="item.type === 'multselect'"
              :key="item.prop"
              v-model="data[item.prop]"
              :disabled="item.disabled"
              multiple
              :clearable="item.clearable ? item.clearable : true"
              :filterable="item.filterable"
              :placeholder="getPlaceholder(item)"
              @change="handleEvent(item.event, data[item.prop], item)"
            >
              <el-option
                v-for="(childItem, childIndex) in listTypeInfo[item.list]"
                :key="childIndex"
                :label="childItem.label || childItem[item.optLabel]"
                :value="childItem.value || childItem[item.optVal]"
              />
            </el-select>

            <!-- 日期选择框 -->
            <el-date-picker
              v-else-if="item.type === 'date'"
              :key="item.prop"
              v-model="data[item.prop]"
              :type="item.dateType"
              :picker-options="item.TimePickerOptions"
              :clearable="item.clearable"
              :disabled="item.disabled"
              :value-format="item.valueFormat || 'yyyy-MM-dd'"
              :format="item.format"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              :placeholder="getPlaceholder(item)"
              @focus="handleEvent(item.event)"
            />

            <!-- 时间选择框 -->
            <el-time-select
              v-else-if="item.type === 'time'"
              :key="item.prop"
              v-model="data[item.prop]"
              :placeholder="getPlaceholder(item)"
              :picker-options="item.TimePickerOptions"
              @focus="handleEvent(item.event)"
            />

            <!-- 任意时间点 -->
            <el-time-picker
              v-else-if="item.type === 'atime'"
              :key="item.prop"
              v-model="data[item.prop]"
              :is-range="item.isRange"
              :placeholder="getPlaceholder(item)"
              :value-format="item.valueFormat"
              :picker-options="item.TimePickerOptions"
              @focus="handleEvent(item.event)"
            />

            <!-- 显示文字信息 -->
            <span v-if="item.type === 'text'">{{ data[item.prop] }}</span>
          </el-form-item>
        </el-col>

        <el-col v-if="operate.length !== 0" :span="24" :class="{ 'yx-col-auto': isAuto }">
          <div class="yx-search-btn">
            <template v-for="item in operate">
              <el-button
                v-if="item.permission"
                :key="item.name"
                v-hasPermi="[item.permission]"
                :type="item.type"
                :icon="item.icon"
                :loading="item.loading"
                :disabled="item.disabled"
                @click="item.handleClick"
              >{{ item.name }}</el-button>
              <el-button
                v-if="!item.permission"
                :key="item.name"
                :type="item.type"
                :icon="item.icon"
                :loading="item.loading"
                :disabled="item.disabled"
                @click="item.handleClick"
              >{{ item.name }}</el-button>
            </template>
          </div>
        </el-col>

        <el-col v-if="operateClass" :class="operateClass">
          <el-form-item>
            <slot name="operate" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import { type } from '@/utils'
export default {
  name: 'YxPageForm',
  props: {
    //  列间距
    rowGutter: {
      type: Number,
      default: 20
    },
    //
    colXs: {
      type: Number,
      default: 24
    },
    colSm: {
      type: Number,
      default: 12
    },
    colMd: {
      type: Number,
      default: 8
    },
    colLg: {
      type: Number,
      default: 4
    },
    // 表单数据
    data: {
      type: Object,
      default: () => ({})
    },
    // 相关字段
    fieldList: {
      type: Array,
      default: () => []
    },
    // 验证规则
    rules: {
      type: Object,
      default: () => ({})
    },
    // 相关的列表
    listTypeInfo: {
      type: Object,
      default: () => ({})
    },
    // label宽度
    labelWidth: {
      type: String,
      default: '120px'
    },
    // label位置
    labelPosition: {
      type: String,
      default: 'top'
    },
    refObj: {
      type: Object,
      default: () => ({})
    },
    operate: {
      type: Array,
      default: () => []
    },
    operateClass: {
      type: String,
      default: ''
    }
  },
  data () {
    return {}
  },
  computed: {
    isAuto () {
      return this.fieldList.length < 24 / this.colLg
    }
  },
  watch: {
    data: {
      handler: function (val) {
        // 将form实例返回到父级
        this.$emit('update:refObj', this.$refs.form)
      },
      deep: true // 深度监听
    }
  },
  mounted () {
    // 将form实例返回到父级
    this.$emit('update:refObj', this.$refs.form)
  },
  methods: {
    selectListOption (arr) {
      if (!arr) return
      const item = arr[0]
      if (type(item) === 'string') {
        return arr.map((val) => ({ label: val, value: val }))
      } else {
        return arr
      }
    },
    // 获取字段列表
    getConfigList () {
      return this.fieldList.filter(
        (item) =>
          !item.hasOwnProperty('show') ||
          (item.hasOwnProperty('show') && item.show)
      )
    },
    // 得到placeholder的显示
    getPlaceholder (row) {
      let placeholder
      if (row.type === 'input' || row.type === 'textarea') {
        placeholder = '请输入' + row.label
      } else if (
        row.type === 'select' ||
        row.type === 'time' ||
        row.type === 'date'
      ) {
        placeholder = '请选择' + row.label
      } else {
        placeholder = row.label
      }
      return placeholder
    },
    // 绑定的相关事件
    handleEvent (event, data, item) {
      this.$emit('handleEvent', event, data, item)
    },
    // 派发按钮点击事件
    handleClick (event, data) {
      this.$emit('handleClick', event, data)
    }
  }
}
</script>
