<template>
  <div class="about">
    <h1>This is the about page</h1>
    <input type="text" v-model="state.query">
  </div>
</template>

<script>
import { onMounted, reactive } from 'vue'
export default {
  name: 'AboutPage',

  setup() {
    const state = reactive({
      query: ''
    })
    onMounted(async() => {
    })
    return {
      state
    }
  },
  beforeRouteLeave(to, from, next) {
    if (this.state.query.length > 0) {
      const leave = window.confirm('You have unsaved data are you sure you want to leave this page?')
      if (leave) {
        next()
      } else {
        next(false)
      }
    } else {
      next()
    }
  }
}
</script>
