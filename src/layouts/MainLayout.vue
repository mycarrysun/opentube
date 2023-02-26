<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          OpenTube
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <div>
          <q-item
            clickable
            :to="{ name: ROUTES.HOME_FEED }"
          >
            <q-item-section
              avatar
            >
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              <q-item-label>Home</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <div>
          <q-item clickable
                  @click="toggleDarkMode">
            <q-item-section avatar>
              <q-icon :name="darkModeActive ? 'light_mode' : 'dark_mode'"/>
            </q-item-section>

            <q-item-section>Dark Mode</q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-drawer>

    <q-page-container>
      <Suspense @pending="showLoading" @resolve="hideLoading">
        <router-view />
      </Suspense>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { ROUTES } from 'src/router/routes';
import { useQuasar } from 'quasar';

const DARK_MODE_STORAGE_KEY = 'dark_mode';

export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup() {
    const $q = useQuasar();
    const leftDrawerOpen = ref(false);
    const darkModeActive = ref($q.localStorage.getItem<boolean>(DARK_MODE_STORAGE_KEY) ?? false);

    $q.dark.set(darkModeActive.value);

    watch(() => $q.dark.isActive, (val) => {
      darkModeActive.value = val;
      $q.localStorage.set(DARK_MODE_STORAGE_KEY, val);
    });

    return {
      ROUTES,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      toggleDarkMode: $q.dark.toggle,
      darkModeActive,
      showLoading: $q.loading.show,
      hideLoading: $q.loading.hide,
    };
  },
});
</script>

<style lang="scss">
.q-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
</style>
