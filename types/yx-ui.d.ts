import Vue from 'vue'

import { YXUIComponent } from './component'
import { YXBlock } from './block'
import { YXPageForm } from './page-form'

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

/** PageForm Component */
export class PageForm extends YXPageForm {}

/** Block Component */
export class Block extends YXBlock {}

/** PageForm Component */
export class PageForm extends YXPageForm {}