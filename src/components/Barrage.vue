<template>
  <div class="barrage"></div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
// import liff from '@line/liff';
export default {
  setup() {
    let data = ref([]),
      count = ref(0),
      timer = null;
    onMounted(async () => {
      timer = window.setInterval(() => {
        data.value.push(count.value);
        count.value += 1;
        createText(count.value);
        console.log('Hello!');
      }, 1000);
    });
    onUnmounted(() => {
      window.clearInterval(timer);
    });
    async function createText(text) {
      let div_text = document.createElement('div');
      div_text.id = 'text' + 1;
      div_text.style.position = 'fixed';
      div_text.style.whiteSpace = 'nowrap';
      div_text.style.left = document.documentElement.clientWidth + 'px';
      var random = Math.round(
        Math.random() * document.documentElement.clientHeight
      );
      div_text.style.top = random + 'px';
      div_text.appendChild(document.createTextNode(text));
      document.body.appendChild(div_text);

      await gsap.to('#' + div_text.id, {
        duration: 5,
        x: -1 * (document.documentElement.clientWidth + div_text.clientWidth),
      });

      div_text.parentNode.removeChild(div_text);
    }
    return { count, data };
  },
};
</script>
