// framework7-vue@9.1.3の型定義には "framework7-vue/bundle" の registerComponents が
// 含まれていない(実行時には存在するが型定義漏れ)ため、ここで補完する。
declare module 'framework7-vue/bundle' {
  import type { App } from 'vue';
  import Framework7VuePlugin from 'framework7-vue';

  export * from 'framework7-vue';
  // 'export *' はdefault exportを引き継がないため、明示的に再エクスポートする
  export default Framework7VuePlugin;

  export function registerComponents(app: App): void;
}
