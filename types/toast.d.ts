import Vue from 'vue';
import { ZarmVueComponent } from './component';

type ToastMessage = string | number;

export type ToastOptions = {
  prefixCls?: string;
  visible?: boolean;
  duration?: string;
  message?: ToastMessage;
}

export interface Toast {
  (message: ToastOptions | ToastMessage, options?: ToastOptions): ZarmVueComponent
}

declare module 'vue/types/vue' {
  interface Vue {
    $zaToast: Toast
  }
}
