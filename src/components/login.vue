<template>
<div class="container">
    <form @submit.prevent="submit" class="form">
  <div class="form-group">
    <label for="email">Email address</label>
    <input autocomplete="true" required v-model="login.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input autocomplete="true" required v-model="login.password" type="password" class="form-control" id="password">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            login: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async submit(){
            console.log(this.login);
            try{
                const res = await this.$http.post('/auth/login', this.login);
                const data = res.data;
                localStorage.setItem('user-token', data.token)
                this.$router.push({
                    'path': '/dashboard'
                })
            }
        catch(error){
            console.error(error);
        }
    }
}
}
</script>
<style scoped>
    .form{
        width: 400px;
        background-color: gainsboro;
        border-radius: 1em;
        padding: 5%;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>