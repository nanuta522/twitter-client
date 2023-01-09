<template>
    <Tweet v-for="tweet in userTweets" :tweet="tweet" :key="tweet.tweet_id" />

    <div class="tweet arrowDown justify-content-center mt-5">
        <i class="fas fa-angle-double-down" style="color:rgba(188, 186, 186, 0.897)"></i>
    </div>
</template>

<script>
import Tweet from '../components/tweet/Tweet.vue'
import { mapState, mapStores, mapActions } from 'pinia'
import { useTweetStore } from '../stores/tweetStore'
import { useUserStore } from '../stores/userStore'

export default {
    components: {
        Tweet
    },
    computed: {
        ...mapStores(useUserStore),
        ...mapState(useUserStore, ['user', 'users']),
        ...mapStores(useTweetStore),
        ...mapState(useTweetStore, ['likedTweets', 'userTweets'])
    },
    methods: {
        ...mapActions(useUserStore, ['getAllUsers', 'getUserById']),
        ...mapActions(useTweetStore, ['getTweetsLikedByUser', 'getTweetsByUser', 'getAllTweets'])
    },
    watch: {
        '$route.params.user_id': {
            async handler() {
                if (this.$route.params.user_id) {
                    await this.getTweetsByUser(this.$route.params.user_id)
                }
            },
            immediate: true,
        },
    }
}
</script>

<style scoped>
.tweet.arrowDown {
border: none;
}
</style>