<template>
  <div class="slideable-page" @scroll="saveScroll">
    <v-container fluid class="fill-height-min">
      <v-row justify="center" align="center">
        <v-col>
          <v-list-item v-for="item in items" :key="item.id" :to="{ name: 'item', params: { id: item.id } }">
            <v-list-item-content>
              <v-list-item-title>Item #{{ item.id }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import scrollMixin from '../mixins/scrollMixin'

export default {
  mixins: [scrollMixin],
  data () {
    const items = []
    for (let i = 0; i < 100; i++) {
      items.push({ id: i + 1 })
    }
    return { items }
  }
}
</script>
