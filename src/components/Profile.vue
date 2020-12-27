<template>
  <div class="profile">
    <img
      :src="user.picture"
      alt="userPicture"
      class="img-thumbnail"
      width="100"
      height="100"
    />

    <button class="btn btn-danger" data-testid="logout" @click="logout">
      Log Out
    </button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';

import liff from '@line/liff';

export default {
  name: 'Profile',
  setup() {
    let user = ref({
      name: '',
      picture: '',
    });
    onMounted(async () => {
      await liff.ready;
      if (!liff.isLoggedIn()) {
        liff.login();
      }
      const profile = await liff.getProfile();
      user.value.name = profile.displayName;
      user.value.picture = profile.pictureUrl;
      console.log(user);
    });
    function logout() {
      liff.logout();
      window.location.reload();
    }
    return { user, logout };
  },
};
</script>
