<template>
  <div id="app">
    <!-- <Profile></Profile> -->

    <router-view />
  </div>
</template>

<script>
// import { onMounted } from 'vue';
// import liff from '@line/liff';
// import Profile from '@/components/Profile.vue';
export default {
  name: 'App',
  // components: {
  //   Profile,
  // },
  setup() {
    // onMounted(async () => {
    // const res = await fetch(`${process.env.VUE_APP_API}/liff`);
    // try {
    //   const r = await res.json();
    //   await liff.init({ liffId: r.liffId });
    //   if (!liff.isLoggedIn()) {
    //     liff.login({ redirectUri: window.location.href });
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }
    // });
  },
};
</script>
