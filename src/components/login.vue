<template>
<div class="container">
    <form @submit="submit" class="form">
  <div class="form-group">
    <label for="email">Email address</label>
    <input autocomplete="true" required v-model="form.email" type="email" class="form-control" id="email" aria-describedby="emailHelp">
  </div>
  <div class="form-group">
    <label for="password">Password</label>
    <input autocomplete="true" required v-model="form.password" type="password" class="form-control" id="password">
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
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submit(event){
            event.preventDefault();
            console.log(this.form);
            this.$router.push({
                path: '/dashboard'
            });
            
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