<template>
  <div class="slideable-page grey lighten-3" @scroll="saveScroll">
    <v-container fluid class="fill-height-min">
      <v-row justify="center" align="center">
        <v-col>
          <v-alert type="info" outlined>
            Item {{ id }}
          </v-alert>
          <v-btn to="/">Go Back</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import scrollMixin from '../mixins/scrollMixin'

export default {
  mixins: [scrollMixin],
  computed: {
    id () { return this.$route.params.id }
  }
}
</script>
