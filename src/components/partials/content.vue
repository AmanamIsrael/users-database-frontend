<template>
    <div>
        <div class="wrapper">
            <b-button v-b-modal.form-modal variant="primary d-block ml-auto my-3"><i class="fas fa-plus"></i> Add new user</b-button>
        <b-modal id="form-modal" hide-footer  title="Add User">
            <b-form @submit.prevent="addUser" @reset="resetModal" noValidate="true">
                <b-form-group
                        id="first"
                        label="First Name"
                        label-for="firstname"
                        >
                        <b-form-input
                        id="firstname"
                        v-model="userDetails.firstname"
                        type="text"
                        required
                        placeholder="Enter First name"
                        ></b-form-input>
                </b-form-group>
                <b-form-group
                        id="last"
                        label="First Name"
                        label-for="lastname"
                        >
                        <b-form-input
                        id="lastname"
                        v-model="userDetails.lastname"
                        type="text"
                        required
                        placeholder="Enter Last name"
                        ></b-form-input>
                </b-form-group>
                <b-form-group
                        id="age"
                        label="First Name"
                        label-for="userage"
                        >
                        <b-form-input
                        id="userage"
                        v-model="userDetails.age"
                        type="text"
                        required
                        placeholder="Enter Age"
                        ></b-form-input>
                </b-form-group>
                <b-button type="submit" variant="success mr-3">Add User</b-button>
                <b-button type="reset" variant="secondary">Reset</b-button>
            </b-form>
        </b-modal>

        <div class="mt-5">
             <b-table-simple hover responsive>
                 <b-thead>
                     <b-th>First Name</b-th>
                     <b-th>Last Name</b-th>
                     <b-th>Age</b-th>
                     <b-th>Actions</b-th>
                 </b-thead>
                 <b-tbody v-for="user in users" :key="user.id">
                     <b-td>{{user.firstname}}</b-td>
                     <b-td>{{user.lastname}}</b-td>
                     <b-td>{{user.age}}</b-td>
                     <b-td>
                         <div>
                             <b-dropdown variant="light" id="dropdown-1" text="Action">
                                 <b-dropdown-item v-on:click="deleteUser(user._id)">Delete</b-dropdown-item>
                             </b-dropdown>
                        </div>
                    </b-td>
                 </b-tbody>

            </b-table-simple>
        </div>
        </div>
    </div>
</template>
<script>
import Swal from 'sweetalert2'
export default {
    name: 'dashboardContent',
    props:['users'],
    data(){
        return {
            userDetails: {
                firstname: '',
                lastname: '',
                age: '',
            }
        }
    }, 
    methods: {
        async addUser(){
            for(let values in this.userDetails){
                if(values=== ''){
                    return;
                }
            }
            const sendData = await this.$http.post('/users/add-user', this.userDetails);
            console.log(sendData);
            this.$nextTick(()=> {
                this.$bvModal.hide('form-modal')
            });
            this.$parent.getAllUsers();
        },
        resetModal() {
        this.first_name = ''
        this.last_name = ''
        this.age = ''
        },
        deleteUser(userId){
            const payload = {
                _id: userId
            }
            try{
                Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
                }).then(async (result) => {
                if (result.isConfirmed) {
                    const deleteUser = await this.$http.post('/users/delete-user', payload);
                    console.log(deleteUser);
                    this.$parent.getAllUsers();
                    Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                    )
                }
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

</style>