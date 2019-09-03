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

export interface zaConfirm extends Vue {}

export interface Confirm {
  (message?: ConfirmOptions | ConfirmMessage, options?: ConfirmOptions) : zaConfirm
}

declare module 'vue/types/vue' {
  interface Vue {
    $zaConfirm: Confirm
  }
}

export const Confirm: Confirm;
