<template>
    <div>
        <div class="sidebar">
            <div class="mx-3 d-flex">
                        <h6 class="my-4 text-light mr-auto">Welcome Admin</h6>
                        <i v-on:click="toggleSideBar" class="toggle-btn fas fa-bars ml-auto my-auto"></i>
            </div>
            <div class="mb-4">
                <div class="link p-3 d-flex">
                    <p class="my-auto mr-auto text-light">Users</p>
                    <i class="link-icon fas ml-auto fa-user-friends"></i>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sidebar',
    data(){
        return {

        }
    }, 
    methods: {
        toggleSideBar(){
            document.querySelector('.sidebar').classList.toggle('active');
        }
    }
}
</script>
<style scoped>
    .sidebar{
        width: 300px;
        height: 100vh;
        position: fixed;
        background-color: rgb(27, 27, 27);
        transition: all ease .2s;
    }
    .toggle-btn:hover {
        cursor: pointer;
        color: rgb(45, 45, 243); ;
    }
    .active{
        margin-left: -260px;
    }
    .fas {
        color: #fff;
    }
    .link:hover{
        background-color:rgb(31, 31, 31);
    }
</style>