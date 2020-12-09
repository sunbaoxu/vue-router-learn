<template>
  <a
    :href="to"
    :class="[{ active: isActive },'a']"
    @click="go"
  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../router'

  export default {
    props: {
      to: {
        type:String,
        default:''
      }
    },
    computed: {
      isActive () {
        return this.to === this.$root.currentRoute
      }
    },
    methods: {
      go (event) {
        event.preventDefault()
        this.$root.currentRoute = this.to
        window.history.pushState(
          null,
          routes[this.to],
          this.to
        )

        console.log(window.history)
      }
    }
  }
</script>

<style scoped>
  .a{
    color: #333;
  }
  .active {
    color: cornflowerblue;
  }
</style>