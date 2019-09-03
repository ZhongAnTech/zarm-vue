import Vue from 'vue';
import { ZarmVueComponent } from './component';

type ToastMessage = string | number;

export type ToastOptions = {
  prefixCls?: string;
  visible?: boolean;
  duration?: number;
  message?: ToastMessage;
}

export declare class Toast extends ZarmVueComponent {}

export interface zaToast {
  (message: ToastOptions | ToastMessage, options?: ToastOptions): Toast
}

declare module 'vue/types/vue' {
  interface Vue {
    $zaToast: zaToast
  }
}
