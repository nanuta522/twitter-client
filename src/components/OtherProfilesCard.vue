<template>
    <div class="row mb-5">
        <div v-if="users.length > 0" v-for="user in users" class="card-body text-center collage">
            <div class="mb-3 profile-card">
                <router-link :to="`/profile/${user.account_id}`"><img :src="user.profileImg"
                        class="rounded-circle img-fluid" style="width: 100px;" /></router-link>
            </div>
            <h4 class="mb-2">{{ user.name }}</h4>
            <p class="text-muted mb-4">@{{ user.username }}</p>

            <button class="btn btn-danger btn-rounded btn-lg" @click="handleDeleteUser(user.account_id)">
                Delete
            </button>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from "pinia"
import { useUserStore } from "./../stores/userStore"

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(useUserStore, ['users']),
    },
    methods: {
        ...mapActions(useUserStore, ['getAllUsers', 'deleteUser']),
        async handleDeleteUser(user_id) {
            await this.deleteUser(user_id)
            this.getAllUsers()
        }
    },
    async onUpdated() {
        await this.getAllUsers()
    }
}
</script>

<style scoped>
.collage {
    margin-left: -11rem;
}

.profile-card {
    margin-top: 7rem;
}

button {
    width: 15rem;
    border-radius: 10rem;
    border: none;
    padding: .5rem 1rem;
    font-size: 1.5rem;
}
</style>