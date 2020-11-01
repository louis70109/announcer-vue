<template>
  <div id="app">
    <Profile></Profile>

    <div class="jumbotron">
      <h1 class="display-4">Ann0uncer</h1>
      <p class="lead">
        AF is based on Vue3(beta), its backend API service is Announcer, it uses
        LIFF's shareTargetPicker to send and generate form data to FlexMessage
        template for LINE User/Group/Room 🙂
      </p>
      <a
        class="btn btn-primary btn-lg"
        href="https://github.com/louis70109/announcer-vue"
        role="button"
        >Learn more</a
      >
    </div>
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue';
import liff from '@line/liff';
import Profile from '@/components/Profile.vue';
export default {
  name: 'App',
  components: {
    Profile,
  },
  setup() {
    onMounted(async () => {
      const res = await fetch(`${process.env.VUE_APP_API}/liff`);

      try {
        const r = await res.json();
        await liff.init({ liffId: r.liffId });
        if (!liff.isLoggedIn()) {
          liff.login({ redirectUri: window.location.href });
        }
      } catch (err) {
        console.log(err.message);
      }
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
