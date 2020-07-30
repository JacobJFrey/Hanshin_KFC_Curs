<template>
  <div class="home">
    <img alt="hanshin tiger logo" src="@/assets/HanshinTigersLogo.jpg">
    <StandingsComp />
  </div>
</template>

<script>
import StandingsComp from '@/components/StandingsComp.vue'

export default {
  name: 'Home',
  components: {
    StandingsComp,
  }
}
</script>
