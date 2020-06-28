<template>
  <div id="app">
    <div id="nav" class="border">
      <navbar></navbar>
    </div>
    <router-view/>
    <div id="foot">
      <footers></footers>
    </div>
  </div>
</template>
<script>
import navbar from '../src/components/nav.component'
import footers from '../src/components/footer.component'
export default {
  components: {
    navbar,
    footers
  },
}
</script>
