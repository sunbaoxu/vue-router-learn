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
        
        //History 模式
        // window.history.pushState(
        //   null,
        //   routes[this.to],
        //   this.to
        // )

        //Hash模式
        window.location.hash =  this.to

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