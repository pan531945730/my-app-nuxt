<template>
    <div>
        <h1 class="red">Hello {{ name }}!</h1>
        <button @click="toggle">{{$store.state.counter }}</button>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
      layout (context) {
        return 'default'
      },
      data () {
          return {
              title: 'home'
          }
      },
      asyncData ({ params, error }) {
          return axios({
              url: 'https://api.github.com/repos/nuxt/nuxt.js/contents/'
          })
          .then((res) => {
              return { name: 'ddfdfd' }
          })
          .catch((e) => {
              error({ statusCode: 404, message: 'Post not found' })
          })
      },
      head () {
          return {
              title: this.title,
              meta: [
                  { hid: 'description', name: 'description', content: 'My custom description' }
              ]
          }
      },
      methods: {
        toggle() {
            this.$store.commit('increment')
        }
      },
      middleware: 'stats',
      scrollToTop: true
  }
</script>