<template>
  <v-app>
    <v-app-bar app class="elevation-1" dense>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
    </v-app-bar>
    <transition :name="transitionName" mode="in-out">
      <router-view />
    </transition>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      transitionName: null
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
    }
  }
}
</script>
