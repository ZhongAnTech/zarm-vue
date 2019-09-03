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

export declare class Alert extends ZarmVueComponent {}

export interface zaAlert {
  (message?: AlertOptions | AlertMessage, options?: AlertOptions) : Alert
}

declare module 'vue/types/vue' {
  interface Vue {
    $zaAlert: zaAlert
  }
}
