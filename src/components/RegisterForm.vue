<template>
    <div class="tweet">
        <div class="container mt-4">
            <div class="row mb-4">
                <h2>Register</h2>
            </div>

            <div class="row">
                <form @submit.prevent="handleFormSubmit">
                    <div class="row mb-4 justify-content-center">
                        <div class="col">
                            <div class="form-outline">
                                <input v-model="user.name" type="text" id="form6Example1" class="form-control" />
                                <label class="form-label" for="form6Example1">Name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input v-model="user.username" type="text" id="form6Example2" class="form-control" />
                                <label class="form-label" for="form6Example2">Username</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-outline mb-4">
                        <i class="fa fa-envelope fa-fw"></i>
                        <input v-model="user.email" type="email" id="form6Example3" class="form-control"
                            placeholder="Email" />
                    </div>

                    <div class="form-outline mb-4">
                        <i class="fa fa-key fa-fw"></i>
                        <input v-model="user.password" type="pasword" id="form6Example4" class="form-control"
                            placeholder="Password" />
                    </div>

                    <div class="form-outline mb-4">
                        <input v-model="user.birthDate" type="string" id="form6Example5" class="form-control"
                            placeholder="Birthday (YYYY-MM-DD)" />
                    </div>

                    <div class="form-outline mb-4">
                        <textarea v-model="user.bio" class="form-control" id="form6Example7" rows="4"
                            placeholder="Bio"></textarea>
                    </div>

                    <div class="form-check d-flex justify-content-center mb-4">
                        <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
                        <label class="form-check-label" for="form6Example8"> Create an account? </label>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block mb-4 button">Register</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapStores, mapActions } from 'pinia'
import router from '../router'
import { useUserStore } from "./../stores/userStore"

export default {
    data() {
        return {
            user: {
                name: '',
                username: '',
                profileImg: null,
                email: '',
                password: '',
                birthDate: '',
                bio: '',
            }
        }
    },
    computed: {
        ...mapStores(useUserStore)/* ,
        ...mapState(useUserStore, ['user']) */
    },
    methods: {
        ...mapActions(useUserStore, ['createUser']),
        async handleFormSubmit() {
            await this.createUser(this.user)
            router.push({ path: `/`, replace: true })
        }
    }
}
</script>

<style scoped>
button {
    width: 10rem;
    background-color: rgb(29, 155, 240);
    border-radius: 10rem;
    border: none;
    margin: 1rem 0 1rem 13.5rem;
    font-size: 1.5rem;
}
</style>