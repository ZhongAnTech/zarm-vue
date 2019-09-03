import Vue from 'vue';
import { ZarmVueComponent } from './component';

type AlertMessage = string | number;

export type AlertOptions = {
  prefixCls?: string;
  title?: string;
  visible?: boolean;
  cancelText?: string;
  radius?: boolean;
  animationDuration?: number;
  message?: AlertMessage;
}

export interface Alert {
  (message?: AlertOptions | AlertMessage, options?: AlertOptions) : ZarmVueComponent
}

declare module 'vue/types/vue' {
  interface Vue {
    $zaAlert: Alert
  }
}
