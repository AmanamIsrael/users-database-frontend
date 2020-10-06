<template>
    <div>
        <button data-toggle="modal" data-target="formModal" class="btn btn-primary d-block ml-auto my-3"><i class="fas fa-plus"></i> Add new user</button>
         <!-- modal -->
         <div class="modal fade" id="formModal" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="formModal" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Add new User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    ...
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save User</button>
                </div>
                </div>
            </div>
            </div>
    </div>
</template>
<script>
export default {
    name: 'dashboardContent',
    props: {
    },
    data(){
        return {
            items: [
            { first_name: 'Dickerson', last_name: 'Macdonald', age: 40,}
            ],

            userDetails: {
                first_name: '',
                last_name: '',
                age: '',
            }
        }
    }, 
    methods: {
        addUser(){
            if(!this.isFormValid()){
                return
            }
            console.log(this.userDetails)
            this.$nextTick(()=> {
                this.$bvModal.hide('formModal')
            })
        },
        resetModal() {
        this.first_name = ''
        this.last_name = ''
        this.age = ''
        },
    }
}
</script>
<style scoped>

</style>