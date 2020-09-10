<template>
  <div class="hello">
    <p>
      樣板選擇：
      <select id="template" @change="optionCheck($event)" name="template">
        <option>活動表</option>
        <option>名單表</option>
      </select>
    </p>
    <div v-if="form.template == '1'">
      標題:
      <input
        type="text"
        name="title"
        id="title"
        v-model="form.title"
        required
      />
      <br />
      地點:
      <input
        type="text"
        name="place"
        id="place"
        v-model="form.place"
        required
      />
      <br />
      時間:<input
        type="text"
        name="time"
        id="time"
        v-model="form.time"
        required
      />
      <br />
      標籤:
      <input
        type="text"
        name="activity"
        id="activity"
        v-model="form.activity"
        required
      />
      <br />
      網址(選填): <input type="text" name="url" id="url" v-model="form.url" />
      <br />
      圖片網址(選填):
      <input
        type="text"
        name="imageUrl"
        id="imageUrl"
        v-model="form.imageUrl"
      />
      <br />
      描述:
      <textarea
        name="desc"
        id="desc"
        cols="30"
        rows="10"
        v-model="form.desc"
      ></textarea>
      <input
        type="hidden"
        name="template"
        id="template"
        :value="form.template"
      />
      <br />
    </div>
    <div v-else-if="form.template == '2'">
      標題:
      <input
        type="text"
        name="title"
        id="title"
        v-model="form.title"
        required
      />
      <br />
      地點:
      <input
        type="text"
        name="place"
        id="place"
        v-model="form.place"
        required
      />
      <br />
      網址(選填): <input type="text" name="url" id="url" v-model="form.url" />
      <br />
      Map(選填): <input type="text" name="map" id="map" v-model="form.map" />
      <br />
      標籤:
      <input
        type="text"
        name="activity"
        id="activity"
        v-model="form.activity"
        required
      />
      名單：
      <div id="people-block" v-for="(item, index) in form.people" :key="index">
        姓名{{ index
        }}<input type="text" v-model="form.people[index].name" class="people" />
        時間{{ index
        }}<input type="text" v-model="form.people[index].time" class="people" />
      </div>
      <button @click="peopleListPlus">(+)</button>
      <input
        type="hidden"
        name="template"
        id="template"
        :value="form.template"
      />
    </div>
    <button @click="submitTempleteForm">送出</button>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import liff from "@line/liff";
import qs from "qs";
export default {
  setup() {
    let form = ref({
        template: "",
      }),
      data = {},
      announcer_api = process.env.VUE_APP_API,
      liffId = "";
    onMounted(async () => {
      const res = await fetch(`${announcer_api}/liff`);
      const r = await res.json();
      liffId = r.liffId;

      try {
        await liff.init({ liffId });
        if (!liff.isLoggedIn())
          liff.login({ redirectUri: window.location.href });
      } catch (err) {
        console.log(`liff.state init error ${err}`);
      }
      const uri = window.location.search.substring(1);
      const params = new URLSearchParams(uri);
      const state = params.get("template");
      form.value.template = state;
      if (state === "2") form.value.people = [{ name: "", time: "" }];
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
      console.log("data: ", data);
      if (liff.isApiAvailable("shareTargetPicker")) {
        try {
          const picker = await liff.shareTargetPicker([JSON.parse(data.flex)]);
          if (picker) {
            // succeeded in sending a message through TargetPicker
            console.log(`[${picker.status}] Message sent!`);
          } else {
            const [majorVer, minorVer] = (liff.getLineVersion() || "").split(
              "."
            );
            if (parseInt(majorVer) == 10 && parseInt(minorVer) < 11) {
              console.log(
                "TargetPicker was opened at least. Whether succeeded to send message is unclear"
              );
            } else console.log("TargetPicker was closed!");
          }
        } catch (error) {
          // something went wrong before sending a message
          console.log(error);
          console.log("Flex Message got some error");
          liff.closeWindow();
        }
      } else console.log("Please login...");
    }
    function optionCheck(event) {
      // init
      switch (event.target.value) {
        case "活動表":
          form.value = {
            template: "1",
            title: "",
            place: "",
            time: "",
            activity: "",
            url: "",
            imageUrl: "",
            desc: "",
          };
          break;
        case "名單表":
          form.value = {
            template: "2",
            title: "",
            place: "",
            activity: "",
            url: "",
            map: "",
            people: [{ name: "", time: "" }],
          };
          break;
      }
    }
    function peopleListPlus() {
      if (form.value.people) form.value.people.push({ name: "", time: "" });
    }
    return {
      form,
      optionCheck,
      submitTempleteForm,
      peopleListPlus,
      liffId,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
