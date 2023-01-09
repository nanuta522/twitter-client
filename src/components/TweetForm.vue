<template>
    <form @submit.prevent="handleFormSubmit">
        <div class="card-footer py-3 border-0 tweet" style="background-color: #f8f9fa;">
            <div v-if="users.length > 0" class="row">
                <div class="d-flex flex-start w-100 form-tweet">
                    <img class="rounded-circle shadow-1-strong me-3" :src="users[0].profileImg" alt="avatar" width="60"
                        height="60" />
                    <div class="form-outline w-100">
                        <textarea v-model="message" class="form-control"
                            id="textAreaExample" rows="4" style="background: #fff;"
                            :placeholder="`What's up? @${users[0].username}`"></textarea>
                    </div>
                </div>
                <div class="row d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary">Post</button>
                </div>
            </div>
        </div>
    </form>
</template>

<script>
import { mapState, mapStores, mapActions } from 'pinia'
import router from '../router'
import { useUserStore } from "./../stores/userStore"
import { useTweetStore } from "./../stores/tweetStore"

export default {
    data() {
        return {
            message: ''
        }
    },
    computed: {
        ...mapStores(useTweetStore),
        ...mapState(useUserStore, ['users']),
        ...mapState(useTweetStore, ['tweet']),
    },
    methods: {
        ...mapActions(useUserStore, ['getAllUsers']),
        ...mapActions(useTweetStore, ['createTweet', 'getTweetById']),
        async handleFormSubmit() {
            await this.createTweet(this.message)
            router.push({ path: `/profile/${this.users[0].account_id}`, replace: true })
        }
    },
    async mounted() {
        this.getAllUsers()
    },
    watch: {
        '$route.params.tweet_id': {
            async handler() {
                if (this.$route.params.tweet_id) {
                    const retweet = await this.getTweetById(this.$route.params.tweet_id)
                    console.log('RETWEET: ', this.tweet)
                    this.message = this.tweet.message
                }
            },
            immediate: true,
        },
    }
}
</script>

<style scoped>
.tweet {
    padding: 2rem;
}

.form-tweet {
    margin-top: 2rem;
}

button {
    width: 10rem;
    background-color: rgb(29, 155, 240);
    border-radius: 10rem;
    border: none;
    margin: 2rem 0 1rem 7rem;
    font-size: 1.5rem;
}
</style>