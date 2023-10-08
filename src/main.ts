import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/route"; 
import './style.css';

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import "@mdi/font/css/materialdesignicons.css";
import { VDataTable } from "vuetify/labs/VDataTable";

const vuetify = createVuetify({
  components: {
    ...components,
    VDataTable,
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#680099",
          secondary: "#680099",
          "badge-gold": "#FFCA28",
          "badge-silver": "#F4F4F4",
          "badge-bronze": "#FF8228",
        },
      },
    },
  },
});

const app = createApp(App);

// Use Vue Router
app.use(router);

// Use Vuetify
app.use(vuetify);

// Mount the app
app.mount("#app");
