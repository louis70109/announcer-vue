# Announcer Frontend(AF)

AF is based on Vue3(beta), its backend API service is [Announcer](https://github.com/louis70109/Announcer), it uses [LIFF](https://developers.line.biz/en/reference/liff/)'s [shareTargetPicker](https://developers.line.biz/en/reference/liff/#share-target-picker) to send and generate form data to [FlexMessage](https://developers.line.biz/en/docs/messaging-api/using-flex-messages/) template for LINE User/Group/Room 🙂.

Template like this:

![](https://i.imgur.com/scb0PxL.jpg)

> If you want to get these, you need to follow [Announcer](https://github.com/louis70109/Announcer) README.

> [static.json] is Heroku setting file, if you want to understand more, you can follow [this page](https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static)

## Project setup

- Clone this project👍

```sh
git clone https://github.com/louis70109/announcer-vue.git
cd announcer-vue/
npm install
cp .env.example .env # Input backend API url in VUE_APP_API
npm run serve
```

- Build a new terminal and input the following command to forward localhost to SSL environment by [Ngrok](https://ngrok.com/).:

```
npx ngrok http --region ap --host-header=rewrite 8080
```

![ngrok](https://i.imgur.com/05shvgv.png)

- Next step you need to create a **LINE Login channel** in [Developer Console](https://developers.line.biz/console)
  - Create a LIFF app with `https://DOMAIN_URL/template` endpoint url.
  - publish LINE Login channel.
  - enable shareTargetPicker button.

![](https://i.imgur.com/nm6PKK3.png)

### Compiles and minifies for production

```
npm run build
```
