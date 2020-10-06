<template>
    <div class="wrapper">
        <sidebar></sidebar>
        <div class="content">
            <div class="container">
               <dashboardContent></dashboardContent>
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

        }
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