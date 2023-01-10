<template>
    <Tweet class="super" :tweet="tweet" />

    <Tweet v-for="myTweet in tweetComments" :tweet="myTweet" :parentTweet="tweet" :key="myTweet.tweet_id" />

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
            immediate: true
        }
    },
    async mounted() {
        if (this.tweet) {
            await this.getTweetComments(this.tweet.tweet_id)
        }
        this.number = this.tweetComments.length
    }
}
</script>

<style scoped>
.tweet.arrowDown {
    border: none;
}

.super {
    background-color: rgba(236, 236, 236, 0.29);
}
</style>
