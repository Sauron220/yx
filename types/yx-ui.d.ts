import Vue from 'vue'

import { YXUIComponent } from './component'
import { YXBlock } from './block'
import { YXPageForm } from './page-form'
import { YXPageTable } from './page-table'
import { YXRow } from './row'
import { YXDialog } from './dialog'

export interface InstallationOptions {
  locale: any,
  i18n: any,
  size: string
}

/** The version of yx-ui */
export const version: string

/**
 * Install all yx-ui components into Vue.
 * Please do not invoke this method directly.
 * Call `Vue.use(YXUIElement)` to install.
 */
export function install (vue: typeof Vue, options: InstallationOptions): void

/** YXUIComponent component common definition */
export type Component = YXUIComponent

/** Block Component */
export class Block extends YXBlock {}

/** PageForm Component */
export class PageForm extends YXPageForm {}

/** PageTable Component */
export class PageTable extends YXPageTable {}

/** Row Component */
export class Row extends YXRow {}

/** Dialog Component */
export class Dialog extends YXDialog {}
