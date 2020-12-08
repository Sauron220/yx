import { YXUIComponent } from './component'

interface RowItem {
  key: string,
  label: string,
  span: number,
  lineStyle?: object
}

/** Row Component */
export declare class YXRow extends YXUIComponent {
  /** Title of Row */
  title: string

  /** Row span */
  span: number

  /** sourceData */
  sourceData: object

  /** row */
  row: Array<RowItem>
}
