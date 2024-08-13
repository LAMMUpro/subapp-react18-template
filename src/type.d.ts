/// <reference types="vite/client" />

/** 基础对象 */
interface BaseObj<T = string | number> {
  [key: string]: T
}