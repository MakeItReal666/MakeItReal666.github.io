<script lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRouter } from "vue-router";

export default {
  setup() {
    const loginUrl = ref('');
    const signUpUrl = ref('');
    var avatar1 = ref(1);
    var loginText1 = ref(1);
    const login = ref(sessionStorage.getItem('login')); // Retrieve "identity" from sessionStorage
    const items = ref(["Create Project", "Log Out"]);
    const icons = ref(['mdi-book-plus-outline', 'mdi-logout']);
    const router = useRouter(); // Get the router instance
    const logOutClick = () => {
      // Set the 'login' key with the value '100' in sessionStorage
      console.log('Log Out');
      router.push('/explore');
      // Remove the 'login' key from sessionStorage
      sessionStorage.removeItem('login');
      login.value = null;
      //window.location.reload();
    };
    const createProjectClick = () => {
      // Set the 'login' key with the value '100' in sessionStorage
      router.push('/createproject');
    };

    onMounted(() => {
      loginUrl.value = window.location.origin + '/login';
      signUpUrl.value = window.location.origin + '/login';
    });

    const avatarFunction = (num: number) => {
      if (num == 0) {
        createProjectClick();
      } else if (num == 1) {
        logOutClick();
      }
    }

    watch(login, (newLogin) => {
      if (newLogin === null || newLogin === undefined) {
        // The 'login' key was removed from sessionStorage
        // You can perform any necessary actions here
        // For example, you can re-render or hide the UI elements
        avatar1.value++; // Force reactivity to re-render
        loginText1.value++; // Force reactivity to re-render
      }
    });

    return {
      loginUrl,
      signUpUrl,
      login,
      items,
      icons,
      avatarFunction,
      avatar1,
      loginText1
    };
  }
};
</script>

<template>
  <v-avatar :key="avatar1" id="menu-activator" v-if="login !== null" color="grey"></v-avatar>
  <div :key="loginText1" v-if="login == null"><a :href="loginUrl">Login</a>
  </div>
  <!-- Dropdown menu -->

  <v-menu activator="#menu-activator">
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index" :value="index">
        <div class="d-flex" @click="avatarFunction(index)">
          <v-icon>{{ icons[index] }}</v-icon>
          <v-list-item-title class="px-3">{{ item }}</v-list-item-title>
        </div>

      </v-list-item>
    </v-list>
  </v-menu>
</template>

<style scoped>
/* Style the links */
/* Style the links */
a {
  text-decoration: none;
  color: white;
  font-weight: normal;
  transition: color 0.3s, font-weight 0.3s;
}

/* Style the links when hovering */
a:hover {
  font-weight: bold;
}

#menu-activator:hover {
  cursor: pointer;
  box-shadow: inset;
}
</style>

