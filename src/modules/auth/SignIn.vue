<template>
  <div>
    <p>Login page</p>
    <home></home>
    <sign-in-component></sign-in-component>
  </div>
</template>

<script>
import SignInComponent from '@/components/auth/SignInComponent'
import Home from '@/modules/home/Home'

export default {
  name: 'sign-in',
  components: {
    SignInComponent,
    Home,
  },
}
</script>

<style lang="scss" scoped>
</style>
