<template>
  <div class="hello">
    <select
      class="form-control"
      id="exampleFormControlSelect1"
      @change="optionCheck($event)"
    >
      <option>樣板選擇</option>
      <option>活動表</option>
      <option>名單表</option>
      <option>個人卡片</option>
    </select>
    <hr />
    <div v-if="form.template == '1'">
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">標題</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Input your topic"
          aria-describedby="addon-wrapping"
          name="title"
          v-model.trim="form.title"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">地點</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Input your location"
          aria-describedby="addon-wrapping"
          name="place"
          v-model.trim="form.place"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">時間</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Input time e.g. 12/34 56:78"
          aria-describedby="addon-wrapping"
          name="time"
          v-model.trim="form.time"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">標籤</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Input activity type"
          aria-describedby="addon-wrapping"
          name="activity"
          v-model.trim="form.activity"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping"
            >網址<span class="badge badge-info">選填</span></span
          >
        </div>
        <input
          type="text"
          inputmode="url"
          class="form-control"
          placeholder="Input url e.g. https://open_url.com/xxx.jpg"
          aria-describedby="addon-wrapping"
          name="url"
          v-model.trim="form.url"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping"
            >圖片網址<span class="badge badge-info">選填</span></span
          >
        </div>
        <input
          type="text"
          inputmode="url"
          class="form-control"
          placeholder="Input a image url e.g. https://open_url.com/xxx.jpg"
          aria-describedby="addon-wrapping"
          name="imageUrl"
          v-model.trim="form.imageUrl"
          required
        />
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">描述</span>
        </div>
        <textarea
          class="form-control"
          aria-label="描述"
          v-model="form.desc"
        ></textarea>
      </div>
      <input
        type="hidden"
        name="template"
        id="template"
        :value="form.template"
      />
      <br />
    </div>
    <div v-else-if="form.template == '2'">
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">標題</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Input your topic"
          aria-describedby="addon-wrapping"
          name="title"
          v-model.trim="form.title"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">地點</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Input your location"
          aria-describedby="addon-wrapping"
          name="place"
          v-model.trim="form.place"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping"
            >網址<span class="badge badge-info">選填</span></span
          >
        </div>
        <input
          type="text"
          class="form-control"
          inputmode="url"
          placeholder="Input a image url e.g. https://open_url.com/xxx.jpg"
          aria-describedby="addon-wrapping"
          name="url"
          v-model.trim="form.url"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping"
            >Map<span class="badge badge-info">選填</span></span
          >
        </div>
        <input
          type="text"
          class="form-control"
          inputmode="url"
          placeholder="Input a google url e.g. https://map.com"
          aria-describedby="addon-wrapping"
          name="map"
          v-model.trim="form.map"
          required
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">標籤</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Input tag"
          aria-describedby="addon-wrapping"
          name="tag"
          v-model.trim="form.activity"
          required
        />
      </div>
      <button type="button" class="btn btn-success" @click="peopleListPlus">
        名單(+)
      </button>

      <div id="people-block">
        <div
          class="input-group flex-nowrap"
          v-for="(item, index) in form.people"
          :key="index"
        >
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">姓名</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Input name"
            aria-describedby="addon-wrapping"
            v-model.trim="form.people[index].name"
            required
          />
          <div class="input-group-prepend">
            <span class="input-group-text" id="addon-wrapping">時間</span>
          </div>
          <input
            type="text"
            class="form-control"
            placeholder="Input time"
            aria-describedby="addon-wrapping"
            v-model.trim="form.people[index].time"
            required
          />
        </div>
      </div>

      <input
        type="hidden"
        name="template"
        id="template"
        :value="form.template"
      />
    </div>
    <div v-else-if="form.template == '3'">
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">名稱</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Input your name"
          aria-describedby="addon-wrapping"
          name="title"
          v-model.trim="form.title"
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">大頭貼網址</span>
        </div>
        <input
          type="text"
          class="form-control"
          inputmode="url"
          placeholder="Input your avatar url e.g. https://open_url.com/xxx.jpg"
          aria-describedby="addon-wrapping"
          name="avatar"
          v-model.trim="form.avatar"
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">封面照網址</span>
        </div>
        <input
          type="text"
          class="form-control"
          inputmode="url"
          placeholder="Input your background url e.g. https://open_url.com/xxx.jpg"
          aria-describedby="addon-wrapping"
          name="back"
          v-model.trim="form.back"
        />
      </div>
      <div class="input-group flex-nowrap">
        <div class="input-group-prepend">
          <span class="input-group-text" id="addon-wrapping">追隨連結</span>
        </div>
        <input
          type="text"
          class="form-control"
          inputmode="url"
          placeholder="Input your persional SNS link e.g. https://line.me/xxx"
          aria-describedby="addon-wrapping"
          name="followUrl"
          v-model.trim="form.followUrl"
        />
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">描述</span>
        </div>
        <textarea
          class="form-control"
          aria-label="描述"
          name="description"
          v-model="form.description"
        ></textarea>
      </div>
      <input
        type="hidden"
        name="template"
        id="template"
        :value="form.template"
      />
      <br />
    </div>
    <br />
    <button type="button" class="btn btn-primary" @click="submitTempleteForm">
      送出
    </button>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import liff from '@line/liff';
import qs from 'qs';
export default {
  setup() {
    let form = ref({
        template: '',
      }),
      data = {},
      announcer_api = process.env.VUE_APP_API;
    onMounted(async () => {
      const uri = window.location.search.substring(1);
      const params = new URLSearchParams(uri);
      const state = params.get('template');
      form.value.template = state;
      if (state === '2') form.value.people = [{ name: '', time: '' }];
    });

    async function submitTempleteForm() {
      if (!liff.isLoggedIn()) {
        liff.login({ redirectUri: window.location.href });
        return new Promise.all();
      }
      const res = await fetch(
        `${announcer_api}/liff/share?${qs.stringify(form.value)}`
      );
      data = await res.json();
      console.log('data: ', data);
      if (liff.isApiAvailable('shareTargetPicker')) {
        try {
          const picker = await liff.shareTargetPicker([JSON.parse(data.flex)]);
          if (picker) {
            // succeeded in sending a message through TargetPicker
            console.log(`[${picker.status}] Message sent!`);
          } else {
            const [majorVer, minorVer] = (liff.getLineVersion() || '').split(
              '.'
            );
            if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
              console.log(
                'TargetPicker was opened at least. Whether succeeded to send message is unclear'
              );
            } else console.log('TargetPicker was closed!');
          }
        } catch (error) {
          // something went wrong before sending a message
          console.log(error);
          console.log('Flex Message got some error');
          liff.closeWindow();
        }
      } else console.log('Please login...');
    }
    function optionCheck(event) {
      switch (event.target.value) {
        case '活動表':
          form.value = {
            template: '1',
            title: '',
            place: '',
            time: '',
            activity: '',
            url: '',
            imageUrl: '',
            desc: '',
          };
          break;
        case '名單表':
          form.value = {
            template: '2',
            title: '',
            place: '',
            activity: '',
            url: '',
            map: '',
            people: [{ name: '', time: '' }],
          };
          break;
        case '個人卡片':
          form.value = {
            template: '3',
            title: '',
            description: '',
            avatar: '',
            back: '',
            followUrl: '',
          };
          break;
      }
    }
    function peopleListPlus() {
      if (form.value.people) form.value.people.push({ name: '', time: '' });
    }
    return {
      form,
      optionCheck,
      submitTempleteForm,
      peopleListPlus,
    };
  },
};
</script>

<style scoped></style>
