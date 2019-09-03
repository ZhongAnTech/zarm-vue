import Vue from 'vue';
import { ZarmVueComponent } from './component';

type LoadingMessage = string | number;

export type LoadingOptions = {
  prefixCls?: string;
  visible?: boolean;
}

export interface Loading {}

declare module 'vue/types/vue' {
  interface Vue {
    $zaLoading: Loading
  }
}
