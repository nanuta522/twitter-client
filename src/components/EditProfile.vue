<template>
    <div class="tweet">
        <div class="container mt-4">
            <div class="row mb-4">
                <h2>Update Profile</h2>
            </div>
            <div class="row">
                <form @submit.prevent="handleFormSubmit">
                    <div class="row mb-4 justify-content-center">
                        <div class="col">
                            <div class="form-outline">
                                <input v-model="user.name" type="text" id="name" class="form-control" />
                                <label class="form-label mt-1" for="name">Name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="form-outline">
                                <input v-model="user.username" type="text" id="username" class="form-control" />
                                <label class="form-label mt-1" for="username">Username</label>
                            </div>
                        </div>
                    </div>

                    <div class="form-outline mb-4">
                        <input v-model="user.profileImg" type="text" id="profileImg" class="form-control" />
                        <label class="form-label mt-1" for="profileImg">Profile Image</label>
                    </div>

                    <div class="form-outline mb-4">
                        <i class="fa fa-envelope fa-fw mb-1"></i>
                        <input v-model="user.email" type="email" id="email" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                        <i class="fa fa-key fa-fw mb-1"></i>
                        <input v-model="user.password" type="password" id="password" class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                        <textarea v-model="user.bio" class="form-control" id="bio" rows="4"></textarea>
                    </div>

                    <button type="submit" class="btn btn-primary btn-block mb-4 button">Update</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapStores, mapActions } from 'pinia'
import router from '../router'
import { useUserStore } from './../stores/userStore'

export default {
    computed: {
        ...mapStores(useUserStore),
        ...mapState(useUserStore, ['user'])
    },
    methods: {
        ...mapActions(useUserStore, ['getUserById', 'updateUserInfo']),
        async handleFormSubmit() {
            await this.updateUserInfo(this.$route.params.user_id)
            router.push({ path: `/profile/${this.$route.params.user_id}`, replace: true })
        }
    },
    watch: {
        '$route.params.user_id': {
            async handler() {
                if (this.$route.params.user_id) {
                    this.getUserById(this.$route.params.user_id)
                }
            },
            immediate: true,
        },
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