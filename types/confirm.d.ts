import Vue from 'vue';
import { ZarmVueComponent } from './component';

type ConfirmMessage = string | number;

export type ConfirmOptions = {
  prefixCls?: string;
  title?: string;
  visible?: boolean;
  okText?: string;
  cancelText?: string;
  radius?: boolean;
  animationDuration?: number;
  message?: ConfirmMessage;
  ok(): void;
  cancel(): void;
}

export declare class Confirm extends ZarmVueComponent {}

export interface zaConfirm {
  (message?: ConfirmOptions | ConfirmMessage, options?: ConfirmOptions) : Confirm
}

declare module 'vue/types/vue' {
  interface Vue {
    $zaConfirm: zaConfirm
  }
}
