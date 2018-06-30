<template>
  <form class="form-signin">
    <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
    <label for="inputEmail" class="sr-only">Email address</label>
    <input v-model="username" type="text" id="inputEmail" class="form-control" placeholder="Email address" required
      autofocus>
    <label for="inputPassword" class="sr-only">Password</label>
    <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>
    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"> Remember me
      </label>
    </div>
    <button @click.prevent="signin" class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
    <p v-if="model" class="text-center">Your email is {{getEmail}}</p>
  </form>
</template>

<script>
import { authService } from '../../services/authService'

export default {
  name: 'sign-in-component',
  props: [],
  mounted () {
  },
  data () {
    return {
      username: null,
      password: null,
      model: null,
      token: null,
      email: null,
    }
  },
  methods: {
    signin () {
      authService.signin(this.username, this.password).then(res => {
        this.model = res.data
        this.token = res.data.access_token
        this.email = res.data.email
      }).catch(err => {
        console.error(err)
      })
    }
  },
  computed: {
    // computed duoc luu vao cache, computed se chi thay doi khi du lieu ben trong no thay doi
    // vi du ham se được chạy lại (compute) khi this.model thay đổi.
    getEmail () {
      if (this.model) {
        return this.email.toLowerCase()
      }
    }
  },
  watch: {
    // ten cua wather bat buoc phai trung ten cua data (token)
    // watcher chay moi khi this.token thay doi va khong tra ve gi
    token () {
      alert(this.token)
    }
  }
}
</script>

<style lang="scss" scoped>
  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;

    h1 {
      color: $color-primary;
    }
  }
</style>
