<template>
  <section class="about-wrap">
    <nav>
      <my-router-link to="/">home页</my-router-link>
      <my-router-link to="/about">about页</my-router-link>
    </nav>

    <h1>这是about页</h1>
  </section>
</template>

<script>
import MyRouterLink from '../components/my-router-link.vue'
export default {
  components:{
    MyRouterLink
  }
}
</script>