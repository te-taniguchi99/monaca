<template>
  <!-- f7-app: Framework7アプリ全体のルート。paramsでアプリ設定を渡す -->
  <f7-app :params="f7params">
    <!-- f7-view: 画面遷移(ルーティング)を管理するコンテナ。main必須 -->
    <f7-view main url="/">
      <f7-page>
        <f7-navbar title="Capacitor" />

        <f7-block strong inset>
          <p>
            Capacitor makes it easy to build powerful apps for the app stores, mobile web
            (Progressive Web Apps), and desktop, all with a single code base.
          </p>
          <p>
            UIには <a href="https://framework7.io/" target="_blank">Framework7</a> を使用しています。
          </p>
        </f7-block>

        <f7-block-title>Tiny Demo</f7-block-title>
        <f7-block strong inset>
          <p>This demo shows how to call Capacitor plugins. Say cheese!</p>
          <f7-button fill @click="takePhoto">Take Photo</f7-button>
          <p v-if="imageSrc">
            <img :src="imageSrc" style="max-width: 100%" />
          </p>
        </f7-block>
      </f7-page>
    </f7-view>
  </f7-app>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { SplashScreen } from '@capacitor/splash-screen';
import { Camera, CameraResultType } from '@capacitor/camera';

// Framework7アプリの初期設定
const f7params = {
  name: 'Awesome Capacitor App',
  theme: 'auto',
};

const imageSrc = ref('');

onMounted(() => {
  SplashScreen.hide();
});

const takePhoto = async () => {
  try {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
    });

    // Monacaデバッガー上でも表示できるよう絶対URLを相対パスに変換する
    imageSrc.value = (photo.webPath ?? '').replace(window.location.href, '');
  } catch (e) {
    console.warn('User cancelled', e);
  }
};
</script>
