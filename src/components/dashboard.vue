<template>
    <div class="wrapper">
        <sidebar></sidebar>
        <div class="content">
            <div class="container">
               <dashboardContent :users="users"></dashboardContent>
            </div>
        </div>
    </div>
</template>
<script>
import sidebar from "./partials/sidebar";
import dashboardContent from "./partials/content";
export default {
    name: 'dashboard',
    components: {
       sidebar,
       dashboardContent,  
    },
    data(){
        return {
            users: []
        }
    },
    methods: {
        async getAllUsers(){
            try{
                const res = await this.$http.get('/users');
                const data = res.data;
                this.users = data;
                console.log(this.users);
            }
            catch(error){
                console.error(error)
            }
        }
    },
    created() {
        const token = localStorage.getItem('user-token');
        if(!token){
            this.$router.push({
                'path': '/login'
            })
        }
        this.getAllUsers();
    }
}
</script>
<style scoped>
    .wrapper{
        display: flex;
        width: 100%;
        align-items: stretch;
    }
    .content{
        width: calc(100% - 300px);
        position: absolute;
        top: 0;
        right: 0;
    }
</style>