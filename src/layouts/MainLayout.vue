<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat
               @click="drawer = !drawer"
               round
               dense
               icon="menu" />

        <q-toolbar-title>
          Hot Desk Booking
        </q-toolbar-title>

        <q-space />

        <div class="q-gutter-sm row items-center no-wrap">
          <q-btn round
                 dense
                 flat
                 color="white"
                 :icon="$q.fullscreen.isActive ? 'fullscreen_exit' : 'fullscreen'"
                 @click="$q.fullscreen.toggle()"
                 v-if="$q.screen.gt.sm">
            <!--            <q-tooltip>Messages</q-tooltip>-->
          </q-btn>
          <q-btn round
                 dense
                 flat
                 color="white"
                 icon="notifications">
            <q-badge color="red"
                     text-color="white"
                     floating>
              5
            </q-badge>
            <q-menu>
              <q-list style="min-width: 100px">
                <messages></messages>
                <q-card class="text-center no-shadow no-border">
                  <q-btn label="View All"
                         style="max-width: 120px !important;"
                         flat
                         dense
                         class="text-indigo-8"></q-btn>
                </q-card>
              </q-list>
            </q-menu>
            <!--            <q-tooltip>Notifications</q-tooltip>-->
          </q-btn>
          <q-btn round
                 flat>
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawer"
              show-if-above
              :mini="miniState"
              @mouseover="miniState = false"
              @mouseout="miniState = true"
              :width="220"
              :breakpoint="600"
              bordered
              content-class="bg-primary text-white">
      <q-list>
        <q-item to="/index"
                active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Calendar"
                active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="date_range" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Calendar</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Profile"
                active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <q-item-label>User Profile</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Profile"
                active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Settings</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'
import Messages from "./Messages";

export default {
  name: 'MainLayout',

  components: {
    Messages,
    EssentialLink
  },

  data () {
    return {
      drawer: false,
      miniState: true
    }
  }
}
</script>
