<template>
    <div>
        <router-link class="btn btn-primary" to='/login'>Go to login</router-link>
    </div>
</template>
<script>
export default {
    name: 'home',
    props: {

    }
}
</script>
<style scoped>
    div{
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>