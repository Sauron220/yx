import { YXUIComponent } from './component'

export type LabelPosition = 'right' | 'top' | 'left'

/** Field type */
type FieldType = 'input' | 'password' | 'number' | 'inputNumber'
 | 'textarea' | 'select' | 'multselect' | 'date' | 'time' | 'atime' | 'text' | 'slot'

/** Button type */
export type ButtonType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'text'

interface FieldItem {
  type: FieldType,
  label: string,
  prop: string,
  event?: Function,
  disabled?: boolean,
  clearable?: boolean,
  filterable?: boolean,
  valueFormat?: string,
  format?: string,
  TimePickerOptions?: object,
}

interface OperateBtn {
  permission: boolean,
  name: string,
  type: ButtonType,
  icon?: string,
  loading?: boolean,
  disabled?: boolean,
  handleClick?: Function
}

/** PageForm Component */
export declare class YXPageForm extends YXUIComponent {
  /** Gutter */
  rowGutter: number

  /** XS Col Count */
  colXs: number

  /** SM Col Count */
  colSm: number

  /** MD Col Count */
  colMd: number

  /** LG Col Count */
  colLg: number

  /** Data */
  data: object

  /** Field List */
  fieldList: Array<FieldItem>

  /** rules */
  rules: object

  /** List TypeInfo */
  listTypeInfo: object

  /** Label Width */
  labelWidth: string

  /** Label Position */
  labelPosition: LabelPosition

  /** Ref */
  refObj: object

  /** Operate */
  operate: Array<OperateBtn>

  /** OperateClass */
  operateClass: string
}
