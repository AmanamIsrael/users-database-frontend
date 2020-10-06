<template>
    <div>
        <div class="wrapper">
            <b-button v-b-modal.form-modal variant="primary d-block ml-auto my-3"><i class="fas fa-plus"></i> Add new user</b-button>
        <b-modal id="form-modal" hide-footer  title="Add User">
            <b-form @submit="addUser" @reset="resetModal" noValidate="true">
                <b-form-group
                        id="first"
                        label="First Name"
                        label-for="firstname"
                        >
                        <b-form-input
                        id="firstname"
                        v-model="userDetails.first_name"
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
                        v-model="userDetails.last_name"
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
                 <b-tbody>
                     <b-td>man</b-td>
                     <b-td>man</b-td>
                     <b-td>man</b-td>
                     <b-td>
                         <div>
                             <b-dropdown variant="light" id="dropdown-1" text="Action">
                                 <b-dropdown-item>Edit</b-dropdown-item>
                                 <b-dropdown-item>Delete</b-dropdown-item>
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
            event.preventDefault();
            console.log(this.userDetails)
            this.$nextTick(()=> {
                this.$bvModal.hide('formModal')
            })
        },
        resetModal() {
        this.first_name = ''
        this.last_name = ''
        this.age = ''
        }
    }
}
</script>
<style scoped>

</style>