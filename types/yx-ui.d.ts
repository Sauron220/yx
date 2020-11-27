import Vue from 'vue'

import { YXUIComponent } from './component'
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
