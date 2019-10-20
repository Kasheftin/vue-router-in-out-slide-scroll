export default {
  mounted () {
    this.$el.scrollTop = localStorage.getItem('scroll-' + this.$route.path) || 0
  },
  methods: {
    saveScroll (event) {
      localStorage.setItem('scroll-' + this.$route.path, event.currentTarget.scrollTop)
    }
  }
}
