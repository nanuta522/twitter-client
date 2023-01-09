<template>
    <Tweet :tweet="tweet" />

    <Tweet v-for="tweet in tweetComments" :tweet="tweet" :key="tweet.tweet_id" />

    <div class="tweet arrowDown justify-content-center mt-5">
        <i class="fas fa-angle-double-down" style="color:rgba(188, 186, 186, 0.897)"></i>
    </div>
</template>

<script>
import Tweet from './../components/tweet/Tweet.vue'
import { mapState, mapStores, mapActions } from 'pinia'
import { useTweetStore } from './../stores/tweetStore'
import { useUserStore } from "./../stores/userStore"

export default {
    components: {
        Tweet
    },
    computed: {
        ...mapStores(useUserStore),
        ...mapState(useUserStore, ['user', 'users']),
        ...mapStores(useTweetStore),
        ...mapState(useTweetStore, ['tweet', 'tweetComments'])
    },
    methods: {
        ...mapActions(useUserStore, ['getAllUsers']),
        ...mapActions(useTweetStore, ['getTweetById', 'getAllTweets', 'getTweetComments'])
    },
    watch: {
        '$route.params.tweet_id': {
            async handler() {
                if (this.$route.params.tweet_id) {
                    await this.getTweetById(this.$route.params.tweet_id)
                    await this.getTweetComments(this.$route.params.tweet_id)
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
