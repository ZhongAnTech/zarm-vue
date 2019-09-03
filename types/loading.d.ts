import Vue from 'vue';
import { ZarmVueComponent } from './component';

type LoadingMessage = string | number;

export type LoadingOptions = {
  prefixCls?: string;
  visible?: boolean;
}

export declare class Loading extends ZarmVueComponent {}

export interface zaLoading {
  (): ZarmVueComponent
}

declare module 'vue/types/vue' {
  interface Vue {
    $zaLoading: zaLoading
  }
}
